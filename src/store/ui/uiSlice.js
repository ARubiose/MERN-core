import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    errorMessage : ''
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setErrorMessage: ( state, { payload })=> {
        state.errorMessage = payload.errorMessage
    },
    clearErrorMessage: ( state )=> {
        state.errorMessage = ''
    },

  }
});

export const { setErrorMessage, clearErrorMessage } = uiSlice.actions

