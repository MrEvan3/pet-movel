import Image from 'next/image';

export default function Banner() {
  return (
    <main>
      <section style={{ background: '#2d2fa3', width: '100%', padding: '0', minHeight: '480px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '60px 40px 0 40px',
          minHeight: '480px',
          position: 'relative',
          flexWrap: 'wrap', // Responsividade: empilha no mobile
        }}>
          {/* Texto à esquerda */}
          <div style={{ maxWidth: '540px', zIndex: 2, flex: 1, minWidth: '260px' }}>
            <h1 style={{
              fontFamily: 'Paytone One, sans-serif',
              fontSize: '3rem',
              color: '#fff',
              fontWeight: 400,
              lineHeight: 1.1,
              marginBottom: '24px',
            }}>
              Cuidado Veterinário<br />
              Móvel para o Seu<br />
              <span style={{ color: '#ffc72c' }}>Companheiro</span>
            </h1>
            <p style={{
              fontFamily: 'Open Sans, sans-serif',
              color: '#fff',
              fontSize: '1.1rem',
              fontWeight: 400,
              marginBottom: '32px',
              maxWidth: '420px',
            }}>
              Serviços de atendimento veterinário ao alcance de todos, oferecendo consultas, vacinas e orientações para garantir o bem-estar do seu pet, onde quer que você esteja.
            </p>
          </div>
          {/* Imagem e elementos gráficos à direita */}
          <div style={{ position: 'relative', width: '420px', height: '380px', zIndex: 1, flex: 1, minWidth: '260px' }}>
            {/* Elementos gráficos decorativos */}
            <span aria-hidden="true" style={{ position: 'absolute', top: '30px', left: '40px', width: '32px', height: '32px', background: '#ffc72c', borderRadius: '50%' }}></span>
            <span aria-hidden="true" style={{ position: 'absolute', top: '120px', left: '0', width: '24px', height: '24px', background: '#fff', borderRadius: '50%' }}></span>
            <span aria-hidden="true" style={{ position: 'absolute', top: '200px', left: '80px', width: '40px', height: '40px', background: '#ffc72c', borderRadius: '50%' }}></span>
            <span aria-hidden="true" style={{ position: 'absolute', top: '60px', left: '180px', width: '60px', height: '60px', background: '#fff', borderRadius: '50%' }}></span>
            {/* Estrela */}
            <svg aria-hidden="true" style={{ position: 'absolute', top: '100px', left: '120px' }} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0L24.7553 13.0902H39.0211L27.1329 21.1806L31.8882 34.2708L20 26.1804L8.11177 34.2708L12.8671 21.1806L0.978882 13.0902H15.2447L20 0Z" fill="#ffc72c"/>
            </svg>
            {/* Imagem do cachorro e gato */}
            <Image src="/assets/caoegato.png" alt="Foto ilustrativa de um cachorro e um gato juntos, representando pets atendidos" width={440} height={440} style={{ position: 'absolute', bottom: 0, right: 0, zIndex: 2, maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>
    </main>
  );
} 