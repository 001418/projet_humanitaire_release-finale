// src/TemoignageModal.js
import React, { useState } from 'react';
import './TemoignageModal.css';

function TemoignageModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="temoignage-btn" onClick={() => setIsOpen(true)}>
        📌 Remerciement aux équipes de la Résidence Des Vignes
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Témoignage personnel & Remerciements</h3>  
            <p>
              J'ai accompagné une future résidente lors de sa visite préliminaire à l’EHPAD 
              parce que je l'avais aidé à constituer son dossier préliminaire, mais aussi par les démarches antérieures de visite.<br/>
              C'est la raison donc de ma présence à ses côtés.<br/><br/>

              Ce fut un moment nécessaire, mêlant questions, mémoire et questionnements. <br/><br/>

              L'interdiction de briser l'intimité de ces échanges justifie l'absence de photographies.<br/><br/>

              Ma présence était celle du soutient durant la libre prise de de parole de cette personne.
              <br/><br/>
              Je tiens à remercier pour leurs permissions d'accès et d'échange, le temps d'engagement de Mesdames Virginie Goselin & Christine Doumiaux. 
              Agents de filtrage et de coordination toujours à l'Acceuil.<br/><br/>

              Ces deux adjointes administratives qui avec Madame Rasset adjointe du directeur m'ont permises d'être présent et actif lors des divers passages et temps passés avec les résidents.<br/><br/>

              Je tiens aussi à remercier le Directeur Mr Ryckelynck d'abord réticent puis curieux de ma démarche, qui m'a demandé de pouvoir lui faire un retour sur le site web mais aussi l'impact de cette présence et de ce témoignage. <br/><br/>
                
              Je remercie aussi Mr Rémy Kuczera coordinateur des soins qui passe justement 20% de son temps en soin pour garder le contact avec toutes ces personnes.
              De même la patience du Docteur coordinateur & médecin des équipes de soins, qui a mené tranquillement et sereinement l'ensemble de l'entretien prévu pour une heure, qui a duré ce jour là 01h35.<br/><br/>   
                </p>
            <button onClick={() => setIsOpen(false)} className="fermer-btn">Fermer</button>
          </div>
        </div>
      )}
    </>
  );
}

export default TemoignageModal;
