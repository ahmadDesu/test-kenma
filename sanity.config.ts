/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./app/(admin)/sanity/env";
import { schema } from "./app/(admin)/sanity/schema";
import Logo from "./components/Logo";
import StudioNavbar from "./components/StudioNavbar";
import { myTheme } from "./theme";
import { codeInput } from "@sanity/code-input";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  useCdn: true,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    codeInput(),
  ],
  studio: {
    // the structure must be same with folder name
    components: {
      // logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
