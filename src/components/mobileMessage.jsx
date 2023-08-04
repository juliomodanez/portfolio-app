import React from 'react';
import Typography from '@mui/material/Typography';

const MobileMessage = () => {
  return (
    <div style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Typography variant="h5" style={{ fontFamily: 'Cinzel', fontSize: '2rem', color: 'white', textAlign: 'center'}}>
        Olá, Você está acessando o portfolio por um dispositivo móvel.
      </Typography>
      <Typography style={{padding:'3vh', marginTop:'2vh',  fontFamily: 'Dosis', fontSize: '1.5rem', color: 'white', textAlign: 'justify' }}>
        Contudo, o site ainda está em construção e não tem todo o suporte necessário para dispositivos mobile.
        Por favor, acesse o mesmo link pelo browser de um computador ou notebook, para melhor visualização.
      </Typography>
      <Typography style={{padding:'3vh', marginTop:'2vh',  fontFamily: 'Dosis', fontSize: '1.5rem', color: 'white', textAlign: 'justify' }}>
        Obrigado, Julio Modanez.
      </Typography>
    </div>
  );
};

export default MobileMessage;
