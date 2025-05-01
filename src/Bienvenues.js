import React from 'react';
import Agenda from './Agenda'; 

function Bienvenues() {
  return (


    <div className="page">
      <h1>Accueil Résidence de la vigne</h1>
        
     
        <h2>La maison de retraite de Sainghin-en-Weppes que l'on appelle aujourd'hui EHPAD, mais que animateurs et équipes considérent comme un petit village de par sa communauté.</h2>
    

      <p>
        <strong>Définition :</strong> établissement d'hébergement pour personnes âgées dépendantes.<br />
        Elle permet de visualiser l’environnement dans lequel résident des personnes en perte de mémoire, souvent âgées, souvent des femmes.<br />
        <strong>Ici, le ratio est de 80% de femmes pour 20% d'hommes.</strong>
      </p>

      <Agenda /> {/* Ajoute l'agenda ici */}  
             
      <p>
      <strong>L’objectif est de transmettre un témoignage discret et respectueux de la réalité locale.</strong>
      </p>

      <p>
        Il faut éveiller ou réveiller une approche humaine, améliorer la capacité d’écoute. Se tourner vers les autres, l'autre réellement différent par la génération, son histoire et expérimenter ses valeurs.
        L’échange, le partage, le don de soi… trouvent ici un terrain d’application révélateur de soi-même.
      </p>

      <p>
       <strong>La maison de retraite est un lieu de solitude interne et externe :</strong> <br />
        - Externe par les ruptures générationnelles de plus en plus marquées.<br />
        - Interne par la solitude des personnes âgées, qui se perdent parfois dans leur mémoire et ont besoin de l’ancre que crée l’interaction sincère et l’écoute attentive.
      </p>

      <p>
        Des visites ponctuelles (si possible) et non invasives gardent la discrétion de ces vies. <br />
        On m'a demandé la non-publication des photos des personnes visitées.<br />
        Ici, l’assistance numérique existe et permet de maintenir le lien (ex : appels aux enfants).
      </p>

      <figure className="programme-container">
 
       <img
         src="/img/IMG20250429164913.jpg"
         alt="Tableau d'accueil"
         className="programme"
       />
        
       <figcaption style={{ textAlign: 'center', marginTop: '0.8rem', fontSize: '1.5rem', color: 'blue' }}>
             Tableau d'accueil et programme de la semaine
       </figcaption>

      </figure>

      <p>
        Des matinées et après-midis mémoires existent par des jeux interactifs qui parsèment les semaines; avec à la fois questions et réponses sous forme de cartes ou d'objets à dénombrer ou à définir,
        cela ressemble beaucoup au jeux d'enfants, le sérieux de l'exercice est menée par cynthia animatrice et une autre intervenante faisant interagir avec d'autres retraités du village. L'objectif sous la bonne humeur est de stimuler la mémoire à court terme en bonne compagnie. 
        <br/>
        <br/>
        Le mardi et le jeudi après-midi 1à 5h00 habituellement les personnes âgées encore autonomes viennent discuter avec le plus anciens ou moins autonomes. 
        C'est un rappel à long terme mais aussi un appel via les émotions engrangée de l'histoire du Village et de ces personnes qui stimule celles-ci. <br/>
        C'est important de garder à l'esprit que la vitalité c'est aussi un souvenir, des histoires restées vivantes et du jeu, des jeux.
        <br/>
      </p>

      {/* Bloc image centré */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <img src="/img/1000006688.jpg"  alt="Entrée de l'EHPAD" style={{ maxWidth: '80%', borderRadius: '8px' }} />
      </div>
     
    </div>
  );
}

export default Bienvenues;

