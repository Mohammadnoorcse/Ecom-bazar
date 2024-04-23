import React from 'react'
import "./login.css"
import {Link} from "react-router-dom"

export const Signup = () => {
  return (
    <div className='login w-100 content-center'>
    <div className="login-content content">
        <div className="login-card">
        <form action="">
            <span className='header' >Sign Up</span>
             <div style={{marginTop:"1.5rem",marginBottom:"0.5rem"}}>
                <span>E-mail</span>
                <input type="email" />
             </div>
             <div>
                <span>Password</span>
                <input type="password" />
             </div>
             <div style={{marginTop:".5rem"}}>
                <span>Confirm Password</span>
                <input type="password" />
             </div>
             <button type='submit'>Register</button>
             <div className='or'>
                <span>OR</span>
              </div>
             
        </form>
          <div className='login-text'> 
            <span>Already a User <Link to="/login">Login</Link></span>
          </div>
        
        </div>
    </div>
</div>
  )
}
