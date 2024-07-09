import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Biography from './pages/biography/Biography'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='biography' element={<Biography/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App