import { configureStore } from '@reduxjs/toolkit'

import authReducer from './features/auth/authSlice'
import profileReducer from './features/profile/profileSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer
  }
})
