import React, { useContext } from "react";
import { AuthContext } from "../session/AuthContext";
import AuthButton from "../components/Header/AuthButton";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Landing = ({ history }) => {
  const { authState, actions } = useContext(AuthContext);
  const { loading } = authState;


  async function onSubmit() {
    try {
      await actions.login();
      history.push("/dashboard");
    } catch (e) {
      console.log(e);
      const errors = {};
      errors.onSave = e.message;
    }
  }

  return loading ? (
    <div>Loading...</div>
  ) : (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          In Development... Help Contribute 
        </Typography>
        <Box sx={{ mt: 1 }}>
            <AuthButton onClick={onSubmit}>
                Sign In With Google
            </AuthButton>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
    
  );
};

export default Landing;






