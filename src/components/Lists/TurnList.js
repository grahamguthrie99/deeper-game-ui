import React from 'react';
import Chip from '@mui/material/Chip';

const TurnList = ({players, turnIndex}) => {

    var player = turnIndex < players.length-1 ? players[turnIndex+1] : players[0];

    return ( 
       
        <Chip
            variant="outlined"
            color="error"
            size="small"
            label={player.displayName}
        />
           
    );
}

export default TurnList; 

