import React from 'react'
import SkeletonPage from '../Loading/SkeletonPage';



const Join = ({game, id}) => {


    if (game == null) return <SkeletonPage />
    
    return ( 
        <div>
            <p>to join the game use code: {id}</p>
            <ul>
                {game.players.map((player) => (
                    <li key={player.uid} >
                        {player.uid}
                    </li>
                ))}
            </ul>
        </div>  
    )
      
      
};

export default Join;