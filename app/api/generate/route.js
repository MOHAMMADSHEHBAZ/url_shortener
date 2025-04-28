import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  const { longUrl, shUrl , createdBy } = await req.json();

  if (!longUrl || !shUrl|| !createdBy) {
    return new Response(
      JSON.stringify({ error: "Missing LongUrl or ShortURL" }),
      { status: 400 }
    );
  }

  const existing = await prisma.url.findUnique({ where: { slug: shUrl } });

  if (existing) {
    return new Response(
      JSON.stringify({ error: "URL already taken" }),
      { status: 409 }
    );
  }

  const newUrl = await prisma.url.create({
    data: { slug: shUrl, longUrl, createdBy: createdBy },
  });

  return new Response(
    JSON.stringify({ shortUrl: `${process.env.BASE_URL}/${shUrl}` }),
    { status: 200 }
  );
}
