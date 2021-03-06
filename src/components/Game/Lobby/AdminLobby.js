
import React, {useState, useEffect, useContext} from 'react'
import { FirebaseContext } from "../../../firebase/FirebaseContext";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { updateDoc, doc } from "firebase/firestore"; 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlayerList from '../../Lists/PlayerList';
import CircularProgress from '@mui/material/CircularProgress';


const style = {
    position: 'relative',
    top: "0px", 
    height: "100%",
    width: "100%", 
    bgcolor: 'background.paper',
    display: "flex", 
    alignItems: "start"
};

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});


const AdminLobby = ({game, gameId, setStart, questions}) => {

    const firebase = useContext(FirebaseContext);

    const [enableStart, setEnableStart] = useState(false)
    const [players, setPlayers] = useState(game.players)

    useEffect(  () => {
        setPlayers(game.players)
    }, [game])


    useEffect(  () => {
        setEnableStart(game.players.length > 1)
    }, [game])


    const copyToClipboard = () => {
        navigator.clipboard.writeText(gameId)
    };

 
    const handleStartGame = async (e) => {
        e.preventDefault()
        var gameQuestions = questions
        if(!game.restricted)
            gameQuestions = gameQuestions.filter(question => question.restricted !== true)
        if(!game.punishments)
        gameQuestions = gameQuestions.filter(question => question.type !== 7)
        gameQuestions = shuffle(gameQuestions)
        try {
            await updateDoc(doc(firebase.db, "games", gameId), {
                players : players,
                questions: gameQuestions, 
                started: true, 
                gameEnded: false, 
                currPlayer: players[0], 
                turnIndex: 0, 
                currQuestion: questions[0], 
                questionIndex: 0,
            });
            setStart(true)
        } catch (e) {
            console.error("Error adding document: ", e);
        //   setErrors(e)
        }
    };

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        while (currentIndex !== 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      
    }

    
    return ( 

        <Box sx={style}>
            <Container maxWidth="xs" sx={{flexGrow: 1}}>
            <Box
                sx={{
                marginTop: 2,
                p:2, 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                     Share the code via text with your group in order for other players to join the game. 
                </Typography>
                <TextField
                    
                    fullWidth
                    id="filled-read-only-input"
                    label="Game Code"
                    defaultValue={gameId}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="filled"
                    />
                <Button
                    onClick={copyToClipboard}
                    fullWidth
                    variant="contained" 
                    sx={{ mt: 0, mb: 2 }}
                >
                    Copy To Share
                </Button>
            </Box>
            <Box
                sx={{
                marginTop: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                {enableStart ? 
                    <>
                        <Typography sx={{mb: 0}} variant="h6" align="center" color="text.secondary" paragraph>
                            Set Player Order
                        </Typography>
                        <PlayerList 
                            players={players}
                            setPlayers={setPlayers}
                        /> 
                    </>:
                    <>
                        <Typography variant="h6" align="center" color="text.primary" paragraph>
                            Waiting for Players to Join.
                        </Typography>
                        <CircularProgress />
                    </>
                }
            </Box>
            
        
            
                
            
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <StyledFab color="success" aria-label="start" onClick={handleStartGame} disabled={!enableStart}>
                        <PlayArrowIcon  />
                    </StyledFab>
                </Toolbar>
            </AppBar>
            </Container>
     </Box>
        
          
            
        
    )
      
      
};

export default AdminLobby;




// {/* <ul>
//                
//                     <li key={player.uid} >
//                         {player.uid}
//                     </li>
//                 ))}
//             </ul> */}




