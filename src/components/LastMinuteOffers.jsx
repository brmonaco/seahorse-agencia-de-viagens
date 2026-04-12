import { useState, useEffect } from 'react';
import './LastMinuteOffers.css';
import { Timer } from 'lucide-react';

const LastMinuteOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              // Reset for infinite demo loop
              hours = 24; 
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section offers">
      <div className="container">
        <div className="offers-wrapper fade-in-section">
          <div className="offers-content">
            <div className="badge-highlight">Apenas essa semana</div>
            <h2>Ofertas de Última Hora</h2>
            <p>Economize em pacotes premium antes que o tempo acabe. Vagas super limitadas!</p>
            
            <div className="countdown">
              <div className="countdown-item">
                <span className="time">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="label">Horas</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-item">
                <span className="time">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="label">Min</span >
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-item">
                <span className="time">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="label">Seg</span>
              </div>
            </div>
          </div>
          
          <div className="offer-card fade-in-section">
            <div className="offer-img">
              <img src="https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Resort Bahamas" />
              <div className="offer-tag"><Timer size={14} /> Flash Sale</div>
            </div>
            <div className="offer-details">
              <h3>Resort All Inclusive nas Bahamas</h3>
              <p className="offer-desc">7 dias de puro luxo com passagens e transfers incluídos.</p>
              <div className="price-box">
                <span className="price-old">De R$ 12.500</span>
                <span className="price-new">Por R$ 8.990<small>/pessoa</small></span>
              </div>
              <a href="#contato" className="btn btn-primary btn-block">Aproveitar Oferta</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastMinuteOffers;
