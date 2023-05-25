import React, { useContext, useState } from 'react'
import { context } from '../context/SectionContext'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
  const [logValue,setLogValue] = useState("")
  const [logPass,setLogPass] = useState("")

  const xLocation = useLocation()
  console.log(xLocation,"Login");

  const {setLogin} = useContext(context);

  const navigate = useNavigate()
  

  const loginData = {
      ad:logValue,
      parol:logPass
  }
  const submit2 =(e)=>{
    e.preventDefault()
    console.log(loginData);
    setLogin(loginData);
    navigate(xLocation.state)
  }

  return (
    <>
      <form onSubmit={submit2}>
        <input onChange={(e)=>setLogValue(e.target.value)} type= "text"/>
        <input onChange={(e)=>setLogPass(e.target.value)} type= "password"/>
        <button>send</button>
      </form>
      <h1>Login</h1>
    </>

  )
}

export default Login