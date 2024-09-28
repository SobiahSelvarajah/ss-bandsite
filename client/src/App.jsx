import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Biography from './pages/biography/Biography'
import Shows from './pages/shows/Shows'
import Footer from './components/footer/Footer'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Biography/>}/>
        <Route path='/biography' element={<Biography/>}/>
        <Route path='/shows' element={<Shows/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App