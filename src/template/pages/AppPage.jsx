import React from 'react';

import { useTheme } from '@mui/material/styles';

import { useAuthStore } from '../../hooks';

export const AppPage = () => {

    const theme = useTheme();
    console.log(theme)
    const { startLogout, user } = useAuthStore();

    const onLogout = (event) => {
        event.preventDefault();
        startLogout();
    };

    return (
        <div style={{backgroundColor:`${theme.palette.primary.main}`}}>
            <h1>AppPage</h1>
            <hr />
            <h3> User authenticated with name <strong>{ user.name }</strong> </h3>

            <button onClick={onLogout}>Logout</button>
        </div>
    );
};
