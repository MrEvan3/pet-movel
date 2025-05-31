import { PrismaClient } from '@/generated/prisma';
import FormAgendamento from './FormAgendamento';

interface DetalheServicoProps {
  params: { id: string };
}

export default async function DetalheServico({ params }: DetalheServicoProps) {
  const prisma = new PrismaClient();
  const servico = await prisma.servico.findUnique({
    where: { id: Number(params.id) }
  });

  if (!servico) {
    return <div>Serviço não encontrado.</div>;
  }

  return (
    <div style={{
      maxWidth: 900,
      minWidth: 350,
      margin: '60px auto',
      padding: 40,
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 4px 24px #0002'
    }}>
      <h2 style={{ fontSize: 32, marginBottom: 24 }}>{servico.nome}</h2>
      <p style={{ fontSize: 20, marginBottom: 16 }}>{servico.descricao}</p>
      <p style={{ fontSize: 20, marginBottom: 8 }}><strong>Duração:</strong> {servico.duracaoMinutos} min</p>
      <p style={{ fontSize: 20, marginBottom: 24 }}><strong>Preço:</strong> R$ {servico.preco}</p>
      <FormAgendamento servicoId={servico.id} />
    </div>
  );
}