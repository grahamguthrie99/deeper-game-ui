import React, { useContext } from "react";
import { AuthContext } from "../../session/AuthContext";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AuthButton from "./AuthButton";



export const Header = () => {
    const { authState, actions } = useContext(AuthContext);

    function onSubmit() {
          actions.logout();
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Name TBD
            </Typography>
            {authState.user &&    
                <AuthButton onClick={onSubmit}>Sign Out</AuthButton>
            } 
          </Toolbar>
        </AppBar>
      </Box>
       
    );
};