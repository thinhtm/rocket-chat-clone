import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation, Link } from 'react-router-dom'

import AuthAPI from '../../api/auth.api'
import { updateAuthState } from './authSlice'

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { state } = useLocation()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onEmailChanged = e => setEmail(e.target.value)
  const onPasswordChanged = e => setPassword(e.target.value)

  const handleSignIn = async () => {
    if (email && password) {
      const resp = await AuthAPI.signIn(email, password)
      if (resp) {
        dispatch(updateAuthState(true))
        navigate(state?.path || '/')
      }
    }
  }
  
  return (
    <div className="sign-up p-3">
      <div className="card px-3 py-2">
        <div className="card-body">
          <h4 className="mb-4 text-center fw-bold">
            Sign In
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
              onClick={handleSignIn}
            >
              Sign In
            </button>
            <div>
              <Link 
                className="text-center"
                to="/signup"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
