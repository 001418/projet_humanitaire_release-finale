import React, { useState } from 'react';

function FooterLinks() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('https://ehpad-sainghin.fr')
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset après 2 sec
      })
      .catch(err => console.error('Erreur lors de la copie:', err));
  };

  return (
    <footer style={{ marginTop: "2rem", textAlign: "center" }}>
      <p>© 2025 - Tous droits réservés - Mémoire_En_Souvenir.com</p>
      <p>
        <a href="https://www.sainghin-en-weppes.fr" target="_blank" rel="noopener noreferrer">
          Site de la commune de Sainghin-en-Weppes
        </a>
        {" | "}
        <span style={{ fontStyle: "italic" }}>
          Site Résidence de la Vigne :
        </span>
        {" "}
        <button onClick={handleCopy} style={{ marginLeft: "0.5rem", padding: "0.3rem 0.6rem", fontSize: "0.9rem", cursor: "pointer" }}>
          Copier l'adresse
        </button>
      </p>
      {copied && <p style={{ color: "green", fontSize: "0.8rem" }}>Adresse copiée dans le presse-papier !</p>}
    </footer>
  );
}

export default FooterLinks;
