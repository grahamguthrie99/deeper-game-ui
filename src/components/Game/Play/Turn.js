import React from 'react'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import TurnList from '../../Lists/TurnList';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';


const Turn = ({currPlayer, players, turnIndex}) => {
   
    return ( 
        <Box
            sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pt:2
            }}
        >
            
            <Chip sx={{mr: 1}}avatar={<Avatar sx={{ bgcolor: "background.paper", color: "text.primary" }} >{currPlayer.displayName[0]}</Avatar>} label={currPlayer.displayName} color="success" />
            <KeyboardTabIcon sx={{mr: 1, color: "text.primary" }} />
            <TurnList 
                players={players}
                turnIndex={turnIndex} 
            /> 
      </Box>

    )
     
};

export default Turn;