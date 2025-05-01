import React from 'react';
import './Galerie.css'; // Ton fichier de style dédié
import './App.css'; // Ton fichier de style principal


function Galerie() {
    return (
      <div className="galerie-page">
        <h1>Galerie : Photos, Documents, Croquis</h1>

        <section className="galerie-section">
        <h2>Programme et exemples de Jeux</h2>
            <div className="galerie-grid-jeux">
                <a
                href="/img/saisie 29 04 2025.png"
                target="_blank"
                rel="noopener noreferrer"
                title="Cliquez pour agrandir"
                >
                <img
                    src="/img/saisie 29 04 2025.png"
                    alt="Jeu mémoire 1"
                    width="350"
                />
                </a>

                <a
                href="/img/saisie2 29 04 2025.png"
                target="_blank"
                rel="noopener noreferrer"
                title="Cliquez pour agrandir"
                >
                <img
                    src="/img/saisie2 29 04 2025.png"
                    alt="Jeu mémoire 2"
                    width="350"
                />
                </a>

                <a
                href="/img/saisie3 29 04 2025.png"
                target="_blank"
                rel="noopener noreferrer"
                title="Cliquez pour agrandir"
                >
                <img
                    src="/img/saisie3 29 04 2025.png"
                    alt="Jeu mémoire 3"
                    width="350"
                />
                </a>
            </div>
            </section>

            <section className="galerie-section">
        <h2>Documents</h2>
        <div className="galerie-grid">

          <a href="/img/Page-type-document.png"
          target="_blank" rel="Page première de: Connaissance de la personne ">
            📄 Voir Document 1
          </a>
         
          <a href="/img/document2.pdf" target="_blank" rel="Dossier de demande d'Admission">
            📄 Voir Document 2
          </a>

          <a href="/img/document3.pdf" target="_blank" rel="Tarifs">
            📄 Voir Document 3
          </a>

          <a href="/img/document4.pdf" target="_blank" rel="Connaissance de la personne dossier vierge">
            📄 Voir Document 4
          </a>

          {/* Ajoute ici tous tes documents */}
        </div>
      </section>

      <section className="galerie-section">
        <h2>Croquis</h2>
        <h2>Petit croquis pris au vol lors de l'après-midi du 29 04 2025 de 15h00 à 17h00<br/>
            Le mardi et heudi après-midi sont des jours dédiés aux jeux de mémoire et en même temps de rencontre entre les anciens de la résidence et ceux vivants chez eux.  </h2>
        <div className="croquis-grand">
            <figure>
            <img src="/img/croquis-nettoyer.png" alt="Croquis 1" />
            <figcaption>Croquis 1</figcaption>
            </figure>
         
          
        </div>
        </section>   

        <section className="galerie-section">
            <h2>📦 Télécharger le dossier complet</h2>
            <a href="/docs/Dossier_Projet_EHPAD.zip" download className="download-dossier">
                📁 Télécharger tout le contenu (.zip)
            </a>
        </section>
    </div>
  );
}

export default Galerie;
