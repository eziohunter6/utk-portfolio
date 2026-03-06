import path from "node:path";
import { fileURLToPath } from "node:url";
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { buildConfig } from "payload";
import sharp from "sharp";
import { Media } from "@/collections/Media";
import { Users } from "@/collections/Users";
import { Works } from "@/collections/Works";
import { AiPractices } from "@/globals/AiPractices";
import { BuyHome } from "@/globals/BuyHome";
import { CarComparison } from "@/globals/CarComparison";
import { ClearTrip } from "@/globals/ClearTrip";
import { Contacts } from "@/globals/Contacts";
import { EcTimes } from "@/globals/EcTimes";
import { Home } from "@/globals/Home";
import { Navlinks } from "@/globals/Navlinks";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  sharp,
  secret: process.env.PAYLOAD_SECRET || "",
  collections: [Media, Users, Works],
  globals: [
    Navlinks,
    Contacts,
    Home,
    BuyHome,
    CarComparison,
    AiPractices,
    ClearTrip,
    EcTimes,
  ],
  editor: lexicalEditor(),
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  routes: {
    admin: "/admin",
    api: "/api",
    graphQL: "/api/graphql",
    graphQLPlayground: "/api/graphql-playground",
  },
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: {
          prefix: "",
        },
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
    seoPlugin({
      globals: [
        Home,
        AiPractices,
        BuyHome,
        CarComparison,
        ClearTrip,
        EcTimes,
      ].map((global) => global.slug),
      uploadsCollection: "media",
    }),
  ],
});
