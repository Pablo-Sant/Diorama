import * as z from "zod";
import blogSchema from "./blogSchema";


const buscarBlogSchema = z
    .object({
        params: z
            .object({
                id: z.string()
            })
            .strict(),

        response: z
            .object({
                mensagem: z.string(),
                blog: blogSchema
            })
            .strict()
    })
    .strict()

export type BuscarBlogPorIdParamsSchema = z.infer<
  typeof buscarBlogSchema.shape.params
>;

export type BuscarBlogPorIdResponseSchema = z.infer<
  typeof buscarBlogSchema.shape.response
>;

export default buscarBlogSchema;