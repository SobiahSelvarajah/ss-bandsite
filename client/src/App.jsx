import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Bio from './pages/bio/Bio'
import Shows from './pages/shows/Shows'
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Bio/>}/>
        <Route path='/bio' element={<Bio/>}/>
        <Route path='/shows' element={<Shows/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App