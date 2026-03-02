import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_media_prefix" AS ENUM('', 'logos', 'works', 'videos', 'images');
  CREATE TYPE "public"."enum_works_type" AS ENUM('extended-cases', 'mini-cases');
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
  	"type" "enum_works_type" NOT NULL,
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
  
  CREATE TABLE "home" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar DEFAULT 'Utkarsh Raj' NOT NULL,
  	"hero_subtitle" varchar DEFAULT 'Senior Product Designer' NOT NULL,
  	"hero_content" jsonb NOT NULL,
  	"left_info_content" jsonb NOT NULL,
  	"right_info_content" jsonb NOT NULL,
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
  
  CREATE TABLE "ai_practices_content_section_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "ai_practices_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"src" varchar NOT NULL,
  	"alt" varchar NOT NULL
  );
  
  CREATE TABLE "ai_practices_prototype_section_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "ai_practices" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar DEFAULT 'AI Practices' NOT NULL,
  	"hero_content" jsonb NOT NULL,
  	"content_section_title" varchar DEFAULT 'AI + Content' NOT NULL,
  	"content_section_body" jsonb NOT NULL,
  	"video_section_title" varchar DEFAULT 'AI + Video' NOT NULL,
  	"video_section_body" jsonb NOT NULL,
  	"dashboard_image_id" integer NOT NULL,
  	"prototype_section_title" varchar DEFAULT 'AI + Prototyping' NOT NULL,
  	"prototype_section_body" jsonb NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "buy_homepage_hero_meta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar NOT NULL
  );
  
  CREATE TABLE "buy_homepage_hero_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"paragraph" varchar NOT NULL
  );
  
  CREATE TABLE "buy_homepage_hero_bento_items_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar NOT NULL
  );
  
  CREATE TABLE "buy_homepage_hero_bento_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"title" varchar,
  	"subtitle" varchar
  );
  
  CREATE TABLE "buy_homepage_process_problem_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"paragraph" varchar NOT NULL
  );
  
  CREATE TABLE "buy_homepage_process_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "buy_homepage_strategy_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "buy_homepage_final_designs_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"paragraph" varchar NOT NULL
  );
  
  CREATE TABLE "buy_homepage_outcome_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "buy_homepage" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Buy Homepage' NOT NULL,
  	"hero_subtitle" varchar,
  	"process_problem_heading" varchar,
  	"process_approach_heading" varchar,
  	"process_approach_paragraph" varchar,
  	"analysis_heading" varchar,
  	"analysis_paragraph" varchar,
  	"analysis_image_id" integer,
  	"strategy_hypothesis_heading" varchar,
  	"strategy_hypothesis_paragraph" varchar,
  	"strategy_constraints_heading" varchar,
  	"strategy_constraints_paragraph" varchar,
  	"exploration_paragraph" varchar,
  	"exploration_image_id" integer,
  	"final_designs_subheading" varchar,
  	"final_designs_image_id" integer,
  	"outcome_intro" varchar,
  	"outcome_closing" varchar,
  	"reflections_paragraph" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "car_comparison_car_hero_meta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar NOT NULL
  );
  
  CREATE TABLE "car_comparison_car_hero_bento_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"title" varchar,
  	"subtitle" varchar
  );
  
  CREATE TABLE "car_comparison_opportunity_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL
  );
  
  CREATE TABLE "car_comparison_problem_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar NOT NULL
  );
  
  CREATE TABLE "car_comparison_hypothesis_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar NOT NULL
  );
  
  CREATE TABLE "car_comparison_floor_testing_list1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar NOT NULL
  );
  
  CREATE TABLE "car_comparison_floor_testing_list2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar NOT NULL
  );
  
  CREATE TABLE "car_comparison_floor_testing_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "car_comparison_car_final_designs_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar NOT NULL
  );
  
  CREATE TABLE "car_comparison_car_outcome_business_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "car_comparison_car_outcome_user_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "car_comparison_car_reflections_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"paragraph" varchar NOT NULL
  );
  
  CREATE TABLE "car_comparison" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Car Comparison' NOT NULL,
  	"car_hero_subtitle" varchar,
  	"car_hero_paragraph" varchar,
  	"opportunity_image_id" integer,
  	"problem_list_heading" varchar,
  	"problem_heading" varchar,
  	"problem_paragraph" varchar,
  	"problem_image_id" integer,
  	"hypothesis_heading" varchar,
  	"design_exploration_heading" varchar,
  	"design_exploration_content" jsonb,
  	"design_exploration_image_id" integer,
  	"floor_testing_paragraph" varchar,
  	"floor_testing_heading1" varchar,
  	"floor_testing_heading2" varchar,
  	"floor_testing_closing" varchar,
  	"car_final_designs_paragraph" varchar,
  	"car_final_designs_heading" varchar,
  	"car_final_designs_image_id" integer,
  	"car_outcome_intro" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
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
  ALTER TABLE "home" ADD CONSTRAINT "home_info_image_id_media_id_fk" FOREIGN KEY ("info_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home" ADD CONSTRAINT "home_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_rels" ADD CONSTRAINT "home_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_rels" ADD CONSTRAINT "home_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_rels" ADD CONSTRAINT "home_rels_works_fk" FOREIGN KEY ("works_id") REFERENCES "public"."works"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navlinks_nav_links" ADD CONSTRAINT "navlinks_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navlinks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contacts_contacts" ADD CONSTRAINT "contacts_contacts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contacts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ai_practices_content_section_images" ADD CONSTRAINT "ai_practices_content_section_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ai_practices_content_section_images" ADD CONSTRAINT "ai_practices_content_section_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ai_practices"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ai_practices_videos" ADD CONSTRAINT "ai_practices_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ai_practices"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ai_practices_prototype_section_images" ADD CONSTRAINT "ai_practices_prototype_section_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ai_practices_prototype_section_images" ADD CONSTRAINT "ai_practices_prototype_section_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ai_practices"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ai_practices" ADD CONSTRAINT "ai_practices_dashboard_image_id_media_id_fk" FOREIGN KEY ("dashboard_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ai_practices" ADD CONSTRAINT "ai_practices_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "buy_homepage_hero_meta" ADD CONSTRAINT "buy_homepage_hero_meta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."buy_homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "buy_homepage_hero_paragraphs" ADD CONSTRAINT "buy_homepage_hero_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."buy_homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "buy_homepage_hero_bento_items_tags" ADD CONSTRAINT "buy_homepage_hero_bento_items_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."buy_homepage_hero_bento_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "buy_homepage_hero_bento_items" ADD CONSTRAINT "buy_homepage_hero_bento_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "buy_homepage_hero_bento_items" ADD CONSTRAINT "buy_homepage_hero_bento_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."buy_homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "buy_homepage_process_problem_paragraphs" ADD CONSTRAINT "buy_homepage_process_problem_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."buy_homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "buy_homepage_process_images" ADD CONSTRAINT "buy_homepage_process_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "buy_homepage_process_images" ADD CONSTRAINT "buy_homepage_process_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."buy_homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "buy_homepage_strategy_images" ADD CONSTRAINT "buy_homepage_strategy_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "buy_homepage_strategy_images" ADD CONSTRAINT "buy_homepage_strategy_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."buy_homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "buy_homepage_final_designs_paragraphs" ADD CONSTRAINT "buy_homepage_final_designs_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."buy_homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "buy_homepage_outcome_metrics" ADD CONSTRAINT "buy_homepage_outcome_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."buy_homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "buy_homepage" ADD CONSTRAINT "buy_homepage_analysis_image_id_media_id_fk" FOREIGN KEY ("analysis_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "buy_homepage" ADD CONSTRAINT "buy_homepage_exploration_image_id_media_id_fk" FOREIGN KEY ("exploration_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "buy_homepage" ADD CONSTRAINT "buy_homepage_final_designs_image_id_media_id_fk" FOREIGN KEY ("final_designs_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "buy_homepage" ADD CONSTRAINT "buy_homepage_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "car_comparison_car_hero_meta" ADD CONSTRAINT "car_comparison_car_hero_meta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."car_comparison"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "car_comparison_car_hero_bento_items" ADD CONSTRAINT "car_comparison_car_hero_bento_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "car_comparison_car_hero_bento_items" ADD CONSTRAINT "car_comparison_car_hero_bento_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."car_comparison"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "car_comparison_opportunity_paragraphs" ADD CONSTRAINT "car_comparison_opportunity_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."car_comparison"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "car_comparison_problem_list_items" ADD CONSTRAINT "car_comparison_problem_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."car_comparison"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "car_comparison_hypothesis_list_items" ADD CONSTRAINT "car_comparison_hypothesis_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."car_comparison"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "car_comparison_floor_testing_list1" ADD CONSTRAINT "car_comparison_floor_testing_list1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."car_comparison"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "car_comparison_floor_testing_list2" ADD CONSTRAINT "car_comparison_floor_testing_list2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."car_comparison"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "car_comparison_floor_testing_images" ADD CONSTRAINT "car_comparison_floor_testing_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "car_comparison_floor_testing_images" ADD CONSTRAINT "car_comparison_floor_testing_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."car_comparison"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "car_comparison_car_final_designs_list_items" ADD CONSTRAINT "car_comparison_car_final_designs_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."car_comparison"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "car_comparison_car_outcome_business_metrics" ADD CONSTRAINT "car_comparison_car_outcome_business_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."car_comparison"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "car_comparison_car_outcome_user_metrics" ADD CONSTRAINT "car_comparison_car_outcome_user_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."car_comparison"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "car_comparison_car_reflections_paragraphs" ADD CONSTRAINT "car_comparison_car_reflections_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."car_comparison"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "car_comparison" ADD CONSTRAINT "car_comparison_opportunity_image_id_media_id_fk" FOREIGN KEY ("opportunity_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "car_comparison" ADD CONSTRAINT "car_comparison_problem_image_id_media_id_fk" FOREIGN KEY ("problem_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "car_comparison" ADD CONSTRAINT "car_comparison_design_exploration_image_id_media_id_fk" FOREIGN KEY ("design_exploration_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "car_comparison" ADD CONSTRAINT "car_comparison_car_final_designs_image_id_media_id_fk" FOREIGN KEY ("car_final_designs_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "car_comparison" ADD CONSTRAINT "car_comparison_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
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
  CREATE INDEX "home_info_image_idx" ON "home" USING btree ("info_image_id");
  CREATE INDEX "home_meta_meta_image_idx" ON "home" USING btree ("meta_image_id");
  CREATE INDEX "home_rels_order_idx" ON "home_rels" USING btree ("order");
  CREATE INDEX "home_rels_parent_idx" ON "home_rels" USING btree ("parent_id");
  CREATE INDEX "home_rels_path_idx" ON "home_rels" USING btree ("path");
  CREATE INDEX "home_rels_media_id_idx" ON "home_rels" USING btree ("media_id");
  CREATE INDEX "home_rels_works_id_idx" ON "home_rels" USING btree ("works_id");
  CREATE INDEX "navlinks_nav_links_order_idx" ON "navlinks_nav_links" USING btree ("_order");
  CREATE INDEX "navlinks_nav_links_parent_id_idx" ON "navlinks_nav_links" USING btree ("_parent_id");
  CREATE INDEX "contacts_contacts_order_idx" ON "contacts_contacts" USING btree ("_order");
  CREATE INDEX "contacts_contacts_parent_id_idx" ON "contacts_contacts" USING btree ("_parent_id");
  CREATE INDEX "ai_practices_content_section_images_order_idx" ON "ai_practices_content_section_images" USING btree ("_order");
  CREATE INDEX "ai_practices_content_section_images_parent_id_idx" ON "ai_practices_content_section_images" USING btree ("_parent_id");
  CREATE INDEX "ai_practices_content_section_images_image_idx" ON "ai_practices_content_section_images" USING btree ("image_id");
  CREATE INDEX "ai_practices_videos_order_idx" ON "ai_practices_videos" USING btree ("_order");
  CREATE INDEX "ai_practices_videos_parent_id_idx" ON "ai_practices_videos" USING btree ("_parent_id");
  CREATE INDEX "ai_practices_prototype_section_images_order_idx" ON "ai_practices_prototype_section_images" USING btree ("_order");
  CREATE INDEX "ai_practices_prototype_section_images_parent_id_idx" ON "ai_practices_prototype_section_images" USING btree ("_parent_id");
  CREATE INDEX "ai_practices_prototype_section_images_image_idx" ON "ai_practices_prototype_section_images" USING btree ("image_id");
  CREATE INDEX "ai_practices_dashboard_image_idx" ON "ai_practices" USING btree ("dashboard_image_id");
  CREATE INDEX "ai_practices_meta_meta_image_idx" ON "ai_practices" USING btree ("meta_image_id");
  CREATE INDEX "buy_homepage_hero_meta_order_idx" ON "buy_homepage_hero_meta" USING btree ("_order");
  CREATE INDEX "buy_homepage_hero_meta_parent_id_idx" ON "buy_homepage_hero_meta" USING btree ("_parent_id");
  CREATE INDEX "buy_homepage_hero_paragraphs_order_idx" ON "buy_homepage_hero_paragraphs" USING btree ("_order");
  CREATE INDEX "buy_homepage_hero_paragraphs_parent_id_idx" ON "buy_homepage_hero_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "buy_homepage_hero_bento_items_tags_order_idx" ON "buy_homepage_hero_bento_items_tags" USING btree ("_order");
  CREATE INDEX "buy_homepage_hero_bento_items_tags_parent_id_idx" ON "buy_homepage_hero_bento_items_tags" USING btree ("_parent_id");
  CREATE INDEX "buy_homepage_hero_bento_items_order_idx" ON "buy_homepage_hero_bento_items" USING btree ("_order");
  CREATE INDEX "buy_homepage_hero_bento_items_parent_id_idx" ON "buy_homepage_hero_bento_items" USING btree ("_parent_id");
  CREATE INDEX "buy_homepage_hero_bento_items_image_idx" ON "buy_homepage_hero_bento_items" USING btree ("image_id");
  CREATE INDEX "buy_homepage_process_problem_paragraphs_order_idx" ON "buy_homepage_process_problem_paragraphs" USING btree ("_order");
  CREATE INDEX "buy_homepage_process_problem_paragraphs_parent_id_idx" ON "buy_homepage_process_problem_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "buy_homepage_process_images_order_idx" ON "buy_homepage_process_images" USING btree ("_order");
  CREATE INDEX "buy_homepage_process_images_parent_id_idx" ON "buy_homepage_process_images" USING btree ("_parent_id");
  CREATE INDEX "buy_homepage_process_images_image_idx" ON "buy_homepage_process_images" USING btree ("image_id");
  CREATE INDEX "buy_homepage_strategy_images_order_idx" ON "buy_homepage_strategy_images" USING btree ("_order");
  CREATE INDEX "buy_homepage_strategy_images_parent_id_idx" ON "buy_homepage_strategy_images" USING btree ("_parent_id");
  CREATE INDEX "buy_homepage_strategy_images_image_idx" ON "buy_homepage_strategy_images" USING btree ("image_id");
  CREATE INDEX "buy_homepage_final_designs_paragraphs_order_idx" ON "buy_homepage_final_designs_paragraphs" USING btree ("_order");
  CREATE INDEX "buy_homepage_final_designs_paragraphs_parent_id_idx" ON "buy_homepage_final_designs_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "buy_homepage_outcome_metrics_order_idx" ON "buy_homepage_outcome_metrics" USING btree ("_order");
  CREATE INDEX "buy_homepage_outcome_metrics_parent_id_idx" ON "buy_homepage_outcome_metrics" USING btree ("_parent_id");
  CREATE INDEX "buy_homepage_analysis_image_idx" ON "buy_homepage" USING btree ("analysis_image_id");
  CREATE INDEX "buy_homepage_exploration_image_idx" ON "buy_homepage" USING btree ("exploration_image_id");
  CREATE INDEX "buy_homepage_final_designs_image_idx" ON "buy_homepage" USING btree ("final_designs_image_id");
  CREATE INDEX "buy_homepage_meta_meta_image_idx" ON "buy_homepage" USING btree ("meta_image_id");
  CREATE INDEX "car_comparison_car_hero_meta_order_idx" ON "car_comparison_car_hero_meta" USING btree ("_order");
  CREATE INDEX "car_comparison_car_hero_meta_parent_id_idx" ON "car_comparison_car_hero_meta" USING btree ("_parent_id");
  CREATE INDEX "car_comparison_car_hero_bento_items_order_idx" ON "car_comparison_car_hero_bento_items" USING btree ("_order");
  CREATE INDEX "car_comparison_car_hero_bento_items_parent_id_idx" ON "car_comparison_car_hero_bento_items" USING btree ("_parent_id");
  CREATE INDEX "car_comparison_car_hero_bento_items_image_idx" ON "car_comparison_car_hero_bento_items" USING btree ("image_id");
  CREATE INDEX "car_comparison_opportunity_paragraphs_order_idx" ON "car_comparison_opportunity_paragraphs" USING btree ("_order");
  CREATE INDEX "car_comparison_opportunity_paragraphs_parent_id_idx" ON "car_comparison_opportunity_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "car_comparison_problem_list_items_order_idx" ON "car_comparison_problem_list_items" USING btree ("_order");
  CREATE INDEX "car_comparison_problem_list_items_parent_id_idx" ON "car_comparison_problem_list_items" USING btree ("_parent_id");
  CREATE INDEX "car_comparison_hypothesis_list_items_order_idx" ON "car_comparison_hypothesis_list_items" USING btree ("_order");
  CREATE INDEX "car_comparison_hypothesis_list_items_parent_id_idx" ON "car_comparison_hypothesis_list_items" USING btree ("_parent_id");
  CREATE INDEX "car_comparison_floor_testing_list1_order_idx" ON "car_comparison_floor_testing_list1" USING btree ("_order");
  CREATE INDEX "car_comparison_floor_testing_list1_parent_id_idx" ON "car_comparison_floor_testing_list1" USING btree ("_parent_id");
  CREATE INDEX "car_comparison_floor_testing_list2_order_idx" ON "car_comparison_floor_testing_list2" USING btree ("_order");
  CREATE INDEX "car_comparison_floor_testing_list2_parent_id_idx" ON "car_comparison_floor_testing_list2" USING btree ("_parent_id");
  CREATE INDEX "car_comparison_floor_testing_images_order_idx" ON "car_comparison_floor_testing_images" USING btree ("_order");
  CREATE INDEX "car_comparison_floor_testing_images_parent_id_idx" ON "car_comparison_floor_testing_images" USING btree ("_parent_id");
  CREATE INDEX "car_comparison_floor_testing_images_image_idx" ON "car_comparison_floor_testing_images" USING btree ("image_id");
  CREATE INDEX "car_comparison_car_final_designs_list_items_order_idx" ON "car_comparison_car_final_designs_list_items" USING btree ("_order");
  CREATE INDEX "car_comparison_car_final_designs_list_items_parent_id_idx" ON "car_comparison_car_final_designs_list_items" USING btree ("_parent_id");
  CREATE INDEX "car_comparison_car_outcome_business_metrics_order_idx" ON "car_comparison_car_outcome_business_metrics" USING btree ("_order");
  CREATE INDEX "car_comparison_car_outcome_business_metrics_parent_id_idx" ON "car_comparison_car_outcome_business_metrics" USING btree ("_parent_id");
  CREATE INDEX "car_comparison_car_outcome_user_metrics_order_idx" ON "car_comparison_car_outcome_user_metrics" USING btree ("_order");
  CREATE INDEX "car_comparison_car_outcome_user_metrics_parent_id_idx" ON "car_comparison_car_outcome_user_metrics" USING btree ("_parent_id");
  CREATE INDEX "car_comparison_car_reflections_paragraphs_order_idx" ON "car_comparison_car_reflections_paragraphs" USING btree ("_order");
  CREATE INDEX "car_comparison_car_reflections_paragraphs_parent_id_idx" ON "car_comparison_car_reflections_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "car_comparison_opportunity_image_idx" ON "car_comparison" USING btree ("opportunity_image_id");
  CREATE INDEX "car_comparison_problem_image_idx" ON "car_comparison" USING btree ("problem_image_id");
  CREATE INDEX "car_comparison_design_exploration_image_idx" ON "car_comparison" USING btree ("design_exploration_image_id");
  CREATE INDEX "car_comparison_car_final_designs_image_idx" ON "car_comparison" USING btree ("car_final_designs_image_id");
  CREATE INDEX "car_comparison_meta_meta_image_idx" ON "car_comparison" USING btree ("meta_image_id");`)
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
  DROP TABLE "home" CASCADE;
  DROP TABLE "home_rels" CASCADE;
  DROP TABLE "navlinks_nav_links" CASCADE;
  DROP TABLE "navlinks" CASCADE;
  DROP TABLE "contacts_contacts" CASCADE;
  DROP TABLE "contacts" CASCADE;
  DROP TABLE "ai_practices_content_section_images" CASCADE;
  DROP TABLE "ai_practices_videos" CASCADE;
  DROP TABLE "ai_practices_prototype_section_images" CASCADE;
  DROP TABLE "ai_practices" CASCADE;
  DROP TABLE "buy_homepage_hero_meta" CASCADE;
  DROP TABLE "buy_homepage_hero_paragraphs" CASCADE;
  DROP TABLE "buy_homepage_hero_bento_items_tags" CASCADE;
  DROP TABLE "buy_homepage_hero_bento_items" CASCADE;
  DROP TABLE "buy_homepage_process_problem_paragraphs" CASCADE;
  DROP TABLE "buy_homepage_process_images" CASCADE;
  DROP TABLE "buy_homepage_strategy_images" CASCADE;
  DROP TABLE "buy_homepage_final_designs_paragraphs" CASCADE;
  DROP TABLE "buy_homepage_outcome_metrics" CASCADE;
  DROP TABLE "buy_homepage" CASCADE;
  DROP TABLE "car_comparison_car_hero_meta" CASCADE;
  DROP TABLE "car_comparison_car_hero_bento_items" CASCADE;
  DROP TABLE "car_comparison_opportunity_paragraphs" CASCADE;
  DROP TABLE "car_comparison_problem_list_items" CASCADE;
  DROP TABLE "car_comparison_hypothesis_list_items" CASCADE;
  DROP TABLE "car_comparison_floor_testing_list1" CASCADE;
  DROP TABLE "car_comparison_floor_testing_list2" CASCADE;
  DROP TABLE "car_comparison_floor_testing_images" CASCADE;
  DROP TABLE "car_comparison_car_final_designs_list_items" CASCADE;
  DROP TABLE "car_comparison_car_outcome_business_metrics" CASCADE;
  DROP TABLE "car_comparison_car_outcome_user_metrics" CASCADE;
  DROP TABLE "car_comparison_car_reflections_paragraphs" CASCADE;
  DROP TABLE "car_comparison" CASCADE;
  DROP TYPE "public"."enum_media_prefix";
  DROP TYPE "public"."enum_works_type";
  DROP TYPE "public"."enum_works_link_target";
  DROP TYPE "public"."enum_contacts_contacts_type";`)
}
