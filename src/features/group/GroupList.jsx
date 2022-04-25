import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getUserGroups, getGroupList } from './groupSlice'

export const GroupList = () => {
  const groupStatus = useSelector(state => state.group.status)
  const groupList = useSelector(state => getUserGroups(state))

  const dispatch = useDispatch()

  const renderGroupList = () => {
    let allGroups = groupList.map((group, index) => {
      return (
        <div className="mb-2" key={index}>
          <Link className="fw-bold" to={`/${group.name}`}>
            {group.name}
          </Link>
        </div>
      )
    })
    return allGroups
  }

  useEffect(() => {
    if (groupStatus === 'idle') {
      dispatch(getGroupList())
    }
  }, [groupStatus, dispatch])

  return (
    <div className="px-3">
      <p className="fw-bold">All Groups</p>
      
      <div className="">
        {renderGroupList()}
      </div>
    </div>
  )
}
