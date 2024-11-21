import React from 'react';
import { Button, Box } from '@mui/material';
import '../styles.css';

const WelcomePage = ({ onStart }) => {
  return (
    <Box className="pagina-bienvenida">
      <h1>Trabajo Final Roger Tamayo</h1>
      <Button onClick={onStart} className="boton-negro-verde">
        Ir al Trabajo
      </Button>
    </Box>
  );
};

export default WelcomePage;
