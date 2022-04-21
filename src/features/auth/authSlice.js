import { createSlice } from '@reduxjs/toolkit'

const access_token = localStorage.getItem('access_token')

const initialState = {
  accessToken: access_token ? access_token : ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAccessToken(state, action) {
      const { accessToken } = action.payload
      state.accessToken = accessToken
    }
  }
})

export const { updateAccessToken } = authSlice.actions

export default authSlice.reducer
