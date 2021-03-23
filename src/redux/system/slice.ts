import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './types'

const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {},
  extraReducers: {}
})

export default systemSlice.reducer
export const {} = systemSlice.actions