import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'
import { signup, login, resetPass } from '../../Config/firebase'

const Login = () => {

  const [currState, setCurrState] = useState("Sign Up");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (currState === "Sign Up") {
      signup(userName, email, password);
    }
    else {
      login(email, password);
    }
  }

  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className='logo' />

      <form onSubmit={onSubmitHandler} className='login-form'>
        <h2>{currState}</h2>
        {currState === "Sign Up" ? <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text" placeholder='Username' className="form-input" required /> : null}
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Email adress' className="form-input" required />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Password' className="form-input" required />
        <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Login Now"}</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of Use & Privacy Policy.</p>
        </div>
        <div className="login-forgot">
          <p className="login-toggle">{currState === "Sign Up" ? (<>Already have an account? <span onClick={() => setCurrState("Login")} >click here</span></>) : (<>Don't have an account? <span onClick={() => setCurrState("Sign Up")} >click here</span></>)}</p>
          {
            currState === "Login" ? <p className='login-toggle'>Forgot Password ? <span onClick={()=>resetPass(email)}>Reset Here</span></p> : null
          }
        </div>
      </form>

    </div>
  )
}

export default Login
