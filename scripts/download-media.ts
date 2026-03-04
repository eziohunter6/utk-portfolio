/**
 * Downloads all media from Vercel Blob into ./download
 * Run: bun run download-media  (or: npx tsx scripts/download-media.ts)
 * Requires: BLOB_READ_WRITE_TOKEN in .env
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { list } from "@vercel/blob";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOWNLOAD_DIR = path.resolve(__dirname, "..", "download");

const downloadFile = async (url: string, destPath: string): Promise<void> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, buffer);
};

const run = async (): Promise<void> => {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    console.error("Missing BLOB_READ_WRITE_TOKEN in .env");
    process.exit(1);
  }

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

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
