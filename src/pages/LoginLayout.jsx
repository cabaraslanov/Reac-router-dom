import React, { useContext } from 'react'
import { context } from '../context/SectionContext'
import { Navigate, useLocation } from 'react-router-dom'

const LoginLayout = ({children}) => {

  const logLocation = useLocation()
    const {login} = useContext(context)
console.log(logLocation, "logLocation");

    if(!login){
        return <Navigate to="/login" state={logLocation.pathname}/>
    }
  return (
    children
  )
  
  
}

export default LoginLayout