import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { SECTION_KEYS } from '../config/sections';

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    section: z.string().refine(
      (val) => SECTION_KEYS.includes(val),
      {
        message: `Section must be one of: ${SECTION_KEYS.join(', ')}`,
      }
    ),
    slug: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    coverImage: z.string().optional(),
    author: z.string().default('Resus Docs Team'),
    lastUpdated: z.coerce.date().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
