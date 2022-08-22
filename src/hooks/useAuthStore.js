import { useDispatch, useSelector } from 'react-redux';
import { appApi } from '../api';
import {
    checkingCredentials,
    clearErrorMessage,
    login,
    logout,
} from '../store/auth';

export const useAuthStore = () => {
    const { status, user, errorMessage } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
        // Update store - Checking
        dispatch(checkingCredentials());
        try {
            // Get user information
            const { data } = await appApi.post('/auth', { email, password });

            // Set user information in local Storage
            logUser(data);
        } catch (error) {
            // Update store - Logout with error
            showAuthError(error);
        }
    };

    const startRegister = async ({ name, email, password }) => {
        // Update store - Checking
        dispatch(checkingCredentials());
        try {
            // Create user and get user information
            const { data } = await appApi.post('/auth/new', {
                name,
                email,
                password,
            });

            // Set user information in local Storage
            logUser(data);
        } catch (error) {
            // Update store - Logout with error
            showAuthError(error);
        }
    };

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) return dispatch(logout());
        try {
            // Create user and get user information
            const { data } = await appApi.get('/auth/renew');

            // Set user information in local Storage
            logUser(data);
        } catch (error) {
            // Clear invalid token
            localStorage.clear();
            // Update store - Logout with error
            showAuthError(error);
        }
    };

    const startLogout = () => {
        localStorage.clear();
        dispatch(logout());
    };

    const logUser = ({ uid, name, token }) => {
        // Set user information in local Storage
        localStorage.setItem('token', token);
        localStorage.setItem('token-init-date', new Date().getTime());

        // Update store - Login
        dispatch(login({ uid, name }));
    };

    const showAuthError = (error) => {
        dispatch(logout({ errorMessage: error.response.data.msg }));
        setTimeout(() => {
            dispatch(clearErrorMessage());
        }, 2000);
        console.log(error);
    };

    return {
        // Properties
        status,
        user,
        errorMessage,
        //  Methods
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout,
    };
};
