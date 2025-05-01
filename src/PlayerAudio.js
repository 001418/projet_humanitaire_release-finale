import React from 'react';
import './PlayerAudio.css'; // si séparé

function PlayerAudio() {
  return (
    <div className="player-audio-container">
      <h3>🎧 Témoignage final – Mémoire sonore</h3>
      <p>Compte rendu sonore de l'accompagnement à la Résidence des Vignes</p>

      <audio controls className="player-audio-player">
        <source src="/Audio/Vignes-standard-1.mp3" type="audio/mp3" />
        Votre navigateur ne prend pas en charge la lecture audio.
      </audio>

      <p style={{ marginTop: "1rem" }}>
        <a href="/Audio/Enregistrement-long-2.mp3" target="_blank" rel="noreferrer">
          📁 Télécharger ou écouter la version longue
        </a>
      </p>
    </div>
  );
}

export default PlayerAudio;
