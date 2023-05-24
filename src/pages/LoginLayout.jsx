import React, { useContext } from 'react'
import { context } from '../context/SectionContext'
import { Navigate } from 'react-router-dom'

const LoginLayout = ({children}) => {

    const {login} = useContext(context)


    if(!login){
        return <Navigate to="login"/>
    }
  return (
    children
  )
}

export default LoginLayout