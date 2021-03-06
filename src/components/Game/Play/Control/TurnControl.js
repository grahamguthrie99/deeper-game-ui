import React from 'react'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AdminControl from './AdminControl';
import Fab from '@mui/material/Fab';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SendIcon from '@mui/icons-material/Send';

const TurnControl = ({qMaster, handleSkip,handlePass, game}) => {

   
    return ( 
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, py:2 }}>
        <Toolbar>
          <Fab variant="extended" onClick={handlePass} >
            <SendIcon sx={{ mr: 1 }} />
            Next Player
          </Fab>
          {qMaster && <AdminControl game={game} />}
          <Box sx={{ flexGrow: 1 }} />
          <Fab variant="extended" onClick={handleSkip} >
            Skip Question
            <SkipNextIcon  />   
          </Fab>
        </Toolbar>
      </AppBar>
       
    )
     
};

export default TurnControl;