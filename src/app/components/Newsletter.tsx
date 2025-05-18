'use client';

import Image from 'next/image';
import { FormEvent } from 'react';

const steps = [
  'Cadastre seu e-mail',
  'Receba notificações sobre status do seu animalzinho',
  'Atualizações sobre campanhas',
];

export default function Newsletter() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de envio do e-mail
  };

  return (
    <section style={{ background: '#2d2fa3', width: '100%', padding: '48px 0', margin: '0', minHeight: '340px', display: 'flex', justifyContent: 'center' }}>
      <div style={{
        background: '#fff',
        borderRadius: '24px',
        boxShadow: '0 2px 16px rgba(45,47,163,0.10)',
        maxWidth: '1100px',
        width: '100%',
        margin: '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '48px 40px',
        gap: '32px',
      }}>
        {/* Texto à esquerda */}
        <div style={{ flex: 1, minWidth: '320px', maxWidth: '520px' }}>
          <h2 style={{
            color: '#222',
            fontFamily: 'Paytone One, sans-serif',
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '18px',
          }}>
            Conectando Você ao Melhor Cuidado Veterinário
          </h2>
          <p style={{
            color: '#222',
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '1.1rem',
            fontWeight: 400,
            marginBottom: '18px',
            lineHeight: 1.5,
          }}>
            Nosso sistema de agendamento facilita o acesso aos serviços de saúde para o seu pet, com registro de histórico médico, controle de visitas e uma rede dedicada ao bem-estar animal.
          </p>
          <ul style={{
            marginBottom: '18px',
            paddingLeft: 0,
            listStyle: 'none',
            fontFamily: 'Open Sans, sans-serif',
          }}>
            {steps.map((step, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', fontWeight: 600, color: '#2d2fa3', fontSize: '1rem' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: '#ffc72c',
                  color: '#2d2fa3',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  marginRight: '12px',
                }}>{idx + 1}</span>
                {step}
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '0', marginTop: '12px' }}>
            <input
              type="email"
              placeholder="Insira o seu e-mail..."
              required
              style={{
                flex: 1,
                height: '44px',
                border: '1px solid #ccc',
                borderRadius: '22px 0 0 22px',
                padding: '0 18px',
                fontSize: '1rem',
                fontFamily: 'Open Sans, sans-serif',
                outline: 'none',
              }}
            />
            <button type="submit" style={{
              height: '44px',
              background: '#ffc72c',
              border: 'none',
              borderRadius: '0 22px 22px 0',
              padding: '0 22px',
              color: '#2d2fa3',
              fontWeight: 700,
              fontSize: '1.2rem',
              cursor: 'pointer',
              fontFamily: 'Open Sans, sans-serif',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ fontSize: '1.3rem', marginRight: '4px' }}>➔</span>
            </button>
          </form>
        </div>
        {/* Ilustração à direita */}
        <div style={{ flex: 1, minWidth: '260px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image src="/assets/cao.png" alt="Ilustração cachorro" width={320} height={260} />
        </div>
      </div>
    </section>
  );
} 