import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: undefined
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = undefined
    },
  },
})

export const { login, logout } = appSlice.actions

export default appSlice.reducer