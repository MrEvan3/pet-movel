import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer with the correct text', () => {
    render(<Footer />);
    expect(screen.getByText(/Pet\s*Móvel/i)).toBeInTheDocument();
    expect(screen.getByText('Entre em contato:')).toBeInTheDocument();
    expect(screen.getByText('Email: email@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('Telefone: 67 9 9999-9999')).toBeInTheDocument();
  });
});