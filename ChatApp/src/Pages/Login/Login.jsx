import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'

const Login = () => {

    const[currState,setCurrState] = useState("Sign Up")

  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className='logo'/>

      <form className='login-form'>
        <h2>{currState}</h2>
        {currState === "Sign Up" ? <input type="text" placeholder='Username' className="form-input" required/> : null}
        <input type="email" placeholder='Email adress' className="form-input" required/>
        <input type="password" placeholder='Password' className="form-input" required/>
        <button type='submit'>{currState ==="Sign Up"? "Create Account" : "Login Now"}</button>
        <div className="login-term">
            <input type="checkbox" />
            <p>Agree to the terms of Use & Privacy Policy.</p>
        </div>
        <div className="login-forgot">
            <p className="login-toggle">{currState==="Sign Up" ? (<>Already have an account? <span onClick={()=>setCurrState("Login")} >click here</span></>) : (<>Don't have an account? <span onClick={()=>setCurrState("Sign Up")} >click here</span></>)}</p>
        </div>
      </form>

    </div>
  )
}

export default Login
