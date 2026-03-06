/**
 * Sync media with Vercel Blob.
 *
 * Modes (via CLI flag):
 * - Download: Downloads all media from Vercel Blob into ./download
 *   - Run: bun run download-media            (default mode)
 *   - Or:  bun run scripts/blob-media-sync.ts --download
 *
 * - Upload: Uploads all files from ./download back to Vercel Blob
 *   - Run: bun run upload-media
 *   - Or:  bun run scripts/blob-media-sync.ts --upload
 *
 * Requires: BLOB_READ_WRITE_TOKEN in .env
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { del, list, put } from "@vercel/blob";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOWNLOAD_DIR = path.resolve(__dirname, "..", "download");

type LocalFile = {
  absolutePath: string;
  relativePath: string;
};

const downloadFile = async (url: string, destPath: string): Promise<void> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, buffer);
};

const collectFilesRecursively = (rootDir: string): LocalFile[] => {
  if (!fs.existsSync(rootDir)) {
    return [];
  }

  const entries = fs.readdirSync(rootDir, { withFileTypes: true });
  const files: LocalFile[] = [];

  for (const entry of entries) {
    const entryPath = path.join(rootDir, entry.name);

    if (entry.isDirectory()) {
      files.push(...collectFilesRecursively(entryPath));
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    files.push({
      absolutePath: entryPath,
      relativePath: path.relative(DOWNLOAD_DIR, entryPath).replace(/\\/g, "/"),
    });
  }

  return files;
};

const runDownload = async (token: string): Promise<void> => {
  fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });

  let cursor: string | undefined;
  let totalDownloaded = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const result = await list({
      prefix: "",
      limit: 1000,
      cursor,
      token,
    });

    for (const blob of result.blobs) {
      const destPath = path.join(DOWNLOAD_DIR, blob.pathname);
      try {
        await downloadFile(blob.downloadUrl ?? blob.url, destPath);
        totalDownloaded++;
        console.log(`Downloaded: ${blob.pathname}`);
      } catch (err) {
        console.error(`Failed to download ${blob.pathname}:`, err);
      }
    }

    if (!result.hasMore || !result.cursor) break;
    cursor = result.cursor;
  }

  console.log(`\nDone. Downloaded ${totalDownloaded} files to ${DOWNLOAD_DIR}`);
};

const runUpload = async (token: string): Promise<void> => {
  if (!fs.existsSync(DOWNLOAD_DIR)) {
    console.error(`Download directory not found: ${DOWNLOAD_DIR}`);
    process.exit(1);
  }

  const files = collectFilesRecursively(DOWNLOAD_DIR);

  if (files.length === 0) {
    console.log(`No files found in ${DOWNLOAD_DIR} to upload.`);
    return;
  }

  console.log(
    `Found ${files.length} files in ${DOWNLOAD_DIR}. Uploading to Vercel Blob...\n`,
  );

  let uploadedCount = 0;
  let failedCount = 0;

  for (const file of files) {
    try {
      const fileBuffer = fs.readFileSync(file.absolutePath);

      await put(file.relativePath, fileBuffer, {
        token,
        access: "public",
      });

      uploadedCount++;
      console.log(`Uploaded: ${file.relativePath}`);
    } catch (error) {
      failedCount++;
      console.error(`Failed to upload ${file.relativePath}:`, error);
    }
  }

  console.log(
    `\nDone. Uploaded ${uploadedCount} files to Vercel Blob.${failedCount ? ` ${failedCount} failed.` : ""}`,
  );
};

const runClear = async (token: string): Promise<void> => {
  let cursor: string | undefined;
  let totalDeleted = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const result = await list({
      prefix: "",
      limit: 1000,
      cursor,
      token,
    });

    if (result.blobs.length === 0) {
      if (!result.hasMore || !result.cursor) break;
      cursor = result.cursor;
      continue;
    }

    const urls = result.blobs.map((blob) => blob.url);
    try {
      await del(urls, { token });
      totalDeleted += urls.length;
      console.log(`Deleted ${urls.length} files (total: ${totalDeleted})`);
    } catch (err) {
      console.error("Failed to delete batch:", err);
      throw err;
    }

    if (!result.hasMore || !result.cursor) break;
    cursor = result.cursor;
  }

  console.log(`\nDone. Deleted ${totalDeleted} files from Vercel Blob.`);
};

const run = async (): Promise<void> => {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    console.error("Missing BLOB_READ_WRITE_TOKEN in .env");
    process.exit(1);
  }

  const args = process.argv.slice(2);
  const modeArg = args.find(
    (arg) => arg === "--download" || arg === "--upload" || arg === "--clear",
  );

  if (!modeArg || modeArg === "--download") {
    await runDownload(token);
    return;
  }

  if (modeArg === "--upload") {
    await runUpload(token);
    return;
  }

  if (modeArg === "--clear") {
    await runClear(token);
    return;
  }

  console.error(
    'Unknown mode. Use "--download" (default), "--upload", or "--clear".',
  );
  process.exit(1);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
