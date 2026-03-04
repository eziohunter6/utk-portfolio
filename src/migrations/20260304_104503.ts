import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_media_prefix" AS ENUM('', 'logos', 'works', 'videos', 'images');
  CREATE TYPE "public"."enum_works_link_target" AS ENUM('_self', '_blank');
  CREATE TYPE "public"."enum_contacts_contacts_type" AS ENUM('copy', 'link');
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"thumbnail_id" integer,
  	"prefix" "enum_media_prefix" DEFAULT '',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_preview_url" varchar,
  	"sizes_preview_width" numeric,
  	"sizes_preview_height" numeric,
  	"sizes_preview_mime_type" varchar,
  	"sizes_preview_filesize" numeric,
  	"sizes_preview_filename" varchar
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "works_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"keyword" varchar NOT NULL
  );
  
  CREATE TABLE "works" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" jsonb,
  	"image_id" integer NOT NULL,
  	"link_href" varchar NOT NULL,
  	"link_target" "enum_works_link_target" DEFAULT '_self',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer,
  	"users_id" integer,
  	"works_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "navlinks_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "navlinks" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "contacts_contacts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"href" varchar NOT NULL,
  	"type" "enum_contacts_contacts_type" NOT NULL
  );
  
  CREATE TABLE "contacts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "home" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar DEFAULT 'Utkarsh Raj' NOT NULL,
  	"hero_subtitle" varchar DEFAULT 'Senior Product Designer' NOT NULL,
  	"hero_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"info_left_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"info_right_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"info_image_id" integer NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "home_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer,
  	"works_id" integer
  );
  
  CREATE TABLE "buy_home" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar DEFAULT '' NOT NULL,
  	"hero_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"process_title" varchar DEFAULT '' NOT NULL,
  	"process_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"process_iframe" varchar DEFAULT '' NOT NULL,
  	"analysis_title" varchar DEFAULT '' NOT NULL,
  	"analysis_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"analysis_iframe" varchar DEFAULT '' NOT NULL,
  	"strategy_title" varchar DEFAULT '' NOT NULL,
  	"strategy_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"strategy_iframe" varchar DEFAULT '' NOT NULL,
  	"exploration_title" varchar DEFAULT '' NOT NULL,
  	"exploration_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"exploration_image_id" integer,
  	"final_designs_title" varchar DEFAULT '' NOT NULL,
  	"final_designs_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"outcome_title" varchar DEFAULT '' NOT NULL,
  	"outcome_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"reflections_title" varchar DEFAULT '' NOT NULL,
  	"reflections_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "buy_home_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer,
  	"works_id" integer
  );
  
  CREATE TABLE "car_comparison" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar DEFAULT '' NOT NULL,
  	"hero_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"opportunity_title" varchar DEFAULT '' NOT NULL,
  	"opportunity_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"opportunity_iframe" varchar DEFAULT '' NOT NULL,
  	"problem_title" varchar DEFAULT '' NOT NULL,
  	"problem_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"problem_iframe" varchar DEFAULT '' NOT NULL,
  	"hypothesis_title" varchar DEFAULT '' NOT NULL,
  	"hypothesis_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"exploration_title" varchar DEFAULT '' NOT NULL,
  	"exploration_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"exploration_iframe" varchar DEFAULT '' NOT NULL,
  	"floor_testing_title" varchar DEFAULT '' NOT NULL,
  	"floor_testing_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"floor_testing_image_id" integer,
  	"final_designs_title" varchar DEFAULT '' NOT NULL,
  	"final_designs_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"outcome_title" varchar DEFAULT '' NOT NULL,
  	"outcome_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"reflections_title" varchar DEFAULT '' NOT NULL,
  	"reflections_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "car_comparison_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer,
  	"works_id" integer
  );
  
  CREATE TABLE "ai_practices" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar DEFAULT '' NOT NULL,
  	"hero_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"ai_content_title" varchar DEFAULT '' NOT NULL,
  	"ai_content_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"ai_video_title" varchar DEFAULT '' NOT NULL,
  	"ai_video_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"ai_video_image_id" integer,
  	"ai_prototyping_title" varchar DEFAULT '' NOT NULL,
  	"ai_prototyping_content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"","version":1}],"direction":null,"format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":null,"format":"","indent":0,"version":1}}'::jsonb NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "ai_practices_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  ALTER TABLE "media" ADD CONSTRAINT "media_thumbnail_id_media_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "works_tags" ADD CONSTRAINT "works_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."works"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "works" ADD CONSTRAINT "works_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_works_fk" FOREIGN KEY ("works_id") REFERENCES "public"."works"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navlinks_nav_links" ADD CONSTRAINT "navlinks_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navlinks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contacts_contacts" ADD CONSTRAINT "contacts_contacts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contacts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home" ADD CONSTRAINT "home_info_image_id_media_id_fk" FOREIGN KEY ("info_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home" ADD CONSTRAINT "home_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_rels" ADD CONSTRAINT "home_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_rels" ADD CONSTRAINT "home_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_rels" ADD CONSTRAINT "home_rels_works_fk" FOREIGN KEY ("works_id") REFERENCES "public"."works"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "buy_home" ADD CONSTRAINT "buy_home_exploration_image_id_media_id_fk" FOREIGN KEY ("exploration_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "buy_home" ADD CONSTRAINT "buy_home_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "buy_home_rels" ADD CONSTRAINT "buy_home_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."buy_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "buy_home_rels" ADD CONSTRAINT "buy_home_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "buy_home_rels" ADD CONSTRAINT "buy_home_rels_works_fk" FOREIGN KEY ("works_id") REFERENCES "public"."works"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "car_comparison" ADD CONSTRAINT "car_comparison_floor_testing_image_id_media_id_fk" FOREIGN KEY ("floor_testing_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "car_comparison" ADD CONSTRAINT "car_comparison_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "car_comparison_rels" ADD CONSTRAINT "car_comparison_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."car_comparison"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "car_comparison_rels" ADD CONSTRAINT "car_comparison_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "car_comparison_rels" ADD CONSTRAINT "car_comparison_rels_works_fk" FOREIGN KEY ("works_id") REFERENCES "public"."works"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ai_practices" ADD CONSTRAINT "ai_practices_ai_video_image_id_media_id_fk" FOREIGN KEY ("ai_video_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ai_practices" ADD CONSTRAINT "ai_practices_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ai_practices_rels" ADD CONSTRAINT "ai_practices_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."ai_practices"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ai_practices_rels" ADD CONSTRAINT "ai_practices_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "media_thumbnail_idx" ON "media" USING btree ("thumbnail_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_preview_sizes_preview_filename_idx" ON "media" USING btree ("sizes_preview_filename");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "works_tags_order_idx" ON "works_tags" USING btree ("_order");
  CREATE INDEX "works_tags_parent_id_idx" ON "works_tags" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "works_slug_idx" ON "works" USING btree ("slug");
  CREATE INDEX "works_image_idx" ON "works" USING btree ("image_id");
  CREATE INDEX "works_updated_at_idx" ON "works" USING btree ("updated_at");
  CREATE INDEX "works_created_at_idx" ON "works" USING btree ("created_at");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_works_id_idx" ON "payload_locked_documents_rels" USING btree ("works_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "navlinks_nav_links_order_idx" ON "navlinks_nav_links" USING btree ("_order");
  CREATE INDEX "navlinks_nav_links_parent_id_idx" ON "navlinks_nav_links" USING btree ("_parent_id");
  CREATE INDEX "contacts_contacts_order_idx" ON "contacts_contacts" USING btree ("_order");
  CREATE INDEX "contacts_contacts_parent_id_idx" ON "contacts_contacts" USING btree ("_parent_id");
  CREATE INDEX "home_info_info_image_idx" ON "home" USING btree ("info_image_id");
  CREATE INDEX "home_meta_meta_image_idx" ON "home" USING btree ("meta_image_id");
  CREATE INDEX "home_rels_order_idx" ON "home_rels" USING btree ("order");
  CREATE INDEX "home_rels_parent_idx" ON "home_rels" USING btree ("parent_id");
  CREATE INDEX "home_rels_path_idx" ON "home_rels" USING btree ("path");
  CREATE INDEX "home_rels_media_id_idx" ON "home_rels" USING btree ("media_id");
  CREATE INDEX "home_rels_works_id_idx" ON "home_rels" USING btree ("works_id");
  CREATE INDEX "buy_home_exploration_exploration_image_idx" ON "buy_home" USING btree ("exploration_image_id");
  CREATE INDEX "buy_home_meta_meta_image_idx" ON "buy_home" USING btree ("meta_image_id");
  CREATE INDEX "buy_home_rels_order_idx" ON "buy_home_rels" USING btree ("order");
  CREATE INDEX "buy_home_rels_parent_idx" ON "buy_home_rels" USING btree ("parent_id");
  CREATE INDEX "buy_home_rels_path_idx" ON "buy_home_rels" USING btree ("path");
  CREATE INDEX "buy_home_rels_media_id_idx" ON "buy_home_rels" USING btree ("media_id");
  CREATE INDEX "buy_home_rels_works_id_idx" ON "buy_home_rels" USING btree ("works_id");
  CREATE INDEX "car_comparison_floor_testing_floor_testing_image_idx" ON "car_comparison" USING btree ("floor_testing_image_id");
  CREATE INDEX "car_comparison_meta_meta_image_idx" ON "car_comparison" USING btree ("meta_image_id");
  CREATE INDEX "car_comparison_rels_order_idx" ON "car_comparison_rels" USING btree ("order");
  CREATE INDEX "car_comparison_rels_parent_idx" ON "car_comparison_rels" USING btree ("parent_id");
  CREATE INDEX "car_comparison_rels_path_idx" ON "car_comparison_rels" USING btree ("path");
  CREATE INDEX "car_comparison_rels_media_id_idx" ON "car_comparison_rels" USING btree ("media_id");
  CREATE INDEX "car_comparison_rels_works_id_idx" ON "car_comparison_rels" USING btree ("works_id");
  CREATE INDEX "ai_practices_ai_video_ai_video_image_idx" ON "ai_practices" USING btree ("ai_video_image_id");
  CREATE INDEX "ai_practices_meta_meta_image_idx" ON "ai_practices" USING btree ("meta_image_id");
  CREATE INDEX "ai_practices_rels_order_idx" ON "ai_practices_rels" USING btree ("order");
  CREATE INDEX "ai_practices_rels_parent_idx" ON "ai_practices_rels" USING btree ("parent_id");
  CREATE INDEX "ai_practices_rels_path_idx" ON "ai_practices_rels" USING btree ("path");
  CREATE INDEX "ai_practices_rels_media_id_idx" ON "ai_practices_rels" USING btree ("media_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "media" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "works_tags" CASCADE;
  DROP TABLE "works" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "navlinks_nav_links" CASCADE;
  DROP TABLE "navlinks" CASCADE;
  DROP TABLE "contacts_contacts" CASCADE;
  DROP TABLE "contacts" CASCADE;
  DROP TABLE "home" CASCADE;
  DROP TABLE "home_rels" CASCADE;
  DROP TABLE "buy_home" CASCADE;
  DROP TABLE "buy_home_rels" CASCADE;
  DROP TABLE "car_comparison" CASCADE;
  DROP TABLE "car_comparison_rels" CASCADE;
  DROP TABLE "ai_practices" CASCADE;
  DROP TABLE "ai_practices_rels" CASCADE;
  DROP TYPE "public"."enum_media_prefix";
  DROP TYPE "public"."enum_works_link_target";
  DROP TYPE "public"."enum_contacts_contacts_type";`)
}
