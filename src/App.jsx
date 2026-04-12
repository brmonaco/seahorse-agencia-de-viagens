import { useScrollReveal } from './hooks/useScrollReveal';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import LastMinuteOffers from './components/LastMinuteOffers';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  useScrollReveal();

  return (
    <div className="app">
      <Header />
      <Hero />
      <Destinations />
      <div id="pacotes">
        <LastMinuteOffers />
      </div>
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
