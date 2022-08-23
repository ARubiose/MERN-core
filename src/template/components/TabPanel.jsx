import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '@mui/material';

/**
 * Wrapper for conditional display of tab panels
 * @param {*} props 
 * @returns 
 */
export const TabPanel = ( props ) => {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                     {children}
                </Box>
            )}
        </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };