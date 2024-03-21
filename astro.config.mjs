import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://bonny.systems",
  integrations: [sitemap()],
  redirects: {
    "/o/[...slug]": "/outreach/[...slug]",
  },
});
