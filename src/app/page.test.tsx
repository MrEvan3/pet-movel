import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders the home page with all components', () => {
    render(<Home />);
    expect(screen.getByTestId('header-title')).toBeInTheDocument();
    expect(screen.getByText('Conectando Você ao Melhor Cuidado Veterinário')).toBeInTheDocument();
  });
});