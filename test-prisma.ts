import { PrismaClient } from './src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const servicos = await prisma.servico.findMany();
  console.log(servicos);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });