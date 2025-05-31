'use client';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// Corrige o ícone padrão do Leaflet para funcionar no Next.js
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const endereco = {
  nome: 'R. Rui Barbosa, 3538 - Vila Alta, Campo Grande - MS, 79002-364',
  lat: -20.4486, // Coordenadas aproximadas
  lng: -54.6011,
};

const bairrosProximos = [
  'Rita Vieira',
  'Jardim dos Estados',
  'Nova Lima',
  'Jardim Bela Vista',
  'Itanhangá',
  'Chácara Cachoeira',
  'Vilas Boas',
  'Cidade Jardim',
];

export default function ModalLocalizacao({ aberto, aoFechar }: { aberto: boolean, aoFechar: () => void }) {
  const [isClient, setIsClient] = useState(false);

  // Impede scroll do fundo quando o modal está aberto
  useEffect(() => {
    setIsClient(true);
    if (aberto) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [aberto]);

  if (!aberto) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
        <button onClick={aoFechar} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl">×</button>
        <h2 className="text-xl font-bold mb-2">Localização do Ônibus</h2>
        <p className="mb-4">{endereco.nome}</p>
        <div className="h-64 w-full mb-4 rounded overflow-hidden">
          {isClient && (
            <MapContainer center={[endereco.lat, endereco.lng]} zoom={16} style={{ height: '100%', width: '100%' }} scrollWheelZoom={false}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[endereco.lat, endereco.lng]} icon={icon}>
                <Popup>Ônibus Pet Móvel</Popup>
              </Marker>
            </MapContainer>
          )}
        </div>
        <h3 className="font-semibold mb-1">Próximos bairros:</h3>
        <ul className="list-disc pl-5 mb-2">
          {bairrosProximos.map(bairro => (
            <li key={bairro}>{bairro}</li>
          ))}
        </ul>
      </div>
    </div>
  );
} 