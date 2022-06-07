import React, { useState, useContext } from "react";
import { AuthContext } from "../session/AuthContext";
import AuthButton from "../components/Header/AuthButton";
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import SkeletonPage from "../components/Loading/SkeletonPage";
import AnonSigninModal from "../components/Forms/AnonSigninModal"
import Button from '@mui/material/Button';



const Landing = ({ history }) => {
  const { authState, actions } = useContext(AuthContext);
  const { loading } = authState;

  const [open, setOpen] = useState(false);


  async function onSubmit() {
    try {
      await actions.login();
      history.push("/home");
    } catch (e) {
      console.log(e);
      const errors = {};
      errors.onSave = e.message;
    }
  }

  return loading ? (
    <SkeletonPage />
  ) : (
        <Container  maxWidth="xs"
            sx={{
                backgroundImage: "url('https://i.giphy.com/media/3oa9GRWW8VrQBImcWK/giphy.webp')",
                backgroundSize: "cover"
                }}
        >
        <CssBaseline /> 
        <Box
            sx={{
            height: "100vh",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "center", 
            alignItems: 'center',
            }}
        >
            <Paper sx={{ p: 2 }} elevation={24}>
                <Stack
                sx={{ pb: 2 }}
                spacing={2}
                justifyContent="center"
                >
                    <Typography
                        variant="h5"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        >
                        Deeper.  
                    </Typography>
                    <AuthButton onClick={onSubmit}>
                        Sign In With Google
                    </AuthButton>
                    <Button onClick={() => setOpen(true)} variant="outlined" >
                        Play as a Guest
                    </Button>  
                </Stack>
            </Paper>
        </Box>
        <AnonSigninModal 
                    open={open}
                    setOpen={setOpen}
                    history={history}
                    actions={actions}
                /> 
        </Container> 
  );
};

export default Landing;






