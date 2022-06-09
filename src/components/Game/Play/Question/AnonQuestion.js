import React, {useState, useContext} from 'react'
import Box from '@mui/material/Box';
import { AuthContext } from "../../../../session/AuthContext";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AnonAnswerModal from '../../../Forms/AnonAnswerModal';
import AnswersList from '../../../Lists/AnswersList';
import SkeletonPage from '../../../Loading/SkeletonPage';
import { motion } from "framer-motion"

const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
      x: [200, 0]
    }
  }


const AnonQuestion = ({currQuestion, questionMetadata}) => {
   
    const { authState } = useContext(AuthContext);

    const [openAnswer, setOpenAnswer] = useState(false);
    const [viewAnswers, setViewAnswers] = useState(false);

    const {answers} = questionMetadata; 

    if (answers == null) return <SkeletonPage />

    return ( 
        <Box
                sx={{
                marginTop: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                px:4
                }}
            >
            <CardContent sx={{width: "100%"}}>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    Question:
                </Typography>
                <motion.div key={currQuestion.text} variants={textContainer}
                    initial="hidden"
                    animate="show"  > 
                     <Typography variant="h4" component="div" sx={{mb:2 }} color="text.primary">
                    {currQuestion.text} 
                            
                    </Typography>
                </motion.div>
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