import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#f7f7f7', width: '100%', padding: '0', margin: '0', borderTopLeftRadius: '18px', borderTopRightRadius: '18px', marginTop: '48px' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '48px 40px 0 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '32px' }}>
          {/* Logo e contato */}
          <div style={{ minWidth: '220px', flex: 1 }}>
            <div style={{ marginBottom: '18px' }}>
              <span style={{
                fontFamily: 'Paytone One, sans-serif',
                fontSize: '2rem',
                color: '#222',
                fontWeight: 700,
              }}>
                Pet <span style={{ color: '#ffc72c' }}>Móvel</span>
              </span>
            </div>
            <div style={{ marginBottom: '12px' }}>
              <button style={{
                background: '#ffc72c',
                color: '#222',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 16px',
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                marginBottom: '8px',
                outline: '2px solid #2d2fa3',
                outlineOffset: '2px',
              }}>
                Entre em contato:
              </button>
            </div>
            <div style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '1rem', color: '#222', marginBottom: '4px' }}>
              Email: email@gmail.com
            </div>
            <div style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '1rem', color: '#222', marginBottom: '4px' }}>
              Telefone: 67 9 9999-9999
            </div>
            <div style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '1rem', color: '#222', marginBottom: '4px' }}>
              Endereço:
            </div>
          </div>
          {/* Menu */}
          <nav aria-label="Links do rodapé" style={{ minWidth: '220px', flex: 2, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <ul style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '32px',
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '1rem',
              color: '#222',
            }}>
              <li><Link href="/">Página Inicial</Link></li>
              <li><Link href="/sobre">Sobre</Link></li>
              <li><Link href="/localizacao">Localização</Link></li>
              <li><Link href="/relatorio">Relatório de Atividades</Link></li>
              <li><Link href="/denuncias">Denúncias</Link></li>
            </ul>
          </nav>
        </div>
        {/* Copyright e políticas */}
        <div style={{ borderTop: '1px solid #e0e0e0', paddingTop: '24px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px', fontFamily: 'Open Sans, sans-serif', fontSize: '0.95rem', color: '#888', textAlign: 'center' }}>
          <div style={{ color: '#222' }}>
            © 2025 Evandro Lemos. Todo os direitos reservados.
          </div>
          <nav aria-label="Políticas do site">
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', justifyContent: 'center', listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a href="#" style={{ color: '#2d2fa3', textDecoration: 'underline', outline: '2px solid #2d2fa3', outlineOffset: '2px' }}>Política de Privacidade</a></li>
              <li><a href="#" style={{ color: '#2d2fa3', textDecoration: 'underline', outline: '2px solid #2d2fa3', outlineOffset: '2px' }}>Política de Cookies</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
} 