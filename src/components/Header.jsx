import React from 'react'
import { useNavigate } from 'react-router'

import { Avatar } from './Avatar'

export const Header = () => {
  const navigate = useNavigate()

  const goToCreateGroup = () => {
    navigate('/create-group')
  }

  return (
    <div className="d-flex justify-content-between p-3">
      <Avatar />
      <button
        className="btn btn-outline-secondary"
        onClick={goToCreateGroup}
      >
        New group
      </button>
    </div>
  )
}
