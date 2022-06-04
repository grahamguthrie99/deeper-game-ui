import React, { useState, useEffect } from 'react'
import SkeletonPage from '../Loading/SkeletonPage';
import { Redirect } from "react-router-dom";
import Lobby from './Lobby/Lobby';
import Play from './Play/Play';




const GameBoard = ({game, gameId, qMaster}) => {


    const [start, setStart] = useState(false)
    const [gameEnded, setGameEnded] = useState(false)

    useEffect(  () => {
        if(game != null){
            setStart(game.started)
            setGameEnded(game.gameEnded)
        }
    }, [game])


    if (game == null) return <SkeletonPage />


    return (gameEnded ?  <Redirect to="/home" /> : 
        
        start ? 
        <Play 
            game={game}
            gameId={gameId}
            qMaster={qMaster}
            setStart={setStart}
        /> : 
        <Lobby 
            game={game}
            gameId={gameId}
            qMaster={qMaster}
            setStart={setStart}
        /> 
    )
};

export default GameBoard;



