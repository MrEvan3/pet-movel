import { PrismaClient } from './src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const servicos = [
    {
      nome: 'Castração',
      descricao: 'Agende aqui a castração do seu animal e saiba os benefícios da castração',
      duracaoMinutos: 60,
      preco: 200.00,
    },
    {
      nome: 'Microchipagem',
      descricao: 'Garanta a segurança do seu pet com microchipagem. Saiba como esse processo ajuda na identificação e localização do seu animal.',
      duracaoMinutos: 30,
      preco: 120.00,
    },
    {
      nome: 'Consulta Veterinária',
      descricao: 'Cuide da saúde do seu pet! Agende consultas para avaliações regulares e acompanhamento de tratamentos.',
      duracaoMinutos: 40,
      preco: 150.00,
    },
    {
      nome: 'Vacinação',
      descricao: 'Vacine seu animal para evitar doenças infecciosas',
      duracaoMinutos: 20,
      preco: 90.00,
    },
    {
      nome: 'Agendamento de Consultas',
      descricao: 'Facilite a marcação de consultas veterinárias com nosso sistema de agendamento rápido e prático.',
      duracaoMinutos: 15,
    },
    {
      nome: 'Adoção',
      descricao: 'Dê um lar para um pet! Veja informações sobre como adotar e transformar a vida de um animal em busca de uma família.',
      duracaoMinutos: 0,
    },
  ];

  for (const servico of servicos) {
    const existe = await prisma.servico.findFirst({ where: { nome: servico.nome } });
    if (!existe) {
      const novoServico = await prisma.servico.create({ data: servico });
      console.log('Serviço inserido:', novoServico.nome);
    } else {
      console.log('Serviço já existe:', servico.nome);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });