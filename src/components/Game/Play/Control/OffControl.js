import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AdminControl from './AdminControl';
import Fab from '@mui/material/Fab';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SendIcon from '@mui/icons-material/Send';
import LinearProgress from '@mui/material/LinearProgress'


const OffControl = ({qMaster}) => {
   
    return ( 
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, py: 2 }}>
        <Toolbar>
          <Fab variant="extended" disabled>
            <SendIcon sx={{ mr: 1 }} />
            <Box sx={{ width: 100 }}>
                <LinearProgress />
            </Box>
          </Fab>
          {qMaster && <AdminControl />}
          <Box sx={{ flexGrow: 1 }} />
          <Fab variant="extended" disabled>
            <Box sx={{ width: 100 }}>
                <LinearProgress />
            </Box>
            <SkipNextIcon  />   
          </Fab>
      </Toolbar>
      </AppBar>
    )
     
};

export default OffControl;