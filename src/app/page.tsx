import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoCards from './components/InfoCards';
import Newsletter from './components/Newsletter';
import Services from './components/Services';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <InfoCards />
      <Newsletter />
      <Footer />
    </>
  );
} 