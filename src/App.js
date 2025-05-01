import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Accueil from './Acceuil';
import Bienvenues from './Bienvenues';
import Vlog from './Vlog';
import Memoire from './Memoire';
import FooterLinks from './FooterLinks'; // importe ton Footer propre
import Questionnaire from './Questionnaire';
import './App.css'; // inclure ton CSS
import Galerie from './Galerie';



// ...
function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
        <Link to="/">Village</Link>
          <Link to="/ephad">EHPAD</Link>
          <Link to="/questionnaire">Questionnaire</Link>
          <Link to="/memoire">Memoire</Link>
          <Link to="/vlog">Vlog</Link>
          <Link to="/galerie">Galerie</Link>
        </nav>

        <div className="content-container">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/ephad" element={<Bienvenues />} />
            <Route path="/vlog" element={<Vlog />} />
            <Route path="/memoire" element={<Memoire />} />
            <Route path="/questionnaire" element={<Questionnaire/>} />
            <Route path="/galerie" element={<Galerie />} />
          </Routes>
        </div>

        <FooterLinks /> {/* Ton footer avec bouton copier */}
      </div>
    </Router>
  );
}

export default App;

