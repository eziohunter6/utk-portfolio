import {
  MigrateDownArgs,
  MigrateUpArgs,
  sql,
} from "@payloadcms/db-vercel-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "works" ALTER COLUMN "slug" SET DEFAULT '';
  ALTER TABLE "works" ALTER COLUMN "title" SET DEFAULT '';
  ALTER TABLE "works" ALTER COLUMN "description" SET DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb;
  ALTER TABLE "works" ALTER COLUMN "description" SET NOT NULL;`);
}

export async function down({
  db,
  payload,
  req,
}: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "works" ALTER COLUMN "slug" DROP DEFAULT;
  ALTER TABLE "works" ALTER COLUMN "title" DROP DEFAULT;
  ALTER TABLE "works" ALTER COLUMN "description" DROP DEFAULT;
  ALTER TABLE "works" ALTER COLUMN "description" DROP NOT NULL;`);
}
