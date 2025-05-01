// src/TriptyqueCentenaire.js
import React from 'react';
import './TriptyqueCentenaire.css';

function TriptyqueCentenaire() {
  return (
    <div className="triptyque-centenaire">
      <div className="photo-wrapper">
        <img src="/img/centenaire2.png" alt="Centenaire gauche" />
      </div>
      <div className="photo-wrapper centre">
        <img src="/img/centenaire1.png" alt="Centenaire centre" />
      </div>
      <div className="photo-wrapper">
        <img src="/img/centenaire3.png" alt="Centenaire droite" />
      </div>
    </div>
  );
}

export default TriptyqueCentenaire;
