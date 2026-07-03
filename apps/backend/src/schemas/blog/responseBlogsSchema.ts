import * as z from "zod";
import blogSchema from "./blogSchema";

export const visualizarBlogsResponseSchema = z
  .object({
    blogs: z.array(blogSchema),
  })
  .strict();

export type VisualizarBlogsResponseSchema = z.infer<
  typeof visualizarBlogsResponseSchema
>;