import React, {useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

const style = {
  position: 'absolute',
  top: "0px", 
  height: "100%",
  width: "100%", 
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });

const CreateGameModal = ({ open, handleClose, handleCreateGame }) => {

    const [qRestricted, setRestricted] = useState(true);

    const handleCheckChange = (event) => {
        setRestricted(event.target.checked);
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
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <AddIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create Game
                    </Typography>
                    <Box component="form" onSubmit={handleCreateGame} noValidate sx={{ mt: 1 }}>
                        <FormControlLabel
                            control={<Checkbox id="restricted" 
                                name="restricted" 
                                value={qRestricted}  
                                checked={qRestricted}
                                onChange={handleCheckChange} 
                                inputProps={{ 'aria-label': 'controlled' }}
                                color="primary" />}
                            label="Use 18+ Questions?"
                            sx={{ mt: 1 }}
                        />
                        
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained" 
                            color="success"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Start Game
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

export default CreateGameModal; 