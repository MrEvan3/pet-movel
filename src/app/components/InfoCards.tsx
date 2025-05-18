import Image from 'next/image';

export default function InfoCards() {
  return (
    <section style={{ background: '#2d2fa3', width: '100%', padding: '0', margin: '0' }}>
      <div style={{
        maxWidth: '1180px',
        margin: '0 auto',
        padding: '0 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        width: '100%',
      }}>
        {/* Card do ônibus */}
        <div style={{
          background: '#fff',
          borderRadius: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '32px 32px 32px 32px',
          gap: '32px',
          boxShadow: '0 2px 12px rgba(45,47,163,0.08)',
          width: '100%',
          margin: '32px auto 0 auto',
        }}>
          <div style={{ flex: 1, minWidth: '320px', maxWidth: '520px' }}>
            <h3 style={{
              color: '#222',
              fontFamily: 'Paytone One, sans-serif',
              fontSize: '1.3rem',
              fontWeight: 700,
              marginBottom: '12px',
            }}>
              Saiba em qual bairro nosso ônibus se localiza
            </h3>
            <p style={{
              color: '#222',
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '1rem',
              fontWeight: 400,
              marginBottom: '18px',
              lineHeight: 1.5,
            }}>
              Encontre nosso ônibus no bairro mais próximo de você! Acompanhe a localização em tempo real e saiba onde estamos atendendo hoje
            </p>
            <button style={{
              background: '#ffc72c',
              color: '#2d2fa3',
              border: 'none',
              borderRadius: '8px',
              padding: '10px 28px',
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
            }}>
              Saiba Mais
            </button>
          </div>
          <div style={{ flex: 1, minWidth: '260px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image src="/assets/onibus.png" alt="Ônibus" width={420} height={200} style={{ borderRadius: '12px' }} />
          </div>
        </div>
        {/* Card do gato */}
        <div style={{
          background: '#fff',
          borderRadius: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '32px 32px 32px 32px',
          gap: '32px',
          boxShadow: '0 2px 12px rgba(45,47,163,0.08)',
        }}>
          <div style={{ flex: 1, minWidth: '220px' }}>
            <h3 style={{
              color: '#222',
              fontFamily: 'Paytone One, sans-serif',
              fontSize: '1.3rem',
              fontWeight: 700,
              marginBottom: '12px',
            }}>
              Mais conexão e cuidado com seu pet!
            </h3>
            <p style={{
              color: '#222',
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '1rem',
              fontWeight: 400,
              marginBottom: '18px',
              lineHeight: 1.5,
            }}>
              Nosso sistema facilita o dia a dia dos tutores, registrando o histórico de saúde, controlando despesas e promovendo uma rede de apoio entre apaixonados por pets.
            </p>
            <button style={{
              background: '#ffc72c',
              color: '#2d2fa3',
              border: 'none',
              borderRadius: '8px',
              padding: '10px 28px',
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
            }}>
              Saiba Mais
            </button>
          </div>
          <div style={{ flex: 1, minWidth: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image src="/assets/gato.png" alt="Ilustração gato" width={400} height={240} />
          </div>
        </div>
      </div>
    </section>
  );
} 