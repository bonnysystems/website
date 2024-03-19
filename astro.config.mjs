import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://bonny.systems",
  redirects: {
    "/prelim/[...slug]": "/audits/preliminary/[...slug]",
  },
});
