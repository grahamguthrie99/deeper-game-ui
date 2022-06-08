import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const style = {
    p: 2,
    bgcolor: '#000',
    height: "95vh", 
};

const PlayerLobby = () => {
  return (
    <Box sx={style}>
    <Container maxWidth="sm">
            <Typography
                    sx={{mt: 3}}
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
            marginTop: 4,
            flexGrow: 1, 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: "500px"
           
            }}
           
        >
            <div style={{ 
                width:"100%", 
                height:"100%", 
                backgroundImage: "url('https://i.giphy.com/media/g1nOYYV0AHY3K/giphy.webp')",
            backgroundSize: "cover", 
            backgroundPosition: "center",}}></div>
     
        </Box>
    </Container>
  </Box>
    
  );
}

export default PlayerLobby; 

