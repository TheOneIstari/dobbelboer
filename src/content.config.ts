import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const games = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/games' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    players: z.string(),
    age: z.string(),
    playtime: z.string(),
    complexity: z.number().min(1).max(5),
    category: z.string(),
    theme: z.string(),
    stock: z.number().int().nonnegative().default(0),
    featured: z.boolean().default(false),
    image: z.string(),
    imageAlt: z.string(),
    priceFrom: z.number().positive().default(15),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

export const collections = { games, news };
