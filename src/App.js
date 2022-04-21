import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import './App.scss'

import { Login } from './features/auth/Login'
import { Register } from './features/auth/Register'

import { Avatar } from './components/Avatar'
import { GroupList } from './features/groups/GroupList'
import { Home } from './components/Home'
import { Profile } from './features/profile/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="container vh-100 py-3">
            <div className="row">
              <div className="col-3 px-2">
                <Avatar />
                <div className="mb-3"></div>
                <GroupList />
              </div>
              <div className="col-9">
                <Home />
              </div>
            </div>
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
