import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { SECTION_KEYS } from '../config/sections';

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    date: z.coerce.date().optional(),
    pubDate: z.coerce.date().optional(),
    section: z.string().optional().default('blog').transform((val) => {
      return SECTION_KEYS.includes(val) ? val : 'blog';
    }),
    slug: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    coverImage: z.string().optional(),
    image: z.string().optional(),
    author: z.string().default('Resus Docs Team'),
    lastUpdated: z.coerce.date().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
