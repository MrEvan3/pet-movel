import Image from 'next/image';
import Link from 'next/link';

const cards = [
  {
    id: 1,
    icon: '/assets/castracao.png',
    title: 'Castração',
    text: 'Agende aqui a castração do seu animal e saiba os benefícios da castração.'
  },
  {
    id: 2,
    icon: '/assets/microchipagem.png',
    title: 'Microchipagem',
    text: 'Garanta a segurança do seu pet com microchip. Saiba como esse processo ajuda na identificação e localização do seu animal.'
  },
  {
    id: 3,
    icon: '/assets/consultavetrinaira.png',
    title: 'Consulta Veterinária',
    text: 'Cuide da saúde do seu pet! Agende consultas para avaliações regulares e acompanhamento de tratamentos.'
  },
  {
    id: 4,
    icon: '/assets/vacinacao.png',
    title: 'Vacinação',
    text: 'Vacine seu animal para evitar doenças infecciosas.'
  },
  {
    id: 5,
    icon: '/assets/agendamentoseconsultas.png',
    title: 'Agendamento de Consultas',
    text: 'Facilite a marcação de consultas veterinárias com nosso sistema de agendamento rápido e prático.'
  },
  {
    id: 6,
    icon: '/assets/doacao.png',
    title: 'Adoção',
    text: 'Dê um lar para um pet! Veja informações sobre como adotar e transformar a vida de um animal em busca de uma família.'
  },
];

export default function Services() {
  return (
    <section style={{ background: '#2d2fa3', width: '100%', padding: '0', margin: '0', minHeight: '340px' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '48px 40px 32px 40px',
      }}>
        <h2 style={{
          color: '#ffc72c',
          fontFamily: 'Paytone One, sans-serif',
          fontSize: '2.2rem',
          fontWeight: 700,
          marginBottom: '32px',
          textAlign: 'center',
        }}>
          Acesso Rápido
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '28px',
          alignItems: 'stretch',
        }}>
          {cards.map((card) => (
            <Link href={`/servicos/${card.id}`} key={card.id} style={{ textDecoration: 'none' }}>
              <article
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 2px 12px rgba(45,47,163,0.08)',
                  padding: '32px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  height: '260px',
                  border: '1px solid #f0f0f0',
                  cursor: 'pointer'
                }}>
                <Image
                  src={card.icon}
                  alt={`Ícone representando o serviço de ${card.title.toLowerCase()}`}
                  width={48}
                  height={48}
                  style={{
                    marginBottom: '18px',
                    filter: 'drop-shadow(0 0 12px rgba(255, 199, 44, 0.8))',
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
                <h3 style={{
                  color: '#222',
                  fontFamily: 'Paytone One, sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: '12px',
                  textAlign: 'center',
                }}>{card.title}</h3>
                <p style={{
                  color: '#222',
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '1rem',
                  fontWeight: 400,
                  textAlign: 'center',
                  lineHeight: 1.5,
                }}>{card.text}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 