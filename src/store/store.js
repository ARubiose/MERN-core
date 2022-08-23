import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { clientSlice } from './slices/client/clientSlice'
// import { uiSlice } from './ui/uiSlice'

/**
 * Basic store for redux Apps
 */
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    client: clientSlice.reducer
    // ui: uiSlice.reducer
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware()
    // .concat() // App middleware
})