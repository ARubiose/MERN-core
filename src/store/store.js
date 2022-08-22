import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
// import { uiSlice } from './ui/uiSlice'

/**
 * Basic store for redux Apps
 */
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    // ui: uiSlice.reducer
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware()
    // .concat() // App middleware
})