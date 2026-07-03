import { NaoEncontradoException } from "../exceptions/NaoEncontradoException";
import { prisma } from "../config/database";

export const verificarBlogExistente = async (
  id: string,
  tenantId: string,
) => {
  const blog = await prisma.blog.findUnique({
    where: { id, tenantId },
  });

  if (!blog) {
    throw new NaoEncontradoException("Blog não encontrado");
  }


  return blog;
};