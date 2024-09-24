import z from 'zod';

export const schemaPosts = z.array(
  z.object({
    userId: z.number().int(),
    id: z.number().int(),
    title: z.string(),
    body: z.string(),
  })
);
