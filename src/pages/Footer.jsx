import React, { useContext } from 'react'
import {FiLogOut} from "react-icons/fi"
import { context } from '../context/SectionContext'

const Footer = () => {

  const {setLogin} = useContext(context)

  const click = ()=>{
    setLogin(false)
  }
  return (
    <div className='footer'>Footer
       <FiLogOut className='exit' onClick={click}/>
    </div>
  )
}

export default Footer