import React from 'react'

import { Header } from './Header'
import { GroupList } from '../features/groups/GroupList'

export const Layout = ({ children }) => {
  return (
    <div className="layout container-fluid">
      <div className="row">
        <div className="col-2 px-0">
          <Header />
          <GroupList />
        </div>
        <div className="col-10 p-0">
          {children}
        </div>
      </div>
    </div>
  )
}
