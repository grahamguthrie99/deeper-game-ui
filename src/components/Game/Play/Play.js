import React, { useState, useEffect } from 'react'
import Control from './Control/Control';
import Question from './Question/Question';
import Turn from './Turn';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';



const Play = ({game, setStart}) => {

   

    const [players, setPlayers] = useState(game.players)
    const [currPlayer, setCurrPlayer] = useState(game.currPlayer)
    const [turnIndex, setTurnIndex] = useState(game.turnIndex)
    const [currQuestion, setCurrQuestion] = useState(game.currQuestion)
    const [questionIndex, setQuestionIndex] = useState(game.questionIndex)
   


    useEffect(  () => {
        setStart(game.started)
        setPlayers(game.players)
        setCurrPlayer(game.currPlayer)
        setTurnIndex(game.turnIndex)
        setCurrQuestion(game.currQuestion)
        setQuestionIndex(game.questionIndex)
    }, [game, setStart])

 
    return ( 
        <Box
          sx={{
            bgcolor: 'background.paper',
            height: "100vh",
            pt: 0, 
            display: 'flex',
            flexDirection: 'column',
       
          }}
        >
            <Turn 
                currPlayer={currPlayer}
                players={players}
                turnIndex={turnIndex}
            />
            <Divider variant="middle" sx={{ mt: 2 }} />
            <Question
                game={game}
                currQuestion={currQuestion}
                questionIndex={questionIndex}
                />
            <Control 
                game={game}
                currPlayer={currPlayer}
                setCurrQuestion={setCurrQuestion}
            />
       
       </Box>
    )
     
};

export default Play;