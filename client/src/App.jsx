import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Biography from './pages/biography/Biography'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='biography' element={<Biography/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App