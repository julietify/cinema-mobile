import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './types'
import { login, signInGoolge, logout } from './thunks'

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.checking = false
      state.isAuthenticated = true,
      state.user = action.payload
    }),
    builder.addCase(login.rejected, state => {
      state.checking = false
    }),
    builder.addCase(signInGoolge.fulfilled, () => {})
    builder.addCase(signInGoolge.rejected, () => {})
    builder.addCase(logout.fulfilled, state => {
      state.isAuthenticated = false
    })
  }
})

export default authSlice.reducer
