import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Chat from './Pages/Chat/Chat'
import ProfileUpdate from './Pages/ProfileUpdate/ProfileUpdate'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Config/firebase'

const App = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if (user){
        navigate('/chat')
      }
      else{
        navigate('/')
      }
    })
  },[])

  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/profile' element={<ProfileUpdate/>}/>
      </Routes>
    </>
  )
}

export default App
