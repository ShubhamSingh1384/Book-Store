import React from 'react'
import Home from './home/Home'
import {Routes, Route, Navigate} from 'react-router-dom'
import Courses from './Courses/Courses'
import Contact from './components/Contact'
import Registration from './registration/Registration'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
import MyCourses from './MyCourses/MyCourses'
import About from './components/About'

// this is i added currently again change



const App = () => {
  const [authUser, setAuthUser] = useAuth();
  // console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={authUser?<Courses/>: <Navigate to="/signup"/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<Registration/>}/>
        <Route path="/mycourse" element={<MyCourses/>}/>
        
        
      </Routes>
      <Toaster/>
    </>
  )
}

export default App