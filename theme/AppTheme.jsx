import React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { purpleTheme } from './purpleTheme';

export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={purpleTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

AppTheme.propTypes = {
    children: PropTypes.node.isRequired, // React element or any other 'renderable' element (e.g. string)
};
