import React, {useState, useContext} from 'react'
import { FirebaseContext } from "../../firebase/FirebaseContext";
import { collection, addDoc } from "firebase/firestore"; 
import Button from "@mui/material/Button"
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {QuestionTypes } from "../../utils/QuestionTypes"
import { AuthContext } from "../../session/AuthContext";
import AddIcon from '@mui/icons-material/Add';

const theme = createTheme();

const AddQuestionForm = ({ history }) => {
    const firebase = useContext(FirebaseContext);
    const { authState } = useContext(AuthContext);

    // const [errors, setErrors] = useState(""); 
    const [type, setType] = useState('');

    const handleTypeChange = (e) => {
      setType(e.target.value);
    };

    const handleSubmit =  async (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        
        try {
            const docRef = await addDoc(collection(firebase.db, "questions"), {
              type: parseInt(data.get("question-type")),
              restricted: data.get("restricted") ? true : false,
              text: data.get("text"),
              asked: 0,
              uid : authState.user.uid
            });
            console.log("Document written with ID: ", docRef.id);
            // history.push("/questions");
        } catch (e) {
            console.error("Error adding document: ", e);
            // setErrors(e)
        }

    }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
            Add a Question
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <FormControl fullWidth>
                <InputLabel id="question-type-label">Type</InputLabel>
                <Select
                    labelId="question-type-label"
                    id="question-type"
                    name="question-type"
                    value={type}
                    label="type"
                    onChange={handleTypeChange}
                >
                    {Object.keys(QuestionTypes).map((key) => {
                      return  <MenuItem key={key} value={key}>{QuestionTypes[key]}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <FormControlLabel
              control={<Checkbox id="restricted" name="restricted" value={true} color="primary" />}
              label="Age Restricted?"
              sx={{ mt: 1 }}
            />
            <TextField
              margin="normal"
              fullWidth
              name="text"
              label="Question Text"
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
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default AddQuestionForm; 







