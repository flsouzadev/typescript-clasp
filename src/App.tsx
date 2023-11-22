import React from 'react';
import { SiTypescript } from "react-icons/si";
import { SiGoogleappsscript } from 'react-icons/si';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
    <header className="App-header">
      <div className="Icon-container">
        <SiTypescript size={90} color="#61dafb" className="icon" />
        
        <SiGoogleappsscript size={100} color="#3498db" className="icon" />
      </div>
      <h2>Typescript && Clasp</h2>
      {/* Seu conteúdo adicional aqui */}
    </header>
  </div>
  );
}

export default App;