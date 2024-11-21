import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Button, Box } from '@mui/material';
import CharacterCard from './CharacterCard';
import CharacterModal from './CharacterModal';

const CharacterGrid = () => {
  const [personajes, setPersonajes] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);

  useEffect(() => {
    obtenerPersonajes(pagina);
  }, [pagina]);

  const obtenerPersonajes = async (pagina) => {
    const respuesta = await axios.get(`https://rickandmortyapi.com/api/character?page=${pagina}`);
    setPersonajes(respuesta.data.results);
  };

  return (
    <div>
      <Grid container spacing={3}>
        {personajes.map((personaje) => (
          <Grid item key={personaje.id} xs={12} sm={6} md={4} lg={3}>
            <CharacterCard personaje={personaje} onClick={() => setPersonajeSeleccionado(personaje)} />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" marginTop={2}>
        <Button
          onClick={() => setPagina(pagina - 1)}
          disabled={pagina === 1}
          className="boton-negro-verde"
        >
          Página Anterior
        </Button>
        <Button
          onClick={() => setPagina(pagina + 1)}
          className="boton-negro-verde"
          style={{ marginLeft: '10px' }}
        >
          Siguiente Página
        </Button>
      </Box>
      <CharacterModal personaje={personajeSeleccionado} onClose={() => setPersonajeSeleccionado(null)} />
    </div>
  );
};

export default CharacterGrid;
