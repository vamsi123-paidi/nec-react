import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import BasicExample from './components/NavbarComp'
import UserProfile from './components/UserProfile'
import DashboardLayout from './components/Dashboard'
import Profile from './components/Profile'
import Settings from './components/Settings'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/user/:userId" element={<UserProfile />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='dashboard' element={<DashboardLayout />}>
            <Route path='profile' element={<Profile />} />
            <Route path='settings' element={<Settings  />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App