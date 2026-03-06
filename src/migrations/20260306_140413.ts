import {
  MigrateDownArgs,
  MigrateUpArgs,
  sql,
} from "@payloadcms/db-vercel-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "car_comparison" RENAME COLUMN "floor_testing_redirect_link" TO "floor_testing_redirect_image_id";
  ALTER TABLE "car_comparison" ADD CONSTRAINT "car_comparison_floor_testing_redirect_image_id_media_id_fk" FOREIGN KEY ("floor_testing_redirect_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "car_comparison_floor_testing_floor_testing_redirect_imag_idx" ON "car_comparison" USING btree ("floor_testing_redirect_image_id");`);
}

export async function down({
  db,
  payload,
  req,
}: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "car_comparison" DROP CONSTRAINT "car_comparison_floor_testing_redirect_image_id_media_id_fk";
  
  DROP INDEX "car_comparison_floor_testing_floor_testing_redirect_imag_idx";
  ALTER TABLE "car_comparison" ADD COLUMN "floor_testing_redirect_link" varchar DEFAULT '' NOT NULL;
  ALTER TABLE "car_comparison" DROP COLUMN "floor_testing_redirect_image_id";`);
}
