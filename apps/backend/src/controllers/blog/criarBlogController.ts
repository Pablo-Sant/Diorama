import {RequestHandler} from "express";
import { prisma } from "../../config/database.js";


import type {
    CriarBlogRequestSchema,
    CriarBlogResponseSchema
}  from "../../schemas/blog/createBlogSchema.js"


const criarBlog: RequestHandler<
  any,
  CriarBlogResponseSchema,
  CriarBlogRequestSchema,
  any
> = async (req, res) => {
  const { titulo, conteudo_html, data_publicacao } = req.body;

  const blog = await prisma.blog.create({
    data: {
      titulo,
      conteudo_html,
      data_publicacao,
      tenantId: req.tenant!.id,
    },
  });

  return res.status(201).json({
    mensagem: "Blog criado com sucesso!",
    blog,
  });
};

export default criarBlog;