import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const NavBar = () => {
    return (
        <header>
            <span><Link to="/" >Logo</Link>
            </span>
            <nav>
                <ul>



                    <li>
                        <Link to="/Contact">Contact </Link>
                    </li>
                    <li>
                        <Link to="/about">AboutUs</Link>
                    </li>
                    <li>
                        <Link to="/login"><button>Login</button></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;



