import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
        <ul className='navUl'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/secLoy">Profil</NavLink>
        </ul>
    </>
  )
}

export default Nav