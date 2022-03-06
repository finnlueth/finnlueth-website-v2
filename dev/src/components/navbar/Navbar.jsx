import React from 'react';
import './navbar.css';

import {RiMenu3Line, RiCLoseLine} from 'react-icons/ri';
import {IoAddCircleSharp} from "react-icons/io5";
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'> 
        <div className='navbar-links'>
            <div className='navbar-links_logo'>
                <img src={logo} alt="logo"/>
            </div>
            <div className='navbar-links_container'>
                <p><a href="#home"/>Home</p>
                <p><a href="#about"/>About</p>
                <p><a href="#projects"/>Projects</p>
                <p><a href="#other"/>Other</p>
            </div>
        </div>
        <div className='apps'>
            <button type="button">
                Apps
                <img src={IoAddCircleSharp} alt="apps-logo"/>
            </button>
        </div>
    </div>
  )
}

export default Navbar