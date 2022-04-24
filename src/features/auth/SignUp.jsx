import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

import AuthAPI from '../../api/auth.api'
import { updateAuthState } from './authSlice'

export const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onEmailChanged = e => setEmail(e.target.value)
  const onPasswordChanged = e => setPassword(e.target.value)

  const handleSignUp = async () => {
    if (email && password) {
      const resp = await AuthAPI.signUp({
        email,
        password,
        name: '',
        username: '',
        bio: ''
      })
      if (resp) {
        dispatch(updateAuthState(true))
        navigate('/')
      }
    }
  }

  return (
    <div className="sign-up p-3">
      <div className="card px-3 py-2">
        <div className="card-body">
          <h4 className="mb-4 text-center fw-bold">
            Sign Up
          </h4>
          <label className="form-label">Email</label>
          <input
            className="form-control mb-3"
            type="email"
            placeholder="yourname@email.com"
            value={email}
            onChange={onEmailChanged}
          />
          <label className="form-label">Password</label>
          <input
            className="form-control mb-4"
            type="password"
            value={password}
            onChange={onPasswordChanged}
          />
          <div className="text-center">
            <button
              className="btn btn-primary mb-2 px-4 fw-bold"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
            <div>
              <Link 
                className="text-center"
                to="/signin"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
