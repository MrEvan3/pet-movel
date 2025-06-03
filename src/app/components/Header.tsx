'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={{ background: '#2d2fa3', padding: '0', minHeight: '90px' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
        height: '90px',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <span data-testid="header-title" style={{
            fontFamily: 'Paytone One, sans-serif',
            fontSize: '2.2rem',
            color: '#fff',
            letterSpacing: '1px',
            fontWeight: 700,
          }}>
            Pet <span style={{ color: '#ffc72c' }}>Móvel</span>
          </span>
        </Link>
        <nav>
          <ul style={{
            display: 'flex',
            gap: '36px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}>
            <li><Link href="/" style={{ color: '#fff', fontFamily: 'Open Sans, sans-serif', fontSize: '1.1rem', textDecoration: 'none', fontWeight: 400 }}>Página Inicial</Link></li>
            <li><Link href="/sobre" style={{ color: '#fff', fontFamily: 'Open Sans, sans-serif', fontSize: '1.1rem', textDecoration: 'none', fontWeight: 400 }}>Sobre</Link></li>
            <li><Link href="/localizacao" style={{ color: '#fff', fontFamily: 'Open Sans, sans-serif', fontSize: '1.1rem', textDecoration: 'none', fontWeight: 400 }}>Localização</Link></li>
            <li><Link href="/relatorio" style={{ color: '#fff', fontFamily: 'Open Sans, sans-serif', fontSize: '1.1rem', textDecoration: 'none', fontWeight: 400 }}>Relatório de Atividades</Link></li>
            <li><Link href="/denuncias" style={{ color: '#fff', fontFamily: 'Open Sans, sans-serif', fontSize: '1.1rem', textDecoration: 'none', fontWeight: 400 }}>Denúncias</Link></li>
          </ul>
        </nav>
      </div>
      <button
        className="mobile-menu-button"
        onClick={toggleMenu}
        aria-label="Menu"
        aria-expanded={isMenuOpen}
      >
        <span className="menu-icon"></span>
      </button>
    </header>
  );
} 