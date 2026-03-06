import {
  MigrateDownArgs,
  MigrateUpArgs,
  sql,
} from "@payloadcms/db-vercel-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "clear_trip_hero_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"keyword" varchar NOT NULL
  );
  
  CREATE TABLE "clear_trip" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar DEFAULT '' NOT NULL,
  	"problem_title" varchar DEFAULT '' NOT NULL,
  	"problem_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"challenge_title" varchar DEFAULT '' NOT NULL,
  	"challenge_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"impact_title" varchar DEFAULT '' NOT NULL,
  	"impact_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"impact_redirect_link" varchar DEFAULT '' NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "clear_trip_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "ec_times_hero_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"keyword" varchar NOT NULL
  );
  
  CREATE TABLE "ec_times" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar DEFAULT '' NOT NULL,
  	"problem_title" varchar DEFAULT '' NOT NULL,
  	"problem_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"challenge_title" varchar DEFAULT '' NOT NULL,
  	"challenge_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"impact_title" varchar DEFAULT '' NOT NULL,
  	"impact_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"impact_redirect_link" varchar DEFAULT '' NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "ec_times_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  ALTER TABLE "clear_trip_hero_tags" ADD CONSTRAINT "clear_trip_hero_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."clear_trip"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "clear_trip" ADD CONSTRAINT "clear_trip_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "clear_trip_rels" ADD CONSTRAINT "clear_trip_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."clear_trip"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "clear_trip_rels" ADD CONSTRAINT "clear_trip_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ec_times_hero_tags" ADD CONSTRAINT "ec_times_hero_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ec_times"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ec_times" ADD CONSTRAINT "ec_times_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ec_times_rels" ADD CONSTRAINT "ec_times_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."ec_times"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ec_times_rels" ADD CONSTRAINT "ec_times_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "clear_trip_hero_tags_order_idx" ON "clear_trip_hero_tags" USING btree ("_order");
  CREATE INDEX "clear_trip_hero_tags_parent_id_idx" ON "clear_trip_hero_tags" USING btree ("_parent_id");
  CREATE INDEX "clear_trip_meta_meta_image_idx" ON "clear_trip" USING btree ("meta_image_id");
  CREATE INDEX "clear_trip_rels_order_idx" ON "clear_trip_rels" USING btree ("order");
  CREATE INDEX "clear_trip_rels_parent_idx" ON "clear_trip_rels" USING btree ("parent_id");
  CREATE INDEX "clear_trip_rels_path_idx" ON "clear_trip_rels" USING btree ("path");
  CREATE INDEX "clear_trip_rels_media_id_idx" ON "clear_trip_rels" USING btree ("media_id");
  CREATE INDEX "ec_times_hero_tags_order_idx" ON "ec_times_hero_tags" USING btree ("_order");
  CREATE INDEX "ec_times_hero_tags_parent_id_idx" ON "ec_times_hero_tags" USING btree ("_parent_id");
  CREATE INDEX "ec_times_meta_meta_image_idx" ON "ec_times" USING btree ("meta_image_id");
  CREATE INDEX "ec_times_rels_order_idx" ON "ec_times_rels" USING btree ("order");
  CREATE INDEX "ec_times_rels_parent_idx" ON "ec_times_rels" USING btree ("parent_id");
  CREATE INDEX "ec_times_rels_path_idx" ON "ec_times_rels" USING btree ("path");
  CREATE INDEX "ec_times_rels_media_id_idx" ON "ec_times_rels" USING btree ("media_id");`);
}

export async function down({
  db,
  payload,
  req,
}: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "clear_trip_hero_tags" CASCADE;
  DROP TABLE "clear_trip" CASCADE;
  DROP TABLE "clear_trip_rels" CASCADE;
  DROP TABLE "ec_times_hero_tags" CASCADE;
  DROP TABLE "ec_times" CASCADE;
  DROP TABLE "ec_times_rels" CASCADE;`);
}
