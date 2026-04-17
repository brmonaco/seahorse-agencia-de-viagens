import { useState, useEffect } from 'react';
import './LastMinuteOffers.css';
import { Timer } from 'lucide-react';

// Função que calcula quanto tempo falta até a data de expiração
const calcularTempoRestante = (dataExpiracao) => {
  const agora = new Date().getTime();
  const expira = new Date(dataExpiracao).getTime();
  const diferenca = expira - agora;

  // Se já expirou, retorna tudo zero
  if (diferenca <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diferenca / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diferenca % (1000 * 60)) / 1000)
  };
};

const LastMinuteOffers = ({ onSelectPackage }) => {
  // Estado do contador — começa zerado até carregar o JSON
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  // Estado para saber se já carregou a data do servidor
  const [carregado, setCarregado] = useState(false);
  // Guarda a data de expiração lida do JSON
  const [dataExpiracao, setDataExpiracao] = useState(null);

  // Busca a data de expiração do arquivo ofertas.json na pasta public/
  useEffect(() => {
    fetch('/ofertas.json')
      .then(res => res.json())
      .then(data => {
        setDataExpiracao(data.dataExpiracao);
        setTimeLeft(calcularTempoRestante(data.dataExpiracao));
        setCarregado(true);
      })
      .catch(err => {
        console.error('Erro ao carregar ofertas.json:', err);
        setCarregado(true); // mostra zerado se der erro
      });
  }, []);

  // Atualiza o contador a cada segundo
  useEffect(() => {
    if (!dataExpiracao) return; // espera carregar antes de iniciar

    const timer = setInterval(() => {
      setTimeLeft(calcularTempoRestante(dataExpiracao));
    }, 1000);

    return () => clearInterval(timer); // limpa ao sair da tela
  }, [dataExpiracao]);

  // Função chamada quando o usuário clica em "Quero esse pacote"
  const handleSelecionarPacote = (nomePacote) => {
    if (onSelectPackage) {
      onSelectPackage(nomePacote); // passa o nome do pacote para o App.jsx
    }
    // Rola suavemente até o formulário de contato
    const secaoContato = document.getElementById('contato');
    if (secaoContato) {
      secaoContato.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section offers">
      <div className="container">

        {/* Título da seção */}
        <div className="offers-header fade-in-section">
          <div className="badge-highlight">Apenas essa semana</div>
          <h2>Ofertas de Última Hora</h2>
          <p>Economize em pacotes premium antes que o tempo acabe. Vagas super limitadas!</p>

          {/* Contador centralizado */}
          <div className="countdown">
            {/* Dias */}
            <div className="countdown-item">
              <span className="time">
                {carregado ? String(timeLeft.days).padStart(2, '0') : '--'}
              </span>
              <span className="label">Dias</span>
            </div>
            <span className="countdown-separator">:</span>

            {/* Horas */}
            <div className="countdown-item">
              <span className="time">
                {carregado ? String(timeLeft.hours).padStart(2, '0') : '--'}
              </span>
              <span className="label">Horas</span>
            </div>
            <span className="countdown-separator">:</span>

            {/* Minutos */}
            <div className="countdown-item">
              <span className="time">
                {carregado ? String(timeLeft.minutes).padStart(2, '0') : '--'}
              </span>
              <span className="label">Min</span>
            </div>
            <span className="countdown-separator">:</span>

            {/* Segundos */}
            <div className="countdown-item">
              <span className="time">
                {carregado ? String(timeLeft.seconds).padStart(2, '0') : '--'}
              </span>
              <span className="label">Seg</span>
            </div>
          </div>
        </div>

        {/* Cards lado a lado */}
        <div className="offers-cards fade-in-section">

          {/* Card 1 — Nacional */}
          <div className="offer-card">
            <div className="offer-img">
              <img
                src="https://images.unsplash.com/photo-1615129549504-de19ba618eee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBvcnRvJTIwU2VndXJvJTIwQnJhc2lsfGVufDB8fDB8fHww"
                alt="Porto Seguro - Bahia"
              />
              <div className="offer-tag"><Timer size={14} /> Flash Sale</div>
            </div>
            <div className="offer-details">
              <h3>Porto Seguro - Bahia</h3>
              <p className="offer-desc">
                Voo + 5 noites com café da manhã incluso. Praias paradisíacas te esperam!
              </p>
			  {/*  <div className="price-box">
                <span className="price-old">De R$ 3.200</span>
                <span className="price-new">
                  Por R$ 1.890<small>/pessoa</small>
                </span>
              </div>*/}
              <button
                className="btn btn-primary btn-block"
                onClick={() => handleSelecionarPacote('Porto Seguro - Bahia')}
              >
                Quero esse pacote
              </button>
            </div>
          </div>

          {/* Card 2 — Internacional */}
          <div className="offer-card">
            <div className="offer-img">
              <img
                src="https://images.unsplash.com/photo-1698726654908-834d3a5330d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFsZGl2YXMlMjByZXNvcnR8ZW58MHx8MHx8fDA%3D"
                alt="Maldivas"
              />
              <div className="offer-tag"><Timer size={14} /> Flash Sale</div>
            </div>
            <div className="offer-details">
              <h3>Resort All Inclusive — Maldivas</h3>
              <p className="offer-desc">
                7 dias de puro luxo com passagens e transfers incluídos. Vagas limitadas!
              </p>
              {/*<div className="price-box">
                <span className="price-old">De R$ 12.500</span>
                <span className="price-new">
                  Por R$ 8.990<small>/pessoa</small>
                </span>
              </div>*/}
              <button
                className="btn btn-primary btn-block"
                onClick={() => handleSelecionarPacote('Resort All Inclusive — Maldivas')}
              >
                Quero esse pacote
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LastMinuteOffers;