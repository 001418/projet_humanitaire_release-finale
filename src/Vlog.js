import React from 'react';
import PlayerAudio from './PlayerAudio';
import TriptyqueCentenaire from './TriptyqueCentenaire.js';




function Vlog() {
  return (
    <div className="page">
      <h1>Vlog & Mémoire</h1>

      <section className="memoire-bloc">
        <h2>Absence de diffusion d'images et de témoignages</h2>
        <p>
          Conformément au respect de la vie privée et au principe fondamental de consentement éclairé, 
          aucune photographie ni propos personnel n'ont été diffusés. 
          La personne concernée n'a pas souhaité être photographiée ni enregistrée.
          Cette démarche a été respectée intégralement pour préserver son intimité, conformément aux exigences éthiques et réglementaires en vigueur.<br/><br/>
       
          Les trois croquis portaits sont des représentations de trois centenaires décédés qui eux ont chacun une toile peinte en leur hommage à l'entrée de la résidence.<br/><br/>
        </p>
      </section>

      <TriptyqueCentenaire />

  
       <br/>
       <br/>

      <section className="memoire-bloc">
        <p>
          Ce vlog est le fruit d'un projet de recherche-action mené pour GEMA et pour être présenté à la Résidence des Vignes (EHPAD de Sainghin-en-Weppes).
        </p>                                                                                                                                                                                                                                                                                                                                                                                                     
      </section>

      <section style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h2>Travail sur la mémoire à court et long terme (29/04/2025)</h2>
        <p>
          Un module de narration basé sur les souvenirs anciens sera intégré ici pour stimuler les capacités cognitives des résidents valides.<br/>
          <strong>Cliquer sur Mémoire dans la bande de menu pour y accéder.</strong>
          <br/>
          <strong>Cliquer sur Galerie dans la bande de menu pour accéder aux petits jeux.</strong>
        </p>
      </section>

      <section className="memoire-jeu" style={{ marginTop: '2rem' }}>
        <p>
          Ce vlog clôt le projet en exprimant, à travers un témoignage ou une séquence vidéo, 
          le sens profond du travail réalisé autour de la mémoire et du territoire.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
  <a href="/memoire">
    <button style={{
      padding: '0.8rem 1.6rem',
      backgroundColor: '#4682B4',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      cursor: 'pointer',
      boxShadow: '2px 2px 8px rgba(0,0,0,0.2)'
    }}>
      Accéder à la page Mémoire
    </button>
  </a>
  <a href="/galerie">
    <button style={{
      padding: '0.8rem 1.6rem',
      backgroundColor: '#2e8b57',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      cursor: 'pointer',
      boxShadow: '2px 2px 8px rgba(0,0,0,0.2)'
    }}>
      Voir la Galerie
    </button>
  </a>
</div>

        <div className="grid-container">

          <img src="/img/IMG20250429164838.jpg" alt="Vue 1" className="photo photo1" title= "Jardin intérieur de la résidense" />
          <img src="/img/IMG20250429164755.jpg" alt="Vue 2" className="photo photo2" title= "Salle commune pour les activités de jeux et d'excercices " />
        
        </div>
        
      
        <section style={{ marginTop: '4rem' }}>
          <PlayerAudio />
        </section>

       
      </section>
    </div>
  );
}

export default Vlog;
