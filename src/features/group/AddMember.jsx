import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import GroupAPI from '../../api/group.api'
import UserService from '../../common/user.service'

import { getOtherUsers, getUserList } from '../user/userSlice'

export const AddMember = (props) => {
  const userId = parseInt(UserService.getUserId())
  const userStatus = useSelector(state => state.user.status)
  const userList = useSelector(state => getOtherUsers(state))

  // handle disappeared props problem when reloading page
  const currentMembers =
    props.groupData.members.length ?
      props.groupData.members :
      [userId]

  const [members, setMembers] = useState(currentMembers)

  const dispatch = useDispatch()

  const onCheckedStateChanged = (e, userId) => {
    let currentMembers = Object.assign([], members);

    if (e.target.checked) {
      currentMembers.push(userId)
      setMembers(currentMembers)
    } else {
      const index = currentMembers.indexOf(userId)
      currentMembers.splice(index, 1)
      setMembers(currentMembers)
    }
  }

  const renderUserList = () => {
    let allUsers = userList.map((user, index) => {
      return (
        <div className="mb-2" key={index}>
          <input
            id={index}
            className="form-check-input me-2"
            type="checkbox"
            value={false}
            onChange={(e) => onCheckedStateChanged(e, user.id)}
          />
          <label className="form-check-label" htmlFor={index}>
            {user.email}
          </label>
        </div>
      )
    })
    return allUsers
  }

  const addMembers = async () => {
    let newGroupData = { ...props.groupData }
    newGroupData.members = members

    console.log('newGroupData:', newGroupData)

    const resp = await GroupAPI.addMember(newGroupData.id, newGroupData)
    console.log(resp)
  }

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(getUserList())
    }
  }, [userStatus, dispatch])

  return (
    <div className="p-3">
      <h5 className="fw-bold mb-4">Add member</h5>
      <div className="form-check mb-4">
        {renderUserList()}
      </div>
      {
        userList.length ?
        <button
          className="btn btn-primary"
          onClick={addMembers}
        >
          Add members
        </button>
        :
        null
      }
    </div>
  )
}
