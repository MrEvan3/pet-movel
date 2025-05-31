import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  const servicos = await prisma.servico.findMany();
  return NextResponse.json(servicos);
}