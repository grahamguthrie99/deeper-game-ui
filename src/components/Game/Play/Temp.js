import React, { useState, useEffect } from 'react'
import PlayerList from '../../Lists/PlayerList';



const Temp = ({game, gameId, qMaster, setStart}) => {

    const [players, setPlayers] = useState(game.players)

    useEffect(  () => {
        setStart(game.started)
        setPlayers(game.players)
    }, [game, setStart])


   
    return ( 
        <PlayerList 
            players={players}
            setPlayers={setPlayers}
        /> 
    )
     
};

export default Temp;