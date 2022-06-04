import React, {useContext } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { FirebaseContext } from "../../firebase/FirebaseContext";
import { updateDoc, doc } from "firebase/firestore"; 
import RemovePlayerList from '../Lists/RemovePlayerList';

const style = {
  position: 'absolute',
  top: "0px", 
  height: "100%",
  width: "100%", 
  bgcolor: 'background.paper',

};


const AdminModal = ({ open, setOpen, game}) => {

    const firebase = useContext(FirebaseContext);


    const handleClose = () => {
        setOpen(false)
    };

    const handleGameEnded = async () => {
        try {
            await updateDoc(doc(firebase.db, "games", game.id), {
                gameEnded : true
              });
          } catch (e) {
              console.error("Error adding document: ", e);
          //   setErrors(e)
          }
        setOpen(false)
    };

    const handleRemovePlayer = async (i) => {
        var players = game.players
        players.splice(i, 1)
        var newTurnIndex = players.length >= game.turnIndex ? 0 : game.turnIndex+1
        var newCurrPlayer = players[newTurnIndex]
        
        if(players.length > 1){
            try {
                await updateDoc(doc(firebase.db, "games", game.id), {
                    players: players, 
                    currPlayer : newCurrPlayer, 
                    turnIndex: newTurnIndex, 
                });
            } catch (e) {
                console.error("Error adding document: ", e);
            //   setErrors(e)
            }
        }
        else{
            handleGameEnded()
        }
    }

    return (
    <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box
                    sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Admin
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <Typography sx={{ mt: 3, mb: 1 }} variant="h5">
                            Remove Players
                        </Typography>
                        <RemovePlayerList
                            game={game}
                            handleRemovePlayer={handleRemovePlayer}
                        />
                         <Button
                            fullWidth
                            variant="contained" 
                            sx={{ mt: 4, mb: 1 }}
                            onClick={() => handleGameEnded()}
                        >
                            End Game
                        </Button>
                        <Button
                            fullWidth
                            variant="outlined" 
                            color="error"
                            sx={{ mt: 1, mb: 2 }}
                            onClick={() => handleClose()}
                        >
                            Close
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    </div>
  );
}

export default AdminModal; 