from pathlib import Path

# Contenu du README.txt mis à jour après reset
readme_content = """\
==============================
PROJET "Mémoire en Souvenir"
==============================

Auteur : Benoît
Date : Avril 2025
Lieu : Résidence des Vignes, Sainghin-en-Weppes

Objectif :
----------
Site web de restitution d’un projet mémoire mené avec les résidents d’un EHPAD.
Contenu : agenda, photos, croquis, documents, témoignage audio.

Structure du projet :
---------------------
- /public : fichiers audio, images, documents statiques
- /src    : code source React, composants et styles
  - App.js : point d'entrée de l'application
  - Galerie.js, Vlog.js, Memoire.js : pages principales
  - Agenda.js, PlayerAudio.js : composants spécifiques
- README.md : version complète
- readme.txt : ce fichier texte
- package.json : configuration Node/NPM

Installation locale :
---------------------
1. Ouvrir un terminal
2. Se placer dans le dossier du projet
3. Lancer les commandes :

   npm install
   npm install react
   npm install react-scripts --save
   npm start

4. Ouvrir dans un navigateur : http://localhost:3000

Note : Si "npm start" ne fonctionne pas, vérifier que le fichier package.json contient bien :

  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }

Production (build) :
---------------------
Pour générer une version exportable du site (ex. pour serveur statique ou hébergement GitHub Pages) :

   npm run build

Cela crée un dossier `/build` contenant les fichiers HTML, JS, CSS minifiés.

Fonctionnalités :
-----------------
- Navigation entre pages
- Audio intégré (témoignage final)
- Téléchargement d'un dossier compressé (.zip)
- Documents cliquables
- Croquis avec mise en valeur visuelle
- Accessibilité simple pour présentation

Remerciements :
---------------
Ce projet a été réalisé avec le soutien des équipes de la Résidence des Vignes et des résidents ayant participé aux ateliers mémoire et narration.

Notes :
-------
Ce dépôt est expurgé de tout dossier build, docker ou dépendance inutile.
Il est prêt à être remis dans le cadre d’une soutenance ou d’une évaluation.

==============================
"""

# Enregistrement du fichier
output_path = Path("/mnt/data/readme_projet_epadh.txt")
output_path.write_text(readme_content, encoding="utf-8")
output_path


════════════════════════════════════════════════
🔗 LIENS UTILES

📁 Dépôt GitHub :
https://github.com/khun1964/Projet_Humanitaire_Release_Finale

📥 Archive ZIP (si disponible ailleurs) :
(lien à compléter)
