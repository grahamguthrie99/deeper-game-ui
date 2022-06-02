
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Dashboard = (props) => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
              Time to get Deeper.  
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
               Deeper is the game designed to help you form stronger bonds with any of your friends. 
            </Typography>
            <Typography variant="p" align="center" color="text.secondary" paragraph>
               Read the rules before you begin. Deeper can be played in any group setting. Have one person from your group kick the game off and follow the rabbit hole from there.  
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              spacing={2}
              justifyContent="center"
            >
                
                <Button component={RouterLink} to={"/question"} disabled variant="contained" color='primary'>Start a Game</Button>
                <Button component={RouterLink} to={"/question"} disabled variant="contained" color='secondary'>Join a Game</Button>
                <Button component={RouterLink} to={"/question"} disabled variant="outlined" color="info">View Rules</Button>  
            </Stack>
          </Container>
        </Box>
    </ThemeProvider>
  );
};

export default Dashboard;



