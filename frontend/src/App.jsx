import React from 'react'
import "./App.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Page/Home'
import Navbar from './components/navbar/Navbar'
export default function App() {
  return (
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
      </Routes>
    </BrowserRouter>
  )
}
