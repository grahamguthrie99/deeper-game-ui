import React from 'react'
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {QuestionTypes ,QuestionIcons} from "../../../../utils/QuestionTypes"
import Chip from '@mui/material/Chip';


const QuestionCard = ({currQuestion}) => {
   
    return ( 
        <Box
                sx={{
                marginTop: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    Question
                </Typography>
                <Typography variant="h4" component="div" sx={{mb:2}}>
                    {currQuestion.text}
                </Typography>
                <Chip icon={QuestionIcons[currQuestion.type]} variant="outlined" label={QuestionTypes[currQuestion.type]} />
                    
            </CardContent>
      </Box>

    )
     
};

export default QuestionCard;