import { defineCollection, z } from "astro:content";

const pasmo = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    authorBio: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    readingTime: z.string(),
    image: z.string(),
    imageCaption: z.string(),
    numer: z.string(),
  }),
});

export const collections = { pasmo };
