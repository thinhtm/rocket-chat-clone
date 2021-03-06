import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import './App.scss'

import { ProtectedRoute } from './components/ProtectedRoute'
import { NotFound } from './components/NotFound'
import { Layout } from './components/Layout'
import { Home } from './components/Home'

import { SignIn } from './features/auth/SignIn'
import { SignUp } from './features/auth/SignUp'
import { Profile } from './features/profile/Profile'
import { NewGroup} from './features/group/NewGroup'
import { ChatContainer } from './features/group/ChatContainer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        >
          <Route
            path=":groupName"
            element={
              <ProtectedRoute>
                <ChatContainer />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-group"
          element={
            <ProtectedRoute>
              <Layout>
                <NewGroup />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
