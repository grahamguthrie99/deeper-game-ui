import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {QuestionGifs} from "../../../../utils/QuestionTypes"


const QuestionCard = ({currQuestion}) => {
   
    return ( 
        <Box
        sx={{
            marginTop: 1,
            display: 'flex',
            flexGrow: 1, 
            flexDirection: 'column',
            alignItems: 'start',
            }}
            >
            <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1, 
                    width: '100%',
                    alignItems: 'start',
                    }}>
                <Typography variant="h5" color="text.secondary" gutterBottom sx={{ pl:2, mt:2}}> 
                    Question:
                </Typography>
                <Typography variant="h4" component="div" color="text.primary" sx={{mb:2,  pl:2}}>
                    {currQuestion.text}
                </Typography>
                {/* <Chip icon={QuestionIcons[currQuestion.type]} variant="outlined" label={QuestionTypes[currQuestion.type]} /> */}
                <Box
                        sx={{
                        marginTop: 1,
                        height: "100%", 
                        width: "100%", 
                        backgroundImage: QuestionGifs[currQuestion.type],
                        backgroundSize: "fixed",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    
                        }}
                ></Box>
                    
            </Box>
      </Box>

    )
     
};

export default QuestionCard;