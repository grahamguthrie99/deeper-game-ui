import React, { useState, useContext } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { AuthContext } from "../../session/AuthContext";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';

const pages = [
    { name: 'Play the Game', ref: "/home"},
    { name :  'Rules', ref: "/rules"}, 
    { name: "Add a Question", ref : "/question" },
    { name: 'View All Questions', ref : "/questions" },
];

export const Header = () => {

    const { authState, actions } = useContext(AuthContext);
    const [anchorElNav, setAnchorElNav] = useState(null);

    function onLogout() {
            actions.logout();
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <>
        {authState.user && <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    <svg viewBox="0 0 820 251" xmlns="http://www.w3.org/2000/svg" style={{ display: 'flex', height: "3.5rem", width: "8.5rem" }}>
                        <path d="M0 173.568v-1.78c5.103 0 15.564-1.27 18.88-2.54 6.124-2.288 7.91-6.862 7.91-12.453V18.805c0-5.59-1.786-11.181-7.91-13.722C12.758 2.54 5.614 2.033 1.02 1.779V0h82.158c34.954 0 95.169 18.297 95.169 87.927 0 59.212-51.03 85.64-100.272 85.64H0zm81.647-3.05c44.905 0 65.317-34.56 65.317-82.845 0-48.792-28.066-84.878-70.93-84.878-5.869 0-16.585.255-22.198.509V150.95c1.53 12.452 8.164 19.567 27.81 19.567zm171.239 6.1c-38.527 0-56.388-27.955-56.388-61.5 0-30.494 19.647-59.719 53.58-59.719 34.956 0 47.713 22.618 47.713 47.268v2.287h-76.033v4.32c0 32.782 8.93 59.465 38.016 59.465 19.902 0 28.832-8.64 38.527-24.142l2.042 1.271c-8.93 18.043-26.025 30.75-47.457 30.75zm-31.128-77.222l51.284-.497c0-19.865-3.827-40.958-23.218-40.958-16.074 0-27.3 15.63-28.066 41.455zm148.02 77.221c-38.527 0-56.387-27.954-56.387-61.498 0-30.495 19.646-59.72 53.58-59.72 34.956 0 47.713 22.618 47.713 47.268v2.287h-76.033v4.32c0 32.782 8.93 59.465 38.016 59.465 19.902 0 28.832-8.64 38.527-24.142l2.042 1.271c-8.93 18.043-26.025 30.75-47.458 30.75zm-31.127-77.221l51.284-.508c0-20.33-3.827-40.947-23.218-40.947-16.075 0-27.3 15.026-28.066 41.455zM425.436 251v-1.779c4.593-.254 10.461-1.27 14.033-2.287 4.848-1.525 6.634-6.353 6.634-11.944V77.762c-.51-5.336-2.551-9.91-6.634-12.706-3.061-2.033-9.44-3.304-14.033-3.558v-1.524l42.61-2.796 1.02 1.27v13.215l1.02.254c5.87-6.353 18.371-16.518 34.445-16.518 29.342 0 53.07 24.396 53.07 61.753 0 34.815-27.81 59.465-57.917 59.465-14.799 0-23.474-3.558-29.342-7.878h-1.02v64.726c0 5.591 2.55 10.165 7.143 11.944 3.828 1.525 13.013 3.558 17.606 3.812V251h-68.635zm72.207-76.67c21.942 0 33.934-22.617 33.934-57.432 0-27.954-9.95-52.858-35.72-52.858-12.247 0-20.412 4.828-26.536 11.943v78.271c2.807 8.132 11.482 20.076 28.322 20.076zm133.987 2.287c-38.527 0-56.387-27.954-56.387-61.498 0-30.495 19.646-59.72 53.58-59.72 34.956 0 47.713 22.618 47.713 47.268v2.287h-76.034v4.32c0 32.782 8.93 59.465 38.017 59.465 19.901 0 28.832-8.64 38.527-24.142l2.041 1.271c-8.93 18.043-26.025 30.75-47.457 30.75zm-31.128-77.221l51.285-.508c0-20.33-3.827-40.947-23.219-40.947-16.074 0-27.3 15.026-28.066 41.455zm91.634 74.172v-1.78c4.592-.253 7.654-.762 11.226-1.778 4.848-1.525 6.89-5.845 6.89-11.436V78.271c-.511-5.337-2.807-10.674-6.89-13.469-3.061-2.033-7.91-3.05-12.502-3.304v-1.524l41.589-2.796 1.02 1.017v18.043h.51c10.972-13.977 23.73-20.33 34.445-20.33 9.44 0 16.075 7.115 16.075 15.501 0 9.403-4.848 16.01-13.523 16.01-8.165 0-13.778-4.574-13.778-13.214 0-2.542 1.02-5.845 2.807-10.165-11.992 0-23.474 11.69-26.536 17.28v76.746c0 5.59 2.297 9.657 6.89 11.436 4.337 1.779 11.736 2.033 16.584 2.287v1.779h-64.807zm110.77 2.287c-9.441 0-17.096-7.37-17.096-16.772 0-9.403 7.655-17.027 17.095-17.027 9.44 0 17.095 7.624 17.095 17.027 0 9.402-7.654 16.772-17.095 16.772z" fill="#FFF" fill-rule="evenodd">
                        </path>
                    </svg>
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                    {pages.map((page) => (
                        <MenuItem key={page.name} component={RouterLink} to={page.ref} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page.name}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href=""
                    sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    <svg viewBox="0 0 820 251" xmlns="http://www.w3.org/2000/svg" style={{ display: 'flex', height: "3.5rem", width: "8.5rem" }}>
                        <path d="M0 173.568v-1.78c5.103 0 15.564-1.27 18.88-2.54 6.124-2.288 7.91-6.862 7.91-12.453V18.805c0-5.59-1.786-11.181-7.91-13.722C12.758 2.54 5.614 2.033 1.02 1.779V0h82.158c34.954 0 95.169 18.297 95.169 87.927 0 59.212-51.03 85.64-100.272 85.64H0zm81.647-3.05c44.905 0 65.317-34.56 65.317-82.845 0-48.792-28.066-84.878-70.93-84.878-5.869 0-16.585.255-22.198.509V150.95c1.53 12.452 8.164 19.567 27.81 19.567zm171.239 6.1c-38.527 0-56.388-27.955-56.388-61.5 0-30.494 19.647-59.719 53.58-59.719 34.956 0 47.713 22.618 47.713 47.268v2.287h-76.033v4.32c0 32.782 8.93 59.465 38.016 59.465 19.902 0 28.832-8.64 38.527-24.142l2.042 1.271c-8.93 18.043-26.025 30.75-47.457 30.75zm-31.128-77.222l51.284-.497c0-19.865-3.827-40.958-23.218-40.958-16.074 0-27.3 15.63-28.066 41.455zm148.02 77.221c-38.527 0-56.387-27.954-56.387-61.498 0-30.495 19.646-59.72 53.58-59.72 34.956 0 47.713 22.618 47.713 47.268v2.287h-76.033v4.32c0 32.782 8.93 59.465 38.016 59.465 19.902 0 28.832-8.64 38.527-24.142l2.042 1.271c-8.93 18.043-26.025 30.75-47.458 30.75zm-31.127-77.221l51.284-.508c0-20.33-3.827-40.947-23.218-40.947-16.075 0-27.3 15.026-28.066 41.455zM425.436 251v-1.779c4.593-.254 10.461-1.27 14.033-2.287 4.848-1.525 6.634-6.353 6.634-11.944V77.762c-.51-5.336-2.551-9.91-6.634-12.706-3.061-2.033-9.44-3.304-14.033-3.558v-1.524l42.61-2.796 1.02 1.27v13.215l1.02.254c5.87-6.353 18.371-16.518 34.445-16.518 29.342 0 53.07 24.396 53.07 61.753 0 34.815-27.81 59.465-57.917 59.465-14.799 0-23.474-3.558-29.342-7.878h-1.02v64.726c0 5.591 2.55 10.165 7.143 11.944 3.828 1.525 13.013 3.558 17.606 3.812V251h-68.635zm72.207-76.67c21.942 0 33.934-22.617 33.934-57.432 0-27.954-9.95-52.858-35.72-52.858-12.247 0-20.412 4.828-26.536 11.943v78.271c2.807 8.132 11.482 20.076 28.322 20.076zm133.987 2.287c-38.527 0-56.387-27.954-56.387-61.498 0-30.495 19.646-59.72 53.58-59.72 34.956 0 47.713 22.618 47.713 47.268v2.287h-76.034v4.32c0 32.782 8.93 59.465 38.017 59.465 19.901 0 28.832-8.64 38.527-24.142l2.041 1.271c-8.93 18.043-26.025 30.75-47.457 30.75zm-31.128-77.221l51.285-.508c0-20.33-3.827-40.947-23.219-40.947-16.074 0-27.3 15.026-28.066 41.455zm91.634 74.172v-1.78c4.592-.253 7.654-.762 11.226-1.778 4.848-1.525 6.89-5.845 6.89-11.436V78.271c-.511-5.337-2.807-10.674-6.89-13.469-3.061-2.033-7.91-3.05-12.502-3.304v-1.524l41.589-2.796 1.02 1.017v18.043h.51c10.972-13.977 23.73-20.33 34.445-20.33 9.44 0 16.075 7.115 16.075 15.501 0 9.403-4.848 16.01-13.523 16.01-8.165 0-13.778-4.574-13.778-13.214 0-2.542 1.02-5.845 2.807-10.165-11.992 0-23.474 11.69-26.536 17.28v76.746c0 5.59 2.297 9.657 6.89 11.436 4.337 1.779 11.736 2.033 16.584 2.287v1.779h-64.807zm110.77 2.287c-9.441 0-17.096-7.37-17.096-16.772 0-9.403 7.655-17.027 17.095-17.027 9.44 0 17.095 7.624 17.095 17.027 0 9.402-7.654 16.772-17.095 16.772z" fill="#FFF" fill-rule="evenodd">
                        </path>
                    </svg>
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                    <Button
                        key={page.name}
                        onClick={handleCloseNavMenu}
                        component={RouterLink} 
                        to={page.ref}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {page.name}
                    </Button>
                    ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Logout">
                    <IconButton onClick={onLogout} sx={{ p: 0 }}>
                        <LogoutIcon sx={{ color:  'white'}}/>
                    </IconButton>
                    </Tooltip>
                </Box>
                </Toolbar>
            </Container>
            </AppBar>}
        </>
    );
};

export default Header;
 