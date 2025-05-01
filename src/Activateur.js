import React, { useState } from 'react';
import './Activateur.css';

function ModalPresence() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="modal-presence-container">
      <button onClick={openModal} className="open-modal-btn">
        Lire mon témoignage
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Présence & Accompagnement lors de l'entretien préliminaire avec la résidente potentielle</h2>
            <p>
              Lors de cette matinée, la journée charnière, j'ai accompagné la future résidente dans sa redécouverte de la Résidence des Vignes (1ére visite en décembre 2024).  <br/><br/>
              Mon rôle fut d'observer et de répondre si nécessaire un relais au dossier n°649, cette référence administrative n'a jamais été prononcée volontairement.<br/>
              
              L'échange fût mener par un médecin Mr Masquelier référent entre les établissements et Rémy Kuczera responsable des équipes. <br/><br/>
             
              Aveugle et en perte d'équilibre la préparation pour l'intégration et la mise en route d'une nouvelle étape de sa vie est ici cruciale.  <br/><br/>
              
              L'échange clair et direct entre les représentants de cette communauté et la postulante pris donc une heure et demi.  <br/><br/>
              La seconde visite réalisée auparavant a mis en lumière les attentes spécifiques de la résidente, 
              ses inquiétudes face à la transition, et ses besoins d'accompagnement humain au-delà du simple accueil matériel.
              <br/><br/>
             
              L'attention portée à la préservation de son autonomie, la mise en valeur de ses souvenirs, et le respect de son rythme ont été 
              essentiels dans cette phase de pré-admission.  <br/><br/>
              Ce moment d'écoute active a renforcé la qualité de l'accueil futur et poser les bases d'une intégration douce et respectueuse dans un nouveau lieu de vie.  <br/><br/>
              Comme faisait remarqué Rémy, il est important de ne pas brusquer la résidente et de lui laisser le temps de s'adapter à son nouvel environnement.
              La gestion à la caserne et l'organisation du temps de type hospitalier ne sont pas ici les modéles de vie. <br/><br/>
            </p>
            <button onClick={closeModal} className="close-modal-btn">
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalPresence;
