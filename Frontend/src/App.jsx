import React from 'react'
import Home from './home/Home'
import {Navigate, Route, Routes} from 'react-router-dom'
import Courses from './courses/Courses'
import About from './about/About'
import Contact from './contact/Contact'
import Signup from './components/Signup'
import Login from './components/Login'
import Fullcards from './Fullcards/Fullcards'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

function App() {
  const [authUser, setAuthUser] = useAuth()
      console.log(authUser)
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser ? <Courses/> : <Navigate to="/signup"/> }/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/fullcard' element={<Fullcards/>}/>
     </Routes>
     <Toaster />
    </>
  )
}

export default App