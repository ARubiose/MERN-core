import { Button } from '@mui/material';
import React from 'react';
import { MaterialUITable } from '../components/MateriaUIlTable';

// import { useTheme } from '@mui/material/styles';

import { AppLayout } from '../layout/AppLayout';
import { TabbedDashboard } from '../views/TabbedDashboard';

// Tabs to be included in the TabPage
const tabs = [
    {
        label:'Item One',
        component:<MaterialUITable />
    },
    {
        label:'Item Two',
        component:<MaterialUITable />
    },
    {
        label:'Item Three',
        component:<Button>Hello</Button>
    },
    {
        label:'Item Four',
        component:<Button>Hello</Button>
    },
]
/**
 * Simple DashboardPage with tabs
 * @returns 
 */
export const DashboardPage = () => {
    // const theme = useTheme();

    return (
        <AppLayout>
            <TabbedDashboard tabs={ tabs }/>
        </AppLayout>
    );
};
