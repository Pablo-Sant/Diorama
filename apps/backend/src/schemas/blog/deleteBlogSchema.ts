import * as z from "zod";
import blogSchema from "./blogSchema";


const deleteBlogSchema = z
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

export type DeleteBlogParamsSchema = z.infer<
  typeof deleteBlogSchema.shape.params
>;

export type DeleteBlogResponseSchema = z.infer<
  typeof deleteBlogSchema.shape.response
>;

export default deleteBlogSchema;