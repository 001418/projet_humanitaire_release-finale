import React, { useState } from 'react';
import './Agenda.css';

function Agenda() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAgenda = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="agenda-container">
      <button onClick={toggleAgenda} className="agenda-toggle-btn">
        {isOpen ? 'Fermer l’Agenda' : 'Ouvrir l’Agenda'}
      </button>

      {isOpen && (
        <div className="agenda-content">
          <h3>Agenda</h3>
          <ul>
            <li><strong>28 Décembre 2024 :</strong> Visite et présentation de la structure locale : La Résidence des Vignes.</li>
            <li><strong>25 Avril :</strong> Remise en main propre du document d'admission.</li>
            <li><strong>26 Avril :</strong> Remplissage du document avec la future résidente.</li>
            <li><strong>28 Avril :</strong> Visite de l'organisation avec la postulante avant entretien.</li>
            <li><strong>28 Avril :</strong> Accompagnement au rendez-vous de pré-entrée de 11h00 à 12h30.</li>
            <li><strong>29 Avril :</strong> Animation de l'après-midi pour les résidents avec des retraités venant de l'extérieur de l'établissement: discussions, jeux avec appel à la mémoire longue.</li>
            <li><strong>05 Mai :</strong> Accompagnement et suivi de l'installation avec la nouvelle résidente pour 14h00.</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Agenda;
