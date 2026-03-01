import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contacts" RENAME COLUMN "contact_intro" TO "content";
  ALTER TABLE "home" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "home" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "home" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "ai_practices" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "ai_practices" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "ai_practices" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "buy_homepage" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "buy_homepage" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "buy_homepage" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "car_comparison" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "car_comparison" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "car_comparison" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "home" ADD CONSTRAINT "home_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ai_practices" ADD CONSTRAINT "ai_practices_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "buy_homepage" ADD CONSTRAINT "buy_homepage_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "car_comparison" ADD CONSTRAINT "car_comparison_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "home_meta_meta_image_idx" ON "home" USING btree ("meta_image_id");
  CREATE INDEX "ai_practices_meta_meta_image_idx" ON "ai_practices" USING btree ("meta_image_id");
  CREATE INDEX "buy_homepage_meta_meta_image_idx" ON "buy_homepage" USING btree ("meta_image_id");
  CREATE INDEX "car_comparison_meta_meta_image_idx" ON "car_comparison" USING btree ("meta_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contacts" RENAME COLUMN "content" TO "contact_intro";
  ALTER TABLE "home" DROP CONSTRAINT "home_meta_image_id_media_id_fk";
  
  ALTER TABLE "ai_practices" DROP CONSTRAINT "ai_practices_meta_image_id_media_id_fk";
  
  ALTER TABLE "buy_homepage" DROP CONSTRAINT "buy_homepage_meta_image_id_media_id_fk";
  
  ALTER TABLE "car_comparison" DROP CONSTRAINT "car_comparison_meta_image_id_media_id_fk";
  
  DROP INDEX "home_meta_meta_image_idx";
  DROP INDEX "ai_practices_meta_meta_image_idx";
  DROP INDEX "buy_homepage_meta_meta_image_idx";
  DROP INDEX "car_comparison_meta_meta_image_idx";
  ALTER TABLE "home" DROP COLUMN "meta_title";
  ALTER TABLE "home" DROP COLUMN "meta_description";
  ALTER TABLE "home" DROP COLUMN "meta_image_id";
  ALTER TABLE "ai_practices" DROP COLUMN "meta_title";
  ALTER TABLE "ai_practices" DROP COLUMN "meta_description";
  ALTER TABLE "ai_practices" DROP COLUMN "meta_image_id";
  ALTER TABLE "buy_homepage" DROP COLUMN "meta_title";
  ALTER TABLE "buy_homepage" DROP COLUMN "meta_description";
  ALTER TABLE "buy_homepage" DROP COLUMN "meta_image_id";
  ALTER TABLE "car_comparison" DROP COLUMN "meta_title";
  ALTER TABLE "car_comparison" DROP COLUMN "meta_description";
  ALTER TABLE "car_comparison" DROP COLUMN "meta_image_id";`)
}
