import { Metadata } from 'next';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoCards from './components/InfoCards';
import Newsletter from './components/Newsletter';
import Services from './components/Services';

export const metadata: Metadata = {
  title: 'Pet Móvel - Cuidados para seu pet em domicílio',
  description: 'Serviços de banho, tosa, veterinário e pet sitter em domicílio. Cuidamos do seu pet com amor e profissionalismo.',
  keywords: 'pet, banho, tosa, veterinário, pet sitter, dog walker, cuidados com pets',
  openGraph: {
    title: 'Pet Móvel - Cuidados para seu pet em domicílio',
    description: 'Serviços de banho, tosa, veterinário e pet sitter em domicílio. Cuidamos do seu pet com amor e profissionalismo.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Services />
      <Newsletter />
      <InfoCards />
      <Footer />
    </main>
  );
}
