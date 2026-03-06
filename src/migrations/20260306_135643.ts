import {
  MigrateDownArgs,
  MigrateUpArgs,
  sql,
} from "@payloadcms/db-vercel-postgres";

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    -- Add columns only if they do not already exist
    ALTER TABLE "buy_home"
    ADD COLUMN IF NOT EXISTS "process_image_id" integer;

    ALTER TABLE "car_comparison"
    ADD COLUMN IF NOT EXISTS "problem_image_id" integer;

    ALTER TABLE "car_comparison"
    ADD COLUMN IF NOT EXISTS "floor_testing_redirect_link" varchar DEFAULT '' NOT NULL;

    -- Add foreign key constraints only if they do not already exist
    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'buy_home_process_image_id_media_id_fk'
      ) THEN
        ALTER TABLE "buy_home"
        ADD CONSTRAINT "buy_home_process_image_id_media_id_fk"
        FOREIGN KEY ("process_image_id") REFERENCES "public"."media"("id")
        ON DELETE set null ON UPDATE no action;
      END IF;
    END
    $$;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'car_comparison_problem_image_id_media_id_fk'
      ) THEN
        ALTER TABLE "car_comparison"
        ADD CONSTRAINT "car_comparison_problem_image_id_media_id_fk"
        FOREIGN KEY ("problem_image_id") REFERENCES "public"."media"("id")
        ON DELETE set null ON UPDATE no action;
      END IF;
    END
    $$;

    -- Create indexes only if they do not already exist
    CREATE INDEX IF NOT EXISTS "buy_home_process_process_image_idx"
      ON "buy_home" USING btree ("process_image_id");

    CREATE INDEX IF NOT EXISTS "car_comparison_problem_problem_image_idx"
      ON "car_comparison" USING btree ("problem_image_id");
  `);
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    -- Drop foreign key constraints if they exist
    DO $$
    BEGIN
      IF EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'buy_home_process_image_id_media_id_fk'
      ) THEN
        ALTER TABLE "buy_home"
        DROP CONSTRAINT "buy_home_process_image_id_media_id_fk";
      END IF;
    END
    $$;

    DO $$
    BEGIN
      IF EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'car_comparison_problem_image_id_media_id_fk'
      ) THEN
        ALTER TABLE "car_comparison"
        DROP CONSTRAINT "car_comparison_problem_image_id_media_id_fk";
      END IF;
    END
    $$;

    -- Drop indexes if they exist
    DROP INDEX IF EXISTS "buy_home_process_process_image_idx";
    DROP INDEX IF EXISTS "car_comparison_problem_problem_image_idx";

    -- Drop columns if they exist
    ALTER TABLE "buy_home"
    DROP COLUMN IF EXISTS "process_image_id";

    ALTER TABLE "car_comparison"
    DROP COLUMN IF EXISTS "problem_image_id";

    ALTER TABLE "car_comparison"
    DROP COLUMN IF EXISTS "floor_testing_redirect_link";
  `);
}
