import { RequestHandler } from "express";
import { prisma } from "../../config/database";

import {
  EditarBlogParamsSchema,
  EditarBlogRequestSchema,
  EditarBlogResponseSchema,
} from "../../schemas/blog/updateBlogSchema";

import {
    verificarBlogExistente
} from "../../services/blogService"


const editarBlog: RequestHandler<
  EditarBlogParamsSchema,
  EditarBlogResponseSchema,
  EditarBlogRequestSchema,
  any
> = async (req, res) => {
  const { id } = req.params;
  const { titulo, conteudo_html, data_publicacao} = req.body;


    const blog = await verificarBlogExistente(id, req.tenant!.id)

    const blogAtualizado = await prisma.blog.update({
    where: {
      id,
      tenantId: req.tenant!.id,
    },
    data: {
      titulo: titulo ?? blog.titulo,
      conteudo_html: conteudo_html ?? blog.conteudo_html,
      data_publicacao: data_publicacao ?? blog.data_publicacao
    },
  });

  return res.json({
    mensagem: "Blog atualizado com sucesso",
    blog: blogAtualizado,
  });
};

export default editarBlog;