import { RequestHandler } from "express";
import { prisma } from "../../config/database";

import { VisualizarBlogResponseSchema } from "../../schemas/blog/responseBlogsSchema";

const visualizarBlogs: RequestHandler<
  any,
  VisualizarBlogResponseSchema,
  any,
  any
> = async (req, res) => {
  const blogs = await prisma.blog.findMany({
    where: {
      tenantId: req.tenant!.id,
    },
  });

  return res.status(200).json({
    blogs,
  });
};

export default visualizarBlogs;