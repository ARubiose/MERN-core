import * as React from 'react';

// Material UI components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuthStore } from '../../hooks';
// import { useTheme } from '@mui/material/styles';


export const AppNavBar = () => {
    // const theme = useTheme();
    const { startLogout, user } = useAuthStore();

    const onLogout = (event) => {
        event.preventDefault();
        startLogout();
    };

    return (
        <Box sx={{ flexGrow: 1 , mb:'2rem'}}>
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
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        {user.name}
                    </Typography>
                    <Button color="inherit" onClick={onLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
