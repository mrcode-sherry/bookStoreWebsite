import React from 'react'
import Home from './home/Home'
import {Route, Routes} from 'react-router-dom'
import Courses from './courses/Courses'
import About from './about/About'
import Contact from './contact/Contact'
import Signup from './components/Signup'
import Login from './components/Login'
import Fullcards from './Fullcards/Fullcards'

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/fullcard' element={<Fullcards/>}/>
     </Routes>
    </>
  )
}

export default App