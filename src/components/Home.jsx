import React from 'react'
import { Outlet, useParams } from 'react-router'

export const Home = () => {
  const params = useParams()

  return (
    <div className="">
      {
        params.groupName ?
        <Outlet />
        :
        <div className="p-3">
          <h3 className="mb-4">Home</h3>
          <p>Welcome to Rocket Chat Clone!</p>
          <p>MIT License</p>
          <p>Copyright (c) 2022 Rocket Chat Clone.</p>
        </div>
      }
    </div>
  )
}
