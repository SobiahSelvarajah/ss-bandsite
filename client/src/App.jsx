import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Biography from './pages/biography/Biography'
import Shows from './pages/shows/Shows'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Biography/>}/>
        <Route path='/biography' element={<Biography/>}/>
        <Route path='/shows' element={<Shows/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App