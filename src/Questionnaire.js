import React from 'react';
import './Questionnaire.css';
import Activateur from './Activateur';



function SyntheseQuestionnaire() {
  return (
    <div className="questionnaire-page">
      <h1>Synthèse du Questionnaire Observé</h1>
      <Activateur />

      <p>
          J'ai aidé à l'écriture des réponses du questionnaire pour un nouveau menbre de cette petite communauté aveugle.<br/>
          C'est la premiére étape avant une admition avec la visite guidée de la maison de retraite.<br/>
          Le questionnaire est un outil d'évaluation et de recueil d'informations sur la vie quotidienne et les besoins des résidents.<br/>
          Il peut être éliminatoire ou un accélérateur d'admission selon les réponses données.<br/>
        </p>
      <section>
        <h2>Objectif du questionnaire</h2>
        <p>
          Recueillir les éléments de vie essentiels d'un résident entrant en maison de retraite (EHPAD), afin de :
        </p>
        <ul>
          <li>Respecter ses habitudes,</li>
          <li>Adapter son accompagnement quotidien,</li>
          <li>Préserver sa mémoire et son individualité dans la mesure du possible.</li>
        </ul>
      </section>

      <section>
        <h2>Grandes parties abordées</h2>
        <ul>
          <li><strong>Identité et biographie :</strong> parcours familial et attaches affectives principales.</li>
          <li><strong>Vie conjugale et familiale :</strong> mariage, enfants, petits-enfants.</li>
          <li><strong>Métiers exercés :</strong> activités professionnelles passées.</li>
          <li><strong>Religions et croyances :</strong> convictions et pratiques spirituelles.</li>
          <li><strong>Habitudes alimentaires :</strong> goûts, régimes, allergies.</li>
          <li><strong>Vie sociale :</strong> loisirs, sorties, préférence pour la compagnie ou la solitude.</li>
          <li><strong>Mobilité et appareillages :</strong> usage de canne, fauteuil, lunettes, prothèses.</li>
          <li><strong>Autonomie quotidienne :</strong> toilette, habillage, repas, déplacement, sommeil.</li>
          <li><strong>Souhaits personnels :</strong> manière d'être appelé(e), vouvoiement/tutoiement, habitudes de vie.</li>
        </ul>
      </section>

      <section>
        <h2>Esprit du questionnaire</h2>
        <p>
          Le questionnaire n'est pas un contrôle, mais une écoute. Il permet de comprendre la personne dans sa globalité, sans jugement ni évaluation froide.
        </p>
      </section>

      <section>
        <h2>Limites et confidentialité</h2>
        <ul>
          <li><strong>Consentement :</strong> la personne a accepté de répondre, mais a refusé toute diffusion d’image ou de propos.</li>
          <li><strong>Respect de l'intimité :</strong> certains sujets sensibles ont été éludés à la demande du résident.</li>
          <li><strong>Neutralité :</strong> l’accompagnement s'est fait sans pression, dans le respect du rythme et des volontés de la personne.</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem", fontStyle: "italic", textAlign: "center" }}>
        <p>
          Le questionnaire a permis de recueillir, dans le respect strict de l’intimité, 
          les éléments essentiels pour préserver l’histoire, les besoins et les préférences 
          d'une personne âgée entrant en maison de retraite. 
          Aucune diffusion d'information, d'image ou de témoignage n'a été autorisée.
        </p>
      </section>

      <p className="footer-text">
        La Résidence des Vignes insiste sur l'importance du lien et de l'engagement de l'ensemble de son personnel, mais aussi de la discrétion pour ces personnes fragiles. 
        Il n'y a que 45 résidents classiques et un département semi-ouvert de 15 places pour les personnes souffrant d'Azheimer.<br/> 
        Il y a des portraits des anciens partis (centenaires) et chaque individu par une photo son nom et prénom à l'entrée de sa chambre aménagée par eux mêmes; rien de standard.<br/>
      
      </p>

    </div>
  );
}

export default SyntheseQuestionnaire;
