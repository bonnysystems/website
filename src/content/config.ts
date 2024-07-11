// Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// Define a `type` and `schema` for each collection
const reportsCollection = defineCollection({
  type: "content",
  schema: z.object({
    client_name: z.string(),
    project_name: z.string(),
    description: z.string(),
    // created_date: z.date(),
    // updated_date: z.date().transform((str) => new Date(str)),
  }),
});

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    published_date: z.date(),
    updated_date: z.date().optional(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

const outreachCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    recommended_pricing_plan: z.string(),
    website_url: z.string().optional(),
    scores: z
      .object({
        mobile: z.object({
          design: z.number(),
          performance: z.number(),
          accessibility: z.number(),
          seo: z.number(),
        }),
        desktop: z.object({
          design: z.number(),
          performance: z.number(),
          accessibility: z.number(),
          seo: z.number(),
        }),
      })
      .optional(),
    outreached_at: z
      .string()
      .transform((str) => new Date(str))
      .optional(),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  reports: reportsCollection,
  posts: postsCollection,
  outreach: outreachCollection,
};
