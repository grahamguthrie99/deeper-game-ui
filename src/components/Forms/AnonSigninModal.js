import React from 'react'
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button"
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';

const style = {
  position: 'absolute',
  top: "0px", 
  height: "100%",
  width: "100%", 
  bgcolor: 'background.paper',

};

const AnonSigninModal = ({ history, open, setOpen, actions }) => {

    const handleSubmit =  async (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        try {
            actions.guestLogin(data.get("text"))
            setOpen(false)
            history.push("/home");
        } catch (e) {
            console.error("Error adding document: ", e);
            // setErrors(e)
        }

    }

    const handleClose = () => {
        setOpen(false)
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
              <VpnKeyRoundedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Guest Sign In
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                name="text"
                label="Display Name"
                type="text"
                id="text"
                required
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Play as Guest
              </Button>
              <Button
                onClick={() => handleClose()}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Close
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default AnonSigninModal; 







