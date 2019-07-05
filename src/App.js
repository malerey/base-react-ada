import React from 'react';
import './App.css';
import Persona from './persona'



function App() {
  return(
    <div className="App">
      <Persona
      nombre="Hedy Lamarr"
      bio="Creadora de la primera computadora"
      />
      <Persona
      nombre="Grace Hopper"
      bio="Creadora del primer compilador"
      />
    </div>
  );
}

export default App;
