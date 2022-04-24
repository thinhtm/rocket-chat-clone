import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import ProfileAPI from '../../api/profile.api'
import UserService from '../../common/user.service'

const userId = UserService.getUserId()

const initialState = {
  status: 'idle',
  data: {
    name: '',
    username: '',
    bio: '',
    email: ''
  }
}

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  async () => {
    const resp = await ProfileAPI.getProfile(userId)
    return resp
  }
)

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProfile.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
  }
})

export const { setProfile } = profileSlice.actions

export default profileSlice.reducer
