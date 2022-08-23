import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { AppRoutes } from '../template/routes/AppRoutes';

import { statusEnum } from '../store/auth/authSlice';
import { useAuthStore } from '../hooks';

/**
 * Main router for Authentication and Application routes
 * @returns {React.ReactElement} Routes
 */
export const AppRouter = () => {
    // Hooks
    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, []);

    // Auth Loading screen
    if (status === statusEnum.checkingAuthentication) return <h1>Loading</h1>;

    return (
        <Routes>
            {   
                status === statusEnum.authenticated 
                ?   (
                    <>
                        <Route path="/dashboard" element={<AppRoutes />} />
                        {/* Default route */}
                        <Route path="/*" element={<Navigate to="/dashboard" />} />
                    </>
                    )

                /*User authenticated  */
                :   ( 
                    <>
                        <Route path="/auth/*" element={<AuthRoutes />} />
                        {/* Default route */}
                        <Route path="/*" element={<Navigate to="/auth/login" />} />
                    </>
            )}
        </Routes>
    );
};
