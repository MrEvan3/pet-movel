import { render, screen } from '@testing-library/react';
import Map from '../Map';

describe('Map Component', () => {
  it('renders without crashing', () => {
    render(<Map />);
    // Verifica se o elemento do mapa está presente
    expect(screen.getByTestId('map-container')).toBeInTheDocument();
  });
}); 