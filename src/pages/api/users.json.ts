import type { APIRoute } from "astro";

import prisma from "../libs";

export const GET = async () => {
  const users = await prisma.user.findMany({
    include: { posts: true },
  });

  return new Response(JSON.stringify(users));
};

export const POST: APIRoute = async ({ params, request }) => {
  const user = await request.json();

  const data = await prisma.user.create({
    data: user,
  });
  return new Response(JSON.stringify(data));
};
