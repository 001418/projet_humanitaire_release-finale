import React, { useState, useEffect } from 'react';
import JeuMemoire from './JeuMemoire';
import './Memoire.css';

function Memoire() {
  const [enfance, setEnfance] = useState('');
  const [vieActive, setVieActive] = useState('');
  const [loisirs, setLoisirs] = useState('');

   // Charger depuis localStorage au démarrage
   useEffect(() => {
    setEnfance(localStorage.getItem('memoire_enfance') || '');
    setVieActive(localStorage.getItem('memoire_vieActive') || '');
    setLoisirs(localStorage.getItem('memoire_loisirs') || '');
  }, []);

  // Sauvegarder automatiquement à chaque modification
  useEffect(() => {
    localStorage.setItem('memoire_enfance', enfance);
  }, [enfance]);

  useEffect(() => {
    localStorage.setItem('memoire_vieActive', vieActive);
  }, [vieActive]);

  useEffect(() => {
    localStorage.setItem('memoire_loisirs', loisirs);
  }, [loisirs]);


  return (
    <div className="memoire-page">
      <h1>Mémoire du chemin de vie</h1>

      <section className="memoire-intro">
        <p>
          Chaque existence est une traversée unique, semée de souvenirs tendres, d'épreuves et de joies.
          Ici, on éveille doucement la mémoire par l'écriture et le jeu, sans contraintes.
        </p>
      </section>

      <section className="memoire-bloc">
        <h2>1. Souvenirs d'enfance</h2>
        <p>Parlez-moi de votre village d'enfance, de votre école, des premiers jeux que vous aimiez.</p>
        <textarea
          value={enfance}
          onChange={(e) => setEnfance(e.target.value)}
          placeholder="Écrivez ici vos souvenirs d'enfance..."
          className="memoire-textarea"
        />
      </section>

      <section className="memoire-bloc">
        <h2>2. Vie active et famille</h2>
        <p>Quels métiers avez-vous exercés ? Quels événements ont marqué votre vie d'adulte ? Mariages, enfants, voyages...</p>
        <textarea
          value={vieActive}
          onChange={(e) => setVieActive(e.target.value)}
          placeholder="Écrivez ici vos souvenirs de votre vie active..."
          className="memoire-textarea"
        />
      </section>

      <section className="memoire-bloc">
        <h2>3. Présent et loisirs</h2>
        <p>Quels loisirs vous accompagnent aujourd'hui ? Quelles petites habitudes rythment vos journées ?</p>
        <textarea
          value={loisirs}
          onChange={(e) => setLoisirs(e.target.value)}
          placeholder="Écrivez ici vos loisirs et habitudes actuelles..."
          className="memoire-textarea"
        />
      </section>

      <section className="memoire-jeu">
        <h2>4. Jeu du souvenir</h2>
        <JeuMemoire />
      </section>
    </div>
  );
}

export default Memoire;
