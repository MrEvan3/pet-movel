import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const data = await request.json();

  // Validação simples (pode ser aprimorada)
  if (!data.servicoId || !data.nomeTutor || !data.email || !data.telefone || !data.nomePet || !data.data || !data.hora) {
    return NextResponse.json({ error: 'Dados incompletos.' }, { status: 400 });
  }

  // Cria o agendamento
  const agendamento = await prisma.agendamento.create({
    data: {
      servicoId: Number(data.servicoId),
      nomeTutor: data.nomeTutor,
      email: data.email,
      telefone: data.telefone,
      nomePet: data.nomePet,
      // Você pode ajustar para salvar data/hora conforme seu modelo
      createdAt: new Date(`${data.data}T${data.hora}`),
      updatedAt: new Date(`${data.data}T${data.hora}`),
      horarioId: 1 // Por enquanto, coloque um valor fixo ou ajuste conforme seu modelo
    }
  });

  return NextResponse.json({ success: true, agendamento });
}