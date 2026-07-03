import { RequestHandler } from "express";
import { prisma } from "../../config/database";

import type {
    DeleteBlogParamsSchema,
    DeleteBlogResponseSchema
} from "../../schemas/blog/deleteBlogSchema"

import { verificarBlogExistente } from "../../services/blogService"


const deletarBlog: RequestHandler<
    DeleteBlogParamsSchema,
    DeleteBlogResponseSchema,
    any,
    any
> = async (req, res) => {
    const { id } = req.params;
    
    await verificarBlogExistente(id, req.tenant!.id);

    await prisma.blog.delete({
        where:{
            id,
            tenantId: req.tenant!.id
        }
    });

    return res.status(204).json()
}


export default deletarBlog