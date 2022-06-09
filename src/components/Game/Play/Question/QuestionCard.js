import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {QuestionGifs} from "../../../../utils/QuestionTypes"
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

const QuestionCard = ({currQuestion}) => {
   
    return ( 
        <Box
            sx={{
                marginTop: 2,
                display: 'flex',
                flexGrow: 1, 
                flexDirection: 'column',
                alignItems: 'start',
                width: "100%",
                }}
        >
            
            <Typography sx={{ fontSize: 16,  px: 4 }} color="text.secondary" > 
                {currQuestion.type === 7 ? "Punishment:" : "Question:"}
            </Typography>
            <motion.div key={currQuestion.text} variants={textContainer}
                initial="hidden"
                animate="show"  > 
                <Typography sx={{ mt: 1, px: 4 }} variant="h5" component="div" color="text.primary">
                    {currQuestion.text}   
                </Typography>
            </motion.div>
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

    )
     
};

export default QuestionCard;