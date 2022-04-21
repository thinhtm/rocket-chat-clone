import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import './App.css'

import { Login } from './features/auth/Login'
import { Home } from './features/home/Home'
import { Profile } from './features/profile/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
