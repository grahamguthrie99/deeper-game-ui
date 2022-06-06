
import React, {useState, useContext} from 'react'
import { FirebaseContext } from "../firebase/FirebaseContext";
import { collection, addDoc, updateDoc, arrayUnion, doc } from "firebase/firestore"; 
import { AuthContext } from "../session/AuthContext";
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CreateGameModal from '../components/Forms/CreateGameModal';
import JoinGameModal from '../components/Forms/JoinGameModal';

const theme = createTheme();

const Dashboard = ({history}) => {

    const firebase = useContext(FirebaseContext);
    const { authState } = useContext(AuthContext);
    const [openCreate, setOpenCreate] = useState(false);
    const [openJoin, setOpenJoin] = useState(false);


    const handleCreateGame =  async (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget);
        
        try {
            const docRef = await addDoc(collection(firebase.db, "games"), {
              restricted: data.get("restricted") ? true : false,
              punishments: data.get("punishments") ? true : false,
              players : [{ 
                  uid: authState.user.uid,
                  displayName: authState.user.displayName,
                  photoURL : authState.user.photoURL
                 }],
              c_uid : authState.user.uid
            });
            console.log("Document written with ID: ", docRef.id);
            history.push(`/game/${docRef.id}`);
        } catch (e) {
            console.error("Error adding document: ", e);
            // setErrors(e)
        }

    }

    const handleJoinGame =  async (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        const gameId =  data.get("text")

        try {
            await updateDoc(doc(firebase.db, "games", gameId), {
                players : arrayUnion({ 
                    uid: authState.user.uid,
                    displayName: authState.user.displayName,
                    photoURL : authState.user.photoURL
                })
            });
            console.log("Document update with ID: ", gameId);
            history.push(`/game/${gameId}`);
        } catch (e) {
            console.error("Error adding document: ", e);
        //   setErrors(e)
        }

    }

    const handleOpenCreate = () => {
        setOpenCreate(true)
    };

    const handleCloseCreate = () => {
        setOpenCreate(false)
    };

    const handleOpenJoin = () => {
        setOpenJoin(true)
    };

    const handleCloseJoin = () => {
        setOpenJoin(false)
    };

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
                
                <Button  onClick={() => handleOpenCreate()}  variant="contained" color='primary'>Create a Game</Button>
                <Button onClick={() => handleOpenJoin()}  variant="contained" color='secondary'>Join a Game</Button>
                <Button component={RouterLink} to={"/question"} disabled variant="outlined" color="info">View Rules</Button>  
            </Stack>
          </Container>
        </Box>
        <CreateGameModal
                open={openCreate}
                handleClose={handleCloseCreate}
                handleCreateGame={handleCreateGame}
            />
        <JoinGameModal
                open={openJoin}
                handleClose={handleCloseJoin}
                handleJoinGame={handleJoinGame}
            />
    </ThemeProvider>
  );
};

export default Dashboard;



