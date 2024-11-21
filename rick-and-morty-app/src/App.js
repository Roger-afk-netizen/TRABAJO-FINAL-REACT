import React, { useState } from 'react';
import { Container } from '@mui/material';
import CharacterGrid from './components/CharacterGrid';
import WelcomePage from './components/WelcomePage';
import './styles.css';

function App() {
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  return (
    <Container className="contenedor">
      {started ? (
        <>
          <h1>Personajes de Rick y Morty</h1>
          <CharacterGrid />
          <img src="/bailandin.gif" alt="Personaje Bailando" className="personaje-bailando" />
        </>
      ) : (
        <WelcomePage onStart={handleStart} />
      )}
    </Container>
  );
}

export default App;
