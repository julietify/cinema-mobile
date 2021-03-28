import { configureStore } from '@reduxjs/toolkit'

import systemSlice from './system/slice'
import authSlice from './auth/slice'

const store = configureStore({
  reducer: {
    system: systemSlice,
    auth: authSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store