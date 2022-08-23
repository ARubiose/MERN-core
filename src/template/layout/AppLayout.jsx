import React from 'react';
import PropTypes from 'prop-types';

import { Box, Container } from '@mui/material';
import { AppNavBar } from '../../ui/components/Navbar';

export const AppLayout = ({ children }) => {
    return (
        <Box sx={{width:'100%'}}>
            <Box>
                {/* Navbar */}
                <AppNavBar />

                {/* Main view */}
                <Container>{children}</Container>
            </Box>
        </Box>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired, // React element or any other 'renderable' element (e.g. string)
};
