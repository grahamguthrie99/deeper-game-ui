import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const PlayerLobby = () => {
  return (
    <Box
    sx={{
      bgcolor: 'background.paper',
      pt: 8,
      pb: 6,
    }}
  >
    <Container maxWidth="sm">
            <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Game Lobby
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Waiting for other players to join. You will be notified when the game begins. 
            </Typography>
        <Box
            sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
            <CircularProgress />
        </Box>
        <Box
            sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
            <iframe title="Lobby" src="https://giphy.com/embed/7z60uukpYWFLG" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
        </Box>
    </Container>
  </Box>
    
  );
}

export default PlayerLobby; 

