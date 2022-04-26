import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import UserService from '../../common/user.service'
import UserAPI from '../../api/user.api'

const initialState = {
  status: 'idle', // idle, loading, succeeded
  all: []
}

export const getUserList = createAsyncThunk(
  'user/getUserList',
  async () => {
    const resp = await UserAPI.getUsers()
    return resp
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateStatus(state, action) {
      state.status = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getUserList.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getUserList.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.all = action.payload
      })
  }
})

export const { updateStatus } = userSlice.actions

export default userSlice.reducer

export const getOtherUsers = (state) => {
  const userId = parseInt(UserService.getUserId())
  const allUsers = state.user.all

  const otherUsers = allUsers.filter(
    user => user.id !== userId
  )
  return otherUsers
}
