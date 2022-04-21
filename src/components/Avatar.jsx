import React from 'react'
import { useState } from 'react'

export const Avatar = () => {
  const [isDropdownShowed, setIsDropdownShowed] = useState(false)

  const toggleDropdownList = () => {
    setIsDropdownShowed(!isDropdownShowed)
  }

  return (
    <div className="avatar-container">
      <button
        className="avatar btn p-0"
        onClick={toggleDropdownList}
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
          <button className="w-100 py-2 px-3">
            Profile
          </button>
          <button className="w-100 py-2 px-3">
            Log out
          </button>
        </div>
        :
        null
      }
    </div>
  )
}
