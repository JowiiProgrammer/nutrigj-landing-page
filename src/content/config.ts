import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    link: z.string().url().optional(),
  }),
})

const services = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
  }),
})
export const collections = { posts, services }
