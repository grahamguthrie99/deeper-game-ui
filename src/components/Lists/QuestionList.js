import React, {useState, useEffect, useContext} from 'react'
import { FirebaseContext } from "../../firebase/FirebaseContext";
import { collection, query, onSnapshot } from "firebase/firestore"; 
import {QuestionTypes ,QuestionIcons} from "../../utils/QuestionTypes"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit';
import EditQuestionModal from '../Forms/EditQuestionModal';


const QuestionList = () => {
    const firebase = useContext(FirebaseContext);
    const [questions, setQuestions] = useState([]); 
    const [question, setQuestion] = useState(null); 
    const [open, setOpen] = React.useState(false);
   

    useEffect(  () => {
        if(firebase.db){
            function fetchQuestionList(){
                const q = query(collection(firebase.db, "questions"))
                onSnapshot( q , (querySnapshot) => {
                    setQuestions(querySnapshot.docs.map(doc => ({
                        ...doc.data(),
                        id: doc.id,
                        
                      })
                    ))
                });
            }
            fetchQuestionList()
        }
    }, [firebase.db])

    const handleEdit = (question) => {
        setQuestion(question)
        setOpen(true); 
    }
    
    const handleClose = () => {
        setOpen(false)
        setQuestion(null)
    };

    return (
        <>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        
                {questions.map(question => (
                    
                    <ListItem alignItems="center" 
                        key={question.id}
                        secondaryAction={
                            <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(question)}>
                                <EditIcon />
                            </IconButton>
                    }
                    
                    >
                    <ListItemAvatar>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            {QuestionIcons[question.type]}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={QuestionTypes[question.type]}
                        secondary={
                        <React.Fragment>
                            {question.text}
                        </React.Fragment>
                        }
                    />
                    </ListItem>

                ))}

            </List>
           {question && <EditQuestionModal 
                open={open}
                handleClose={handleClose}
                question={question} 
            />}
        </>
    )

}

export default QuestionList; 

