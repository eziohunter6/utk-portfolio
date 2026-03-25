import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "buy_home" ADD COLUMN "exploration_dark_image_id" integer;
  ALTER TABLE "car_comparison" ADD COLUMN "problem_dark_image_id" integer;
  ALTER TABLE "car_comparison" ADD COLUMN "floor_testing_dark_image_id" integer;
  ALTER TABLE "ai_practices" ADD COLUMN "ai_video_dark_image_id" integer;
  ALTER TABLE "buy_home" ADD CONSTRAINT "buy_home_exploration_dark_image_id_media_id_fk" FOREIGN KEY ("exploration_dark_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "car_comparison" ADD CONSTRAINT "car_comparison_problem_dark_image_id_media_id_fk" FOREIGN KEY ("problem_dark_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "car_comparison" ADD CONSTRAINT "car_comparison_floor_testing_dark_image_id_media_id_fk" FOREIGN KEY ("floor_testing_dark_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ai_practices" ADD CONSTRAINT "ai_practices_ai_video_dark_image_id_media_id_fk" FOREIGN KEY ("ai_video_dark_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "buy_home_exploration_exploration_dark_image_idx" ON "buy_home" USING btree ("exploration_dark_image_id");
  CREATE INDEX "car_comparison_problem_problem_dark_image_idx" ON "car_comparison" USING btree ("problem_dark_image_id");
  CREATE INDEX "car_comparison_floor_testing_floor_testing_dark_image_idx" ON "car_comparison" USING btree ("floor_testing_dark_image_id");
  CREATE INDEX "ai_practices_ai_video_ai_video_dark_image_idx" ON "ai_practices" USING btree ("ai_video_dark_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "buy_home" DROP CONSTRAINT "buy_home_exploration_dark_image_id_media_id_fk";
  
  ALTER TABLE "car_comparison" DROP CONSTRAINT "car_comparison_problem_dark_image_id_media_id_fk";
  
  ALTER TABLE "car_comparison" DROP CONSTRAINT "car_comparison_floor_testing_dark_image_id_media_id_fk";
  
  ALTER TABLE "ai_practices" DROP CONSTRAINT "ai_practices_ai_video_dark_image_id_media_id_fk";
  
  DROP INDEX "buy_home_exploration_exploration_dark_image_idx";
  DROP INDEX "car_comparison_problem_problem_dark_image_idx";
  DROP INDEX "car_comparison_floor_testing_floor_testing_dark_image_idx";
  DROP INDEX "ai_practices_ai_video_ai_video_dark_image_idx";
  ALTER TABLE "buy_home" DROP COLUMN "exploration_dark_image_id";
  ALTER TABLE "car_comparison" DROP COLUMN "problem_dark_image_id";
  ALTER TABLE "car_comparison" DROP COLUMN "floor_testing_dark_image_id";
  ALTER TABLE "ai_practices" DROP COLUMN "ai_video_dark_image_id";`)
}
