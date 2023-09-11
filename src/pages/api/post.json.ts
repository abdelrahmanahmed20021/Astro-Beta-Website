import type { APIRoute } from "astro";

import prisma from "../libs";

export const GET = async () => {
  const posts = await prisma.post.findMany({});

  return new Response(JSON.stringify(posts));
};

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();

  const post = await prisma.post.create({
    data: {
      ...body,
      userId: "64ff6710fa300c34f58f8394",
    },
  });

  return new Response(JSON.stringify(post));
};
