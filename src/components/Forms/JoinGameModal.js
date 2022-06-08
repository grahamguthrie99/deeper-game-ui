import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';


const style = {
  position: 'absolute',
  top: "0px", 
  height: "100%",
  width: "100%", 
  bgcolor: '#000',
  boxShadow: 24,
  backgroundImage: "url('https://media2.giphy.com/media/KfZHOqVdtzmMSLquhY/giphy.gif?cid=ecf05e47wpc9xtwxjh1ubx9f35rk8dypuji676kkncnds2pb&rid=giphy.gif&ct=s')",
  backgroundSize: "fit",
  backgroundPosition: "center bottom",
  backgroundRepeat: "no-repeat"
};

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });

const JoinGameModal = ({ open, handleClose, handleJoinGame }) => {

    const [qText, setText] = useState("");

    const handleTextChange = (event) => {
        setText(event.target.value);
    };


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
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 4, 
                        mt: "30%", 
                      }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <AddIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" color="text.primary">
                        Join Game
                    </Typography>
                    <Box component="form" onSubmit={handleJoinGame} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            fullWidth
                            name="text"
                            label="Game Code"
                            type="text"
                            id="text"
                            required
                            onChange={handleTextChange}
                            value={qText}
                        />
                        
                        
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained" 
                            color="success"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Join Game
                        </Button>
                    </Box>
                </Box>
                <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                    <Toolbar>
                        <StyledFab color="error" aria-label="start" onClick={handleClose}>
                            <CloseIcon  />
                        </StyledFab>
                    </Toolbar>
                </AppBar>
            </Box>
        </Modal>
    </div>
  );
}

export default JoinGameModal; 