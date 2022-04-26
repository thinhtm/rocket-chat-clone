import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import UserService from '../../common/user.service'
import GroupAPI from '../../api/group.api'

const initialState = {
  status: 'idle', // idle, loading, succeeded
  all: []
}

export const getGroupList = createAsyncThunk(
  'group/getGroupList',
  async () => {
    const resp = await GroupAPI.getGroupList()
    return resp
  }
)

const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    updateStatus(state, action) {
      state.status = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getGroupList.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getGroupList.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.all = action.payload
      })
  }
})

export const { updateStatus } = groupSlice.actions

export default groupSlice.reducer

export const getUserGroups = (state) => {
  const userId = parseInt(UserService.getUserId())
  const allGroups = state.group.all

  const userGroups = allGroups.filter(
    group => group.members.includes(userId)
  )
  return userGroups
}

export const getGroupDataByName = (state, groupName) => {
  const allGroups = state.group.all

  const group = allGroups.find(
    group => group.name === groupName
  )
  return group
}
