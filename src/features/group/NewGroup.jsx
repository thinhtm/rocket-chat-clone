import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import GroupAPI from '../../api/group.api'
import UserService from '../../common/user.service'

import { updateStatus } from './groupSlice'

export const NewGroup = () => {
  const [groupName, setGroupName] = useState('')

  const userId = UserService.getUserId()

  const dispatch = useDispatch()

  const createGroup = async () => {
    await GroupAPI.createGroup({
      name: groupName.trim(),
      members: [parseInt(userId)],
      messages: []
    })
    dispatch(updateStatus('idle'))
  }

  const onGroupNameChanged = e => setGroupName(e.target.value)

  return (
    <div className="p-3">
      <h3 className="mb-4">Create new group</h3>
      <label className="form-label">Group Name</label>
      <input
        className="form-control mb-4"
        type="text"
        value={groupName}
        onChange={onGroupNameChanged}
      />
      <button
        className="btn btn-primary"
        onClick={createGroup}
      >
        Create
      </button>
    </div>
  )
}
