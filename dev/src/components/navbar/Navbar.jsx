import React from 'react';
import './navbar.css';

import {RiMenu3Line, RiCLoseLine} from 'react-icons/ri';
import {IoAppsSharp} from 'react-icons/io5';
import {FaGithubSquare} from 'react-icons/fa'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar'> 
            <div className='navbar-links'>
                <div className='navbar-links_logo'>
                    <img src={logo} alt="logo"/>
                </div>
                <div className='navbar-links_container'>
                    <p><a href='#home'/>Home</p>
                    <p><a href='#about'/>About</p>
                    <p><a href='#resume'/>Resume</p>
                    <p><a href='#projects'/>Projects</p>
                    <p><a href='#other'/>Other</p>
                </div>
            <div className='navbar-apps'>
                <button type='button'>
                    <IoAppsSharp className='navbar-apps_logo'/>
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar