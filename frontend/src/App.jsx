import React from 'react'
import "./App.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Page/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import  {Signup}  from './components/login/Signup'
import AllProduct from './components/product/AllProduct'
import Deshboard from './components/deshboard/Deshboard'

export default function App() {
 
  return (
    <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/register" element={<Signup/>}/> 
        <Route path="/all-product" element={<AllProduct/>}/> 
        <Route path="/deshboard" element={<Deshboard/>}/> 
      </Routes>
      <Footer/> 

    </BrowserRouter>
  )
}
