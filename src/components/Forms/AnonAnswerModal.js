import React, {useContext} from 'react'
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button"
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { updateDoc, arrayUnion, doc } from "firebase/firestore"; 
import { FirebaseContext } from "../../firebase/FirebaseContext";
import { AuthContext } from "../../session/AuthContext";

const style = {
    position: 'absolute',
    top: "0px", 
    height: "100%",
    width: "100%", 
    bgcolor: 'background.paper',
    boxShadow: 24,
    backgroundImage: "url('https://media3.giphy.com/media/zxAoODXqWnEU3lUlnD/giphy.gif?cid=ecf05e47anq5img1sla5acp3mh3odvjr9zyu86eb87ij7klj&rid=giphy.gif&ct=s')",
    backgroundSize: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
  };

const AnonAnswerModal = ({ open, setOpen, questionMetadata }) => {

    const firebase = useContext(FirebaseContext);
    const { authState } = useContext(AuthContext);

    const handleSubmit =  async (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        try {
            await updateDoc(doc(firebase.db, "answers", questionMetadata.g_id + questionMetadata.q_id ), {
                answers : arrayUnion({ 
                    uid: authState.user.uid,
                    text: data.get("text"),
                })
            });
            setOpen(false)
        } catch (e) {
            console.error("Error adding document: ", e);
        //   setErrors(e)
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
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 4, 
                mt: "10%", 
              }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <PersonOutlineIcon />
            </Avatar>
            <Typography component="h1" variant="h5" color="text.primary">
              Answer Anonymously
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                name="text"
                label="Answer"
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
                Submit Answer
              </Button>
              <Button
                onClick={() => handleClose()}
                fullWidth
                color="error"
                variant="outlined"
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

export default AnonAnswerModal; 







