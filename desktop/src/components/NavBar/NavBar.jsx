import React from 'react'
import { Link } from 'react-router-dom'
import { User, ChevronDown } from 'react-feather'
import './NavBar.scss'

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="nav-bar__title">Formation Helper</div>
            <div className="nav-bar__links">
                <Link to="/" className="nav-bar__icon">Home</Link>
                <Link to="/create" className="nav-bar__icon">Create</Link>
                <Link to="/shared" className="nav-bar__icon">Shared</Link>
                <Link to="/credits" className="nav-bar__icon">Credits</Link>
            </div>
            <Link to="/user" className="nav-bar__user">
                <User size={18} color='#ffffff' />
                <ChevronDown size={18} color='#ffffff' />
            </Link>
        </div >
    )
}

export default NavBar
