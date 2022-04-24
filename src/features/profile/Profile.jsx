import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getProfile } from './profileSlice'

export const Profile = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [bio, setBio] = useState('')
  const [email, setEmail] = useState('')

  const profileStatus = useSelector(state => state.profile.status)
  const profile = useSelector(state => state.profile.data)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onNameChanged = e => setName(e.target.value)
  const onUsernameChanged = e => setUsername(e.target.value)
  const onBioChanged = e => setBio(e.target.value)
  const onEmailChanged = e => setEmail(e.target.value)

  const goToHome = () => {
    navigate('/')
  }

  const saveChanges = () => {
    console.log(name)
    console.log(username)
    console.log(bio)
    console.log(email)
  }

  useEffect(() => {
    if (profileStatus === 'idle') {
      dispatch(getProfile())
    }
  }, [profileStatus, dispatch])

  return (
    <div className="profile container-fluid">
      <h3 className="mb-5">Profile</h3>
      <label className="form-label">Name</label>
      <input
        className="form-control mb-4"
        type="text"
        value={profile.name}
        onChange={onNameChanged}
      />
      <label className="form-label">Username</label>
      <input
        className="form-control mb-4"
        type="text"
        value={profile.username}
        onChange={onUsernameChanged}
      />
      <label className="form-label">Bio</label>
      <textarea
        className="form-control mb-4"
        type="text"
        value={profile.bio}
        onChange={onBioChanged}
      />
      <label className="form-label">Email</label>
      <input
        className="form-control mb-5"
        type="email"
        placeholder="yourname@email.com"
        value={profile.email}
        onChange={onEmailChanged}
      />     
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-primary"
          onClick={saveChanges}
        >
          Save changes
        </button>
      </div>

      <button
        className="btn btn-close fw-bold"
        onClick={goToHome}
      ></button>
    </div>
  )
}
