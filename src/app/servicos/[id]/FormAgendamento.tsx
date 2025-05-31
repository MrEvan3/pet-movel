'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function FormAgendamento({ servicoId }: { servicoId: number }) {
  const [nomeTutor, setNomeTutor] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nomePet, setNomePet] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [mensagem, setMensagem] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensagem('');
    const res = await fetch('/api/agendamentos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        servicoId,
        nomeTutor,
        email,
        telefone,
        nomePet,
        data,
        hora
      })
    });
    if (res.ok) {
      router.push(`/servicos/${servicoId}/agendar/confirmacao`);
    } else {
      setMensagem('Erro ao agendar. Tente novamente.');
    }
  };

  return (
    <div style={{ maxWidth: 700, minWidth: 350, margin: '40px auto', padding: 32, background: '#f9f9f9', borderRadius: 12, boxShadow: '0 2px 8px #0001' }}>
      <h2 style={{ fontSize: 28, marginBottom: 24, textAlign: 'center' }}>Agendar Serviço</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome do tutor" value={nomeTutor} onChange={e => setNomeTutor(e.target.value)} required style={{ width: '100%', marginBottom: 16, padding: 14, fontSize: 18, borderRadius: 8, border: '1px solid #ccc' }} />
        <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', marginBottom: 16, padding: 14, fontSize: 18, borderRadius: 8, border: '1px solid #ccc' }} />
        <input type="tel" placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} required style={{ width: '100%', marginBottom: 16, padding: 14, fontSize: 18, borderRadius: 8, border: '1px solid #ccc' }} />
        <input type="text" placeholder="Nome do pet" value={nomePet} onChange={e => setNomePet(e.target.value)} required style={{ width: '100%', marginBottom: 16, padding: 14, fontSize: 18, borderRadius: 8, border: '1px solid #ccc' }} />
        <input type="date" value={data} onChange={e => setData(e.target.value)} required style={{ width: '100%', marginBottom: 16, padding: 14, fontSize: 18, borderRadius: 8, border: '1px solid #ccc' }} />
        <input type="time" value={hora} onChange={e => setHora(e.target.value)} required style={{ width: '100%', marginBottom: 24, padding: 14, fontSize: 18, borderRadius: 8, border: '1px solid #ccc' }} />
        <button type="submit" style={{ width: '100%', padding: 16, fontSize: 20, background: '#22c55e', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 'bold', cursor: 'pointer' }}>
          Confirmar Agendamento
        </button>
      </form>
      {mensagem && (
        <p style={{ marginTop: 24, textAlign: 'center', fontSize: 18, color: 'red' }}>
          {mensagem}
        </p>
      )}
    </div>
  );
} 