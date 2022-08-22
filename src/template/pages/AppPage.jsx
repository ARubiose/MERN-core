import React from 'react';
import { useAuthStore } from '../../hooks';

export const AppPage = () => {

    const { startLogout, user } = useAuthStore();

    const onLogout = (event) => {
        event.preventDefault();
        startLogout();
    };

    return (
        <div>
            <h1>AppPage</h1>
            <hr />
            <h3> User authenticated with name <strong>{ user.name }</strong> </h3>

            <button onClick={onLogout}>Logout</button>
        </div>
    );
};
