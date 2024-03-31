import React from 'react'
import logo from "../assets/logo.svg"
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <header>
        <div className="conteiner">
            <img src={logo} alt="logo" />
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/admin">Admin</NavLink>
            </nav>
        </div>
    </header>
  )
}
