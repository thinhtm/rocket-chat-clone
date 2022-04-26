import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { AddMember } from './AddMember'
import { getGroupDataByName } from './groupSlice'

export const ChatContainer = () => {
  const [isAddingMember, setIsAddingMember] = useState(false)

  const params = useParams()

  const groupData = useSelector(
    state => getGroupDataByName(state, params.groupName)
  )

  const openAddMember = () => {
    setIsAddingMember(true)
  }

  const closeAddMember = () => {
    setIsAddingMember(false)
  }

  return (
    <div className="chat-container">
      <div className="header p-3 d-flex justify-content-between align-items-center">
        <h3>{params.groupName}</h3>
        {
          !isAddingMember ?
          <button
            className="btn btn-outline-secondary"
            onClick={openAddMember}
          >
            Add member
          </button>
          :
          <button
            className="btn btn-close fw-bold"
            onClick={closeAddMember}
          ></button>
        }
      </div>
      {
        isAddingMember ?
        <AddMember groupData={groupData} />
        :
        <div className="chat-pane px-3 pb-3">
          <div className="chat-content"></div>
          <input
            className="form-control"
            type="text"
            placeholder="Message"
          />
        </div>
      }
    </div>
  )
}
