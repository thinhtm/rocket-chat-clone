import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center">
      <div className="container d-flex justify-content-center">
        <div className="login-card card">
          <div className="card-body">
            <h2 className="mb-4 text-center">Log In</h2>
            <form>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="yourname@email.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input className="form-control" type="password" />
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-primary px-4 fw-bold">
                  Log In
                </button>
              </div>
              <div className="mt-3">
                <p className="m-0 text-center">
                  Don't have account? <Link to="/register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
