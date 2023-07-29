import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <div>
            <nav>
                <div className="navbar">
                    <Link to='/' className='navLink'>
                        <div className="brand">
                            Trackulate
                        </div>
                    </Link>
                    <ul className="menu">
                        <i className="fa-solid fa-xmark navClose"></i>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link>ACCOUNT</Link>
                            <i className="fa-solid fa-chevron-down arrow"></i>
                            <ul className="sub-menu">
                                <li><Link to="/login">Log In</Link></li>
                                <li><Link to="/signup">Sign up</Link></li>
                                <li className="more">
                                    <Link to="/">More options</Link>
                                    <i className="fa-solid fa-chevron-down more-arrow"></i>
                                    <ul className="more-sub-menu more-options">
                                        <li><Link to="/">thrid menu</Link></li>
                                        <li><Link to="/">option two</Link></li>
                                        <li><Link to="/">three</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <i className="fa-solid fa-bars navOpen"></i>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
