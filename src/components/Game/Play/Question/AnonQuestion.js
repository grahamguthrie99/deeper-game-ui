import React, {useState, useContext} from 'react'
import Box from '@mui/material/Box';
import { AuthContext } from "../../../../session/AuthContext";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AnonAnswerModal from '../../../Forms/AnonAnswerModal';
import AnswersList from '../../../Lists/AnswersList';


const AnonQuestion = ({currQuestion, questionMetadata}) => {
   
    const { authState } = useContext(AuthContext);

    const [openAnswer, setOpenAnswer] = useState(false);
    const [viewAnswers, setViewAnswers] = useState(false);

    const {answers} = questionMetadata; 

    return ( 
        <Box
                sx={{
                marginTop: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p:6
                }}
            >
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    Question
                </Typography>
                <Typography variant="h4" component="div" sx={{mb:2}} color="text.primary">
                    {currQuestion.text}
                </Typography>
                <Stack
                sx={{ pt: 4 }} 
                spacing={2}
                justifyContent="center"
                >   
                    <Button  onClick={() => setOpenAnswer(true)}  disabled={answers.filter(answer => answer.uid === authState.user.uid).length > 0} variant="contained" color='primary'>Answer Question</Button>
                    <Button  onClick={() => setViewAnswers(true)}  disabled={answers.filter(answer => answer.uid === authState.user.uid).length === 0} variant="contained" color='secondary'>View Answers</Button>
                </Stack>
                    
            </CardContent>
            <AnonAnswerModal 
                open={openAnswer}
                setOpen={setOpenAnswer}
                questionMetadata={questionMetadata} />
            <AnswersList 
                open={viewAnswers}
                setOpen={setViewAnswers}
                questionMetadata={questionMetadata} /> 
        </Box>

    )
     
};

export default AnonQuestion;