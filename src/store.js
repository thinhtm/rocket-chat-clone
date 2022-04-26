import { configureStore } from '@reduxjs/toolkit'

import authReducer from './features/auth/authSlice'
import profileReducer from './features/profile/profileSlice'
import groupReducer from './features/group/groupSlice'
import userReducer from './features/user/userSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    group: groupReducer,
    user: userReducer
  }
})
