  
import { configureStore } from '@reduxjs/toolkit'

import systemSlice from './system/slice'

const store = configureStore({
  reducer: systemSlice
})

export type RootState = ReturnType<typeof store.getState>

export default store