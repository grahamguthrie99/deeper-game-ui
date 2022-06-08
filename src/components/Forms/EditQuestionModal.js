import React, {useState, useContext} from 'react'
import { FirebaseContext } from "../../firebase/FirebaseContext";
import { doc, setDoc, deleteDoc } from "firebase/firestore"; 
import { AuthContext } from "../../session/AuthContext";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';


const style = {
    position: 'absolute',
    top: "0px", 
    height: "100%",
    width: "100%", 
    bgcolor: 'background.paper',
    boxShadow: 24,
  };

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });

const EditQuestionModal = ({ open, handleClose, question}) => {

    
    const {id, type, text, restricted} = question

    const firebase = useContext(FirebaseContext);
    const { authState } = useContext(AuthContext);

    const [qType, setType] = useState(type);
    const [qRestricted, setRestricted] = useState(Boolean(restricted));
    const [qText, setText] = useState(text);
    // const [errors, setErrors] = useState(""); 

    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    const handleCheckChange = (event) => {
        setRestricted(event.target.checked);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit =  async (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        try {
            await setDoc(doc(firebase.db, "questions", id), {
                type: parseInt(data.get("question-type")),
                restricted: data.get("restricted") ? true : false,
                text: data.get("text"),
                asked: 0,
                uid : authState.user.uid
            });
            handleClose()
        } catch (e) {
            console.error("Error adding document: ", e);
        //   setErrors(e)
        }

    }

    const handleDelete =  async (e) => {
        e.preventDefault()
        try {
            await deleteDoc(doc(firebase.db, "questions", id))
            handleClose()
        } catch (e) {
            console.error("Error adding document: ", e);
        //   setErrors(e)
        }

    }

    return (
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
                        p: 2, 
                        mt: "35%", 
                      }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <EditIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" color="text.primary">
                        Edit Question
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <FormControl fullWidth>
                        <InputLabel id="question-type-label">Type</InputLabel>
                        <Select
                            labelId="question-type-label"
                            id="question-type"
                            name="question-type"
                            value={qType}
                            label="type"
                            onChange={handleTypeChange}
                        >
                            <MenuItem value={1}>Would You Rather</MenuItem>
                            <MenuItem value={2}>Debate</MenuItem>
                            <MenuItem value={3}>Top 5...</MenuItem>
                            <MenuItem value={4}>Anonomous Answer</MenuItem>
                            <MenuItem value={5}>Mini Game</MenuItem>
                            <MenuItem value={6}>Hypothetical</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox id="restricted" 
                            name="restricted" 
                            value={qRestricted}  
                            checked={qRestricted}
                            onChange={handleCheckChange} 
                            inputProps={{ 'aria-label': 'controlled' }}
                            color="primary" />}
                        label="Age Restricted?"
                        
                        sx={{ mt: 1, color:"text.primary" }}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="text"
                        label="Question Text"
                        type="text"
                        id="text"
                        onChange={handleTextChange}
                        value={qText}
                        required
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Save
                    </Button>
                    <Button
                        onClick={handleClose}
                        fullWidth
                        variant="outlined"
                        color="error"
                        sx={{ mb: 2 }}
                    >
                        Close
                    </Button>
                    </Box>
                </Box>
                <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                    <Toolbar>
                        <StyledFab color="error" aria-label="delete" onClick={handleDelete}>
                            <DeleteIcon  />
                        </StyledFab>
                    </Toolbar>
                </AppBar>
            </Box>
        </Modal>
  );
}

export default EditQuestionModal; 