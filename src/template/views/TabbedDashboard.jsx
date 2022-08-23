import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Tab, Tabs, Typography } from '@mui/material';
import { TabPanel } from '../components/TabPanel';

const getTabProps = (index) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
});

export const TabbedDashboard = ({ tabs }) => {
    // Selected index
    const [tabIndex, setTabIndex] = useState(0);

    const onTabChange = (event, newTabIndex) => {
        console.log(event.target);
        setTabIndex(newTabIndex);
    };

    return (
        <>
            <Typography variant="h4" component="h1">
                Tabbed Dashboard title
            </Typography>

            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={tabIndex}
                        onChange={onTabChange}
                        aria-label="Basic tabs"
                    >
                        {/* TAB NAVBAR - Labels */}
                        {tabs.map((tab, idx) => {
                            return (
                                <Tab
                                    key={idx}
                                    label={tab.label}
                                    {...getTabProps(idx)}
                                />
                            );
                        })}
                    </Tabs>
                </Box>
                {/* TAB PANELS - Components */}
                {tabs.map((tab, idx) => {
                            return (
                                <TabPanel
                                    key={idx}
                                    value={tabIndex}
                                    index={idx}
                                    {...getTabProps(idx)}
                                >
                                { tab.component }
                                </TabPanel>
                            );
                        })}
            </Box>
        </>
    );
};

TabbedDashboard.propTypes = {
    tabs: PropTypes.arrayOf(
        // Tab interface
        PropTypes.shape({
            label: PropTypes.string,
            component: PropTypes.node,
        })
    ),
};
