import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { useLocation } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
  const isAuthed = useSelector(
    state => state.auth.isAuthenticated
  )

  const location = useLocation()

  return isAuthed ? 
    children :
    <Navigate
      to="/signin"
      replace
      state={{ path: location.pathname }}
    />
}
