import { defineCollection, z } from 'astro:content';

const bebidasCollection = defineCollection({
  schema: z.object({
    nombre: z.string(),
    inventor: z.string(),
    fechaCreacion: z.string(),
    descripcionCorta: z.string(),
    precio: z.number(),
    imagen: z.string(),
    imagenDetalle: z.string().optional(),
    ingredientesPrincipales: z.array(z.string()),
    categoria: z.enum(['cocteles', 'licores', 'vinos', 'cervezas']),
  }),
});

export const collections = {
  bebidas: bebidasCollection,
};