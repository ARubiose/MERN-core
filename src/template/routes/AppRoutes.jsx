import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardPage } from '../pages';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />

            {/* Default route */}
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};
