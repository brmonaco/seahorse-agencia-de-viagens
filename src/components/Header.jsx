import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

useEffect(() => {
  const handleClickOutside = (e) => {
    // Só fecha se clicar fora do nav E fora do botão hamburguer
    if (
      navRef.current &&
      !navRef.current.contains(e.target) &&
      !e.target.closest('.mobile-menu-btn')
    ) {
      setMobileMenuOpen(false);
    }
  };
  if (mobileMenuOpen) {
    // Pequeno delay para não capturar o clique que abriu o menu
    setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);
  }
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [mobileMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>

      {/* Overlay escuro atrás do menu no mobile */}
      {mobileMenuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div className="container header-container">
        <a href="#" className="logo-container">
          <img
            src="/seahorse-logo.png"
            alt="SeaHorse Agência de Viagens"
            className="logo-image"
          />
        </a>

        <nav ref={navRef} className={`navbar ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#destinos" onClick={() => setMobileMenuOpen(false)}>Destinos</a>
          <a href="#pacotes" onClick={() => setMobileMenuOpen(false)}>Pacotes</a>
          <a href="#avaliacoes" onClick={() => setMobileMenuOpen(false)}>Avaliações</a>
          <a href="#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
          {/* ✅ "<a" estava faltando aqui */}
          
            <a href="#contato"
            className="btn btn-primary btn-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Quero Viajar
          </a>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

    </header>
  );
};

export default Header;