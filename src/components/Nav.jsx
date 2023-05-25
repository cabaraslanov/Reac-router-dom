import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { context } from '../context/SectionContext'

const Nav = () => {
  const {login} = useContext(context)
  
  return (
    <>
        <ul className='navUl'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/profil">Profil</NavLink>
            <div className={login? "login" : "logout"}></div>
            {/* <div style={{backgroundColor:"red"}}></div> */}
        </ul>
    </>
  )
}

export default Nav