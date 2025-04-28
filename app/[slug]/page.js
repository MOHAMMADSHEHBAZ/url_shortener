import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

export default async function Page({ params }) {
  const { slug } = params;

  const url = await prisma.url.findUnique({
    where: { slug },
  });

  if (!url) {
    return <h1>404 - URL Not Found</h1>;
  }

  redirect(url.longUrl);
}
