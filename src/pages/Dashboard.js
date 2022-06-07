
import React, {useState, useContext} from 'react'
import { FirebaseContext } from "../firebase/FirebaseContext";
import { collection, addDoc, updateDoc, arrayUnion, doc } from "firebase/firestore"; 
import { AuthContext } from "../session/AuthContext";
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CreateGameModal from '../components/Forms/CreateGameModal';
import JoinGameModal from '../components/Forms/JoinGameModal';


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
        <Box
          sx={{
            bgcolor: 'background.paper',
            height: "100vh",
            pt: 8,
            pb: 6,
            backgroundImage: "url('https://images.unsplash.com/photo-1506748566756-07746caecd61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')",
            backgroundSize: "cover"
           
          }}
        >
          <Container maxWidth="xs">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Time to Go Deeper.
            </Typography>
            <Typography align="center" color="text.secondary" paragraph>
               Help form stronger bonds with your friends. Play in any group setting. Read the rules before you begin, and then have one person kick off the game. 
            </Typography>
            <Paper sx={{ mt: 4 }} elevation={24}>
                <Stack
                sx={{ p: 4 }}
                spacing={2}
                justifyContent="center"
                >
                    
                    <Button  onClick={() => handleOpenCreate()}  variant="contained" color='primary'>Create a Game</Button>
                    <Button onClick={() => handleOpenJoin()}  variant="contained" color='secondary'>Join a Game</Button>
                    <Button component={RouterLink} to={"/question"} variant="outlined" color="info">View Rules</Button>  
                </Stack>
            </Paper>
          </Container>
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
        </Box>
  );
};

export default Dashboard;





