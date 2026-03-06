import {
  MigrateDownArgs,
  MigrateUpArgs,
  sql,
} from "@payloadcms/db-vercel-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "car_comparison" ADD COLUMN IF NOT EXISTS "floor_testing_redirect_image_id" integer;

  DO $$
  BEGIN
    IF NOT EXISTS (
      SELECT 1
      FROM pg_constraint
      WHERE conname = 'car_comparison_floor_testing_redirect_image_id_media_id_fk'
    ) THEN
      ALTER TABLE "car_comparison" ADD CONSTRAINT "car_comparison_floor_testing_redirect_image_id_media_id_fk" FOREIGN KEY ("floor_testing_redirect_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    END IF;
  END $$;

  CREATE INDEX IF NOT EXISTS "car_comparison_floor_testing_floor_testing_redirect_imag_idx" ON "car_comparison" USING btree ("floor_testing_redirect_image_id");`);
}

export async function down({
  db,
  payload,
  req,
}: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DO $$
  BEGIN
    IF EXISTS (
      SELECT 1
      FROM pg_constraint
      WHERE conname = 'car_comparison_floor_testing_redirect_image_id_media_id_fk'
    ) THEN
      ALTER TABLE "car_comparison" DROP CONSTRAINT "car_comparison_floor_testing_redirect_image_id_media_id_fk";
    END IF;
  END $$;
  
  DROP INDEX IF EXISTS "car_comparison_floor_testing_floor_testing_redirect_imag_idx";
  ALTER TABLE "car_comparison" DROP COLUMN IF EXISTS "floor_testing_redirect_image_id";`);
}
