import React from "react";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'. '}
      By Graham Guthrie. Made with {' ❤️ '}  
    </Typography>
  );
}

const Rules = () => {

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
      <Container disableGutters maxWidth="xs" component="main" sx={{ pt: 8, pb: 6, px: 4 }}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        The Rules
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p" sx={{ pb: 2 }}>
        Deeper is meant to be played as a group. A group can be a collection of 2 or more people. In order to get the full game experience, everyone must join the game from their individual phone. 
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p" sx={{ pb: 2 }}>
        The person who starts the game is the game master and the game begins when they read the first question out loud. After the group answers, the game continues by passing to the next player. 
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p" sx={{ pb: 2 }}>
        If someone leaves the game, notify the game master so that they may remove the appropriate player from the game. 
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p" sx={{ pb: 2 }}>
        When a secret word question comes up, all players in the group with the exception of one will have the secret word. Each player will say a word that relates to the secret word. At the end of the round, players will vote to decide who did not have the word. 
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p" sx={{ pb: 2 }}>
        All other questions are up for interpretation. You may customize the game play to suit the preferences of the group. Only one person may answer, the whole group can answer, you decide! 
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p" sx={{ pb: 2 }}>
        There are no winners. There are no losers. There are only answers. Answers that will help you get to know the other players deeper. 
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p" sx={{ pb: 2 }}>
        Enjoy. 
      </Typography>
    </Container>
        <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  ) 
};

export default Rules;