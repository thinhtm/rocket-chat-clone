import React from 'react'

export const Login = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center">
      <div className="container d-flex justify-content-center">
        <div className="card">
          <div className="card-body">
            <h2 className="mb-4">Log In</h2>
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
              <button className="btn btn-primary">Log In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
