/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import ProfileAPI from '../../api/profile.api'
import { getProfile, updateStatus } from './profileSlice'

export const Profile = () => {
  const profileStatus = useSelector(state => state.profile.status)
  const profile = useSelector(state => state.profile.data)

  const [name, setName] = useState(profile.name)
  const [username, setUsername] = useState(profile.username)
  const [bio, setBio] = useState(profile.bio)
  const [email, setEmail] = useState(profile.email)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onNameChanged = e => setName(e.target.value)
  const onUsernameChanged = e => setUsername(e.target.value)
  const onBioChanged = e => setBio(e.target.value)
  const onEmailChanged = e => setEmail(e.target.value)

  const goToHome = () => {
    dispatch(updateStatus('idle'))
    navigate('/')
  }

  const saveChanges = async () => {
    const updatedProfile = {
      password: profile.password,
      name,
      username,
      bio,
      email
    }
    await ProfileAPI.updateProfile(profile.id, updatedProfile)
    goToHome()
  }

  useEffect(() => {
    if (profileStatus === 'idle') {
      dispatch(getProfile())
    }
    setName(profile.name)
    setUsername(profile.username)
    setBio(profile.bio)
    setEmail(profile.email)
  }, [profileStatus, dispatch])

  return (
    <div className="profile container-fluid">
      <h3 className="mb-5">Profile</h3>
      <label className="form-label">Name</label>
      <input
        className="form-control mb-4"
        type="text"
        value={name}
        onChange={onNameChanged}
      />
      <label className="form-label">Username</label>
      <input
        className="form-control mb-4"
        type="text"
        value={username}
        onChange={onUsernameChanged}
      />
      <label className="form-label">Bio</label>
      <textarea
        className="form-control mb-4"
        type="text"
        value={bio}
        onChange={onBioChanged}
      />
      <label className="form-label">Email</label>
      <input
        className="form-control mb-5"
        type="email"
        placeholder="yourname@email.com"
        value={email}
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
