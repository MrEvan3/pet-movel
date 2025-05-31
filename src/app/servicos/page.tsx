'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Servico = {
  id: number;
  nome: string;
  descricao: string;
  duracaoMinutos: number;
  preco: number;
};

export default function ListaServicos() {
  const [servicos, setServicos] = useState<Servico[]>([]);

  useEffect(() => {
    fetch('/api/servicos')
      .then(res => res.json())
      .then(data => setServicos(data));
  }, []);

  return (
    <div style={{ maxWidth: 1000, margin: '40px auto', padding: 40, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #0001' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Serviços Disponíveis</h2>
      <ul>
        {servicos.map(servico => (
          <li key={servico.id} style={{ marginBottom: 20, padding: 16, border: '1px solid #eee', borderRadius: 6 }}>
            <Link href={`/servicos/${servico.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <strong>{servico.nome}</strong><br />
              {servico.descricao}<br />
              <span>Duração: {servico.duracaoMinutos} min</span> <br />
              <span>Preço: R$ {servico.preco}</span>
            </Link>
          </li>
        ))}
      </ul>
      {servicos.length === 0 && <p style={{ textAlign: 'center' }}>Nenhum serviço cadastrado.</p>}
    </div>
  );
}