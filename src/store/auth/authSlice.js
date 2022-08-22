import { createSlice } from '@reduxjs/toolkit';

export const statusEnum = {
    authenticated: 'Authenticated',
    nonAuthenticated: 'Non-Authenticated',
    checkingAuthentication: 'Checking',
};

const initialState = {
    status: statusEnum.checkingAuthentication,
    user: {},
    errorMessage: undefined,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: { ...initialState },
    reducers: {
        login: (state, { payload }) => {
            state.status = statusEnum.authenticated;
            state.user = {
                uid: payload.uid,
                name: payload.name,
            };
            state.errorMessage = payload.errorMessage;
        },

        logout: (state, { payload }) => {
            state.status = statusEnum.nonAuthenticated;
            state.user = {};
            state.errorMessage = payload?.errorMessage;
        },

        checkingCredentials: (state) => {
            state.status = statusEnum.checkingAuthentication;
        },

        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        },
    },
});

export const { login, logout, checkingCredentials, clearErrorMessage } = authSlice.actions;
