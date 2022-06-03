import React, { useState, useEffect } from 'react'
import SkeletonPage from '../Loading/SkeletonPage';
import Lobby from './Lobby/Lobby';
import Temp from './Play/Temp';



const GameBoard = ({game, gameId, qMaster}) => {

    const [start, setStart] = useState(false)

    useEffect(  () => {
        if(game != null){
            setStart(game.started)
        }
    }, [game])

    if (game == null) return <SkeletonPage />


    return ( start ? 
        <Temp 
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



