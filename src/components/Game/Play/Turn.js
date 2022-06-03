import React from 'react'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TurnList from '../../Lists/TurnList';


const Turn = ({currPlayer, players, turnIndex}) => {
   
    return ( 
        <Box
            sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            }}
        >
            <Typography variant="h5" color="text.secondary" sx={{p : 2}}>
                    You're Up  
            </Typography>
            <Chip sx={{mb : 2}} avatar={<Avatar>{currPlayer.displayName[0]}</Avatar>} label={currPlayer.displayName} />
            <Typography  color="text.secondary" >
                     Next Up  
            </Typography>
            <TurnList 
                players={players}
                turnIndex={turnIndex} 
            /> 
      </Box>

    )
     
};

export default Turn;