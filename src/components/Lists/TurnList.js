import React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

const TurnList = ({players, turnIndex}) => {

    var player = turnIndex < players.length-1 ? players[turnIndex+1] : players[0];

    return ( 
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            listStyle: 'none',
            width: '100%',
            p: 0.5,
            m: 0,
        }}
        component="ul"
        >

            <ListItem key={player.uid}>
                <Chip
                label={player.displayName}
                />
            </ListItem>
                
        </Box>
    );
}

export default TurnList; 

