import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import AuthAPI from '../api/auth.api'
import { updateAuthState } from '../features/auth/authSlice'

export const Avatar = () => {
  const [isDropdownShowed, setIsDropdownShowed] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsDropdownShowed(!isDropdownShowed)
  }

  const goToProfile = () => {
    navigate('/profile')
  }

  const handleSignOut = () => {
    AuthAPI.signOut()
    dispatch(updateAuthState(false))
    navigate('/signin')
  }

  return (
    <div className="avatar">
      <button
        className="avatar-btn btn p-0"
        onClick={toggleDropdown}
      >
        <img
          className="img-fluid rounded"
          src="https://ps.w.org/letter-avatars/assets/icon-256x256.png?rev=1320502"
          alt=""
        />
      </button>

      {
        isDropdownShowed ?
        <div className="dropdown-list mt-2">
          <button
            className="w-100 py-2 px-3"
            onClick={goToProfile}
          >
            Profile
          </button>
          <button
            className="w-100 py-2 px-3"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
        :
        null
      }
    </div>
  )
}
