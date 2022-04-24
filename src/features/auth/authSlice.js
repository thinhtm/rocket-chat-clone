import { createSlice } from '@reduxjs/toolkit'
import TokenService from '../../common/token.service'

const token = TokenService.getToken()

const initialState = {
  isAuthenticated: token ? true : false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuthState(state, action) {
      state.isAuthenticated = action.payload
    }
  }
})

export const { updateAuthState } = authSlice.actions

export default authSlice.reducer
