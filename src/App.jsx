import { useState } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import LastMinuteOffers from './components/LastMinuteOffers';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  useScrollReveal();

  // Guarda o nome do pacote ou destino selecionado para pré-preencher o formulário
  const [pacoteSelecionado, setPacoteSelecionado] = useState('');

  // Controla se a política de privacidade está aberta ou fechada
  const [privacyAberta, setPrivacyAberta] = useState(false);

  return (
    <div className="app">
      <Header />
      <Hero />
      <Destinations onSelectDestino={setPacoteSelecionado} />

      <div id="pacotes">
        <LastMinuteOffers onSelectPackage={setPacoteSelecionado} />
      </div>

      <Features />
      <Testimonials />

      {/* Passa a função de abrir política para o formulário */}
      <ContactForm
        pacoteSelecionado={pacoteSelecionado}
        onOpenPrivacy={() => setPrivacyAberta(true)}
      />

      <Footer onOpenPrivacy={() => setPrivacyAberta(true)} />

      {/* Mostra a política só quando privacyAberta for true */}
      {privacyAberta && (
        <PrivacyPolicy onClose={() => setPrivacyAberta(false)} />
      )}
    </div>
  );
}

export default App;