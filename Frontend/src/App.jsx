import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Offer from './pages/Offer'

const App = () => {
  
  return (
   <>
   <div className='App'>
   
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/offer" element={<Offer/>}/>
   </Routes>
   </div>
   </>
  )
}

export default App