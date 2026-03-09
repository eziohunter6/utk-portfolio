import {
  MigrateDownArgs,
  MigrateUpArgs,
  sql,
} from "@payloadcms/db-vercel-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "ai_practices_ai_prototyping_prototypes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"redirect_url" varchar NOT NULL
  );
  
  ALTER TABLE "ai_practices_ai_prototyping_prototypes" ADD CONSTRAINT "ai_practices_ai_prototyping_prototypes_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ai_practices_ai_prototyping_prototypes" ADD CONSTRAINT "ai_practices_ai_prototyping_prototypes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ai_practices"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "ai_practices_ai_prototyping_prototypes_order_idx" ON "ai_practices_ai_prototyping_prototypes" USING btree ("_order");
  CREATE INDEX "ai_practices_ai_prototyping_prototypes_parent_id_idx" ON "ai_practices_ai_prototyping_prototypes" USING btree ("_parent_id");
  CREATE INDEX "ai_practices_ai_prototyping_prototypes_image_idx" ON "ai_practices_ai_prototyping_prototypes" USING btree ("image_id");`);
}

export async function down({
  db,
  payload,
  req,
}: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "ai_practices_ai_prototyping_prototypes" CASCADE;`);
}
