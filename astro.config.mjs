import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://bonny.systems",
  integrations: [sitemap(), mdx()],
  redirects: {
    "/o/[...slug]": "/outreach/[...slug]"
  }
});