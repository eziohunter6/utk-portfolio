import {
  MigrateDownArgs,
  MigrateUpArgs,
  sql,
} from "@payloadcms/db-vercel-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Ensure we end up with a fresh integer `problem_video_id` column and no `problem_iframe`
  await db.execute(sql`
    DO $$
    BEGIN
      -- Old string column from previous schema — drop if it still exists
      IF EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_schema = 'public'
          AND table_name = 'car_comparison'
          AND column_name = 'problem_iframe'
      ) THEN
        ALTER TABLE "car_comparison" DROP COLUMN "problem_iframe";
      END IF;

      -- If a stale problem_video_id exists (wrong type, defaults, etc.), drop and recreate
      IF EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_schema = 'public'
          AND table_name = 'car_comparison'
          AND column_name = 'problem_video_id'
      ) THEN
        ALTER TABLE "car_comparison" DROP COLUMN "problem_video_id";
      END IF;

      -- Create the correct integer FK column
      ALTER TABLE "car_comparison" ADD COLUMN "problem_video_id" integer;
    END $$;
  `);

  await db.execute(sql`
    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'car_comparison_problem_video_id_media_id_fk'
      ) THEN
        ALTER TABLE "car_comparison"
          ADD CONSTRAINT "car_comparison_problem_video_id_media_id_fk"
          FOREIGN KEY ("problem_video_id") REFERENCES "public"."media"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
      END IF;
    END $$;
  `);

  await db.execute(sql`
    CREATE INDEX IF NOT EXISTS "car_comparison_problem_problem_video_idx"
    ON "car_comparison" USING btree ("problem_video_id");
  `);
}

export async function down({
  db,
  payload,
  req,
}: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "car_comparison" DROP CONSTRAINT IF EXISTS "car_comparison_problem_video_id_media_id_fk";
    DROP INDEX IF EXISTS "car_comparison_problem_problem_video_idx";
    ALTER TABLE "car_comparison" DROP COLUMN IF EXISTS "problem_video_id";
    ALTER TABLE "car_comparison" ADD COLUMN IF NOT EXISTS "problem_iframe" varchar DEFAULT '' NOT NULL;
  `);
}
