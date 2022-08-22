import React from 'react';
import { AppRouter } from './router';

import './App.css';
import { AppTheme } from '../theme/AppTheme';

function App() {
    return (
        <AppTheme>
            <AppRouter />
        </AppTheme>
    );
}

export default App;
