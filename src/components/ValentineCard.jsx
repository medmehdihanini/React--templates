import React, { useState } from 'react';
import './ValentineCard.css';

const ValentineCard = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="valentine-container">
      <div className={`card ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="card-front">
          <div className="heart-float">❤️</div>
          <h2>Pour Khouloud</h2>
          <p>Clique pour ouvrir</p>
          <div className="floating-emojis">
            🌹 💝 💖 💕
          </div>
        </div>
        
        <div className="card-inside">
          <h1>Joyeuse Saint-Valentin</h1>
          <h2>{name} !</h2>
          <p className="message">
            hhhhhhhhhh  :) afr7 barkaaa 
            <br />
            
          </p>
          <div className="animated-hearts">
            💝 💖 💗 💓 💞
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValentineCard; 