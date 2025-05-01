import React, { useState } from 'react';

const souvenirs = [
  { mot: "Voyage", question: "Pouvez-vous raconter votre premier grand voyage ?" },
  { mot: "École", question: "Quel souvenir gardez-vous de votre école primaire ?" },
  { mot: "Fête", question: "Racontez un moment de fête qui vous a marqué." },
  { mot: "Travail", question: "Quel était votre premier métier ? Que faisiez-vous exactement ?" },
  { mot: "Famille", question: "Un souvenir marquant avec vos enfants ou petits-enfants ?" }
];

function JeuMemoire() {
  const [index, setIndex] = useState(0);

  const suivant = () => {
    setIndex((index + 1) % souvenirs.length);
  };

  return (
    <div className="jeu-memoire-container">
      <div className="souvenir-card">
        <h3>{souvenirs[index].mot}</h3>
        <p>{souvenirs[index].question}</p>
      </div>
      <button className="suivant-btn" onClick={suivant}>
        Souvenir suivant
      </button>
    </div>
  );
}

export default JeuMemoire;
