import type { APIRoute } from "astro";

import prisma from "../libs";

export const GET = async () => {
  const posts = await prisma.post.findMany({});

  return new Response(JSON.stringify(posts));
};

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();

  const post = await prisma.post.create({
    data: body,
  });

  return new Response(JSON.stringify(post));
};
