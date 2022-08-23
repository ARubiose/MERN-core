import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    clients: [],
    fields: ['id', 'name', 'surname', 'description'],
};

export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = true;
        },
        setClients: (state, { payload }) => {
            state.isLoading = false;
            state.clients = payload.clients;
        },
        clearClients: (state) => {
            state.clients = [];
        },
    },
});

export const { setLoading, setClients, clearClients } = clientSlice.actions;
