import React from 'react';
import './App.css';
import './Acceuil.css';
import Agenda from './Agenda';
import TemoignageModal from './TemoignageModal';

function Acceuil() {
  return (

    <div className="accueil-container">
      <h1>Village de Sainghin-en-Weppes</h1>
        
        {/* Ajoute des remerciements */}
      <TemoignageModal />

        {/* Ajoute l'agenda ici */}
      <Agenda />

       <div className="grid-container">
    <img src="/img/1000006688.jpg" alt="Vue 1" className="photo photo1" title= "Facade et entrée principal de la résidense" />
    <img src="/img/IMG20250425145613.jpg" alt="Vue 2" className="photo photo2" title= "Parking d'accès vers l'entrée  de la résidense des Vignes" />
    
    <img src="/img/IMG20250425145911.jpg" alt="Vue 3" className="photo photo3" title= "Place de la Mairie et rond point d'accès à tous les établissements"/>
    <img src="/img/IMG20250425145900.jpg" alt="Vue 4" className="photo photo4" title= "Mairie de Sainghin en Weppes et accès à droite de la Résidence des Vignes"/>

    <img src="/img/plan-centre-ville.png" alt="Plan" className="carte-centrale" title= "Plan succinct de la Place de Mairie de Sainghin en Weppes et de la Résidence des Vignes"/>

  </div>
</div>
  );
}

export default Acceuil;
