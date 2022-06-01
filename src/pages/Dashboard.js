
import React from 'react';
import { Link } from "react-router-dom";
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
              Game Under Development 
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Add a question to build the pool of potential game questions. Or View the list of existing questions. 
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
                <Link to="/addQuestion">
                    <Button variant="contained">Add a Question</Button>
                </Link>
                {/* <Link to="/questions"> */}
                    <Button disabled variant="outlined">View Question List</Button>
                {/* </Link> */}
              
              
            </Stack>
          </Container>
        </Box>
    </ThemeProvider>
  );
};

export default Dashboard;



