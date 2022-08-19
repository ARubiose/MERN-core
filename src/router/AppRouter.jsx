import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { AppRoutes } from '../template/routes/AppRoutes';

import { statusEnum, useCheckAuth } from '../hooks/useCheckAuth';

/**
 * Main router
 * @returns
 */
export const AppRouter = () => {

    const { status } = useCheckAuth()

    return (
        <Routes>
            {/* Authentication and Application routes */}
            {status === statusEnum.authenticated ? (
                <Route path="/*" element={<AppRoutes />} />
            ) : (
                <Route path="/auth/*" element={<AuthRoutes />} />
            )}

            {/* Default route */}
            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    );
};
