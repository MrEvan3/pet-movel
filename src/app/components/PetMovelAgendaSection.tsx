export default function PetMovelAgendaSection() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#2a2fa5',
        padding: '24px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          background: 'white',
          borderRadius: '24px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
          padding: '40px 32px',
          maxWidth: '480px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '28px',
        }}
      >
        <div style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 700, color: '#111' }}>
          Cuidado Veterinário Móvel para o Seu Companheiro
        </div>
        <div style={{ textAlign: 'center', fontSize: '1.1rem', color: '#222', lineHeight: 1.6 }}>
          Atendimento veterinário acessível para todos.<br />
          Consultas, vacinas e orientações para garantir o bem-estar do seu pet,<br />
          onde quer que você esteja.
        </div>
        <div style={{ textAlign: 'center', fontSize: '1.15rem', color: '#222', fontWeight: 600 }}>
          Localização atual:
        </div>
        <div style={{ textAlign: 'center', fontSize: '1rem', color: '#222' }}>
          R. Rui Barbosa, 3538 - Vila Alta, Campo Grande - MS, 79002-364
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.2584814150564!2d-54.61800942403479!3d-20.454574081054943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e9117c976825%3A0xad9087a56eb68da1!2sSUBEA%20-%20Superintend%C3%AAncia%20do%20Bem-Estar%20Animal!5e0!3m2!1spt-BR!2sbr!4v1748032436780!5m2!1spt-BR!2sbr" width="400" height="300" style={{ border: 0, borderRadius: '16px' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div style={{ textAlign: 'center', fontSize: '1.15rem', color: '#222', fontWeight: 600 }}>
          Confira a agenda do Pet Móvel:
        </div>
        <div style={{ textAlign: 'center', fontSize: '1rem', color: '#222', lineHeight: 1.7 }}>
          27/05 a 31/05 – Bairro Rita Vieira<br />
          03/06 a 07/06 – Bairro Jardim dos Estados<br />
          10/06 a 14/06 – Bairro Nova Lima<br />
          17/06 a 21/06 – Bairro Jardim Bela Vista<br />
          24/06 a 28/06 – Bairro Itanhangá<br />
          01/07 a 05/07 – Bairro Chácara Cachoeira<br />
          08/07 a 12/07 – Bairro Vilas Boas<br />
          08/07 a 12/07 – Bairro Cidade Jardim
        </div>
        <div style={{ textAlign: 'center', fontSize: '1.15rem', color: '#222', fontWeight: 600 }}>
          Horário de atendimento:
        </div>
        <div style={{ textAlign: 'center', fontSize: '1rem', color: '#222' }}>
          Das 7h às 11h — distribuição de fichas por ordem de chegada.
        </div>
        <div style={{ textAlign: 'center', fontSize: '1.15rem', color: '#222', fontWeight: 600 }}>
          Vagas:
        </div>
        <div style={{ textAlign: 'center', fontSize: '1rem', color: '#222' }}>
          5 fichas para castração<br />
          10 fichas para consultas.
        </div>
      </div>
    </div>
  );
} 