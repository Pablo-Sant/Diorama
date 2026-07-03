import { RequestHandler } from "express";
import { prisma } from "../../config/database";

import type {
  BuscarBlogPorIdParamsSchema,
  BuscarBlogPorIdResponseSchema,
} from "../../schemas/blog/buscarBlogPorIdSchema";

const buscarBlogPorId: RequestHandler<
  BuscarBlogPorIdParamsSchema,
  BuscarBlogPorIdResponseSchema,
  any,
  any
> = async (req, res) => {
  const { id } = req.params;

  const blog = await prisma.blog.findFirst({
    where: {
      id,
      tenantId: req.tenant!.id,
    },
  });

  if (!blog) {
    return res.status(404).json({
      mensagem: "Blog não encontrado.",
      blog
    });
  }

  return res.status(200).json({
    mensagem: "Blog encontrado com sucesso",
    blog
  });
};

export default buscarBlogPorId;