import React from 'react'
import logo from '../../Images/Icon/logo.png'
import search from '../../Images/Icon/search.svg'
import bell from '../../Images/Icon/bell.svg'
import profile from '../../Images/Icon/profile.png'
import down from '../../Images/Icon/down.svg'
import './MainPageNavbar.module.css'
function Navbar(){
  return (
    <>
      <nav className="navbar">
          <div className='left-nav'>
            <img src={logo} width="100" height="40" alt="Logo" />
          <ul>
            <li>Home</li>
            <li>Movie</li>
            <li>TV Shows</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
          </div>
          <div className='right-nav'>
            <img src={search} className='icon'></img> 
            <p>Children</p>
            <img src={bell} className='icon'></img>
            <div className='profile'>
                <img src={profile} className='profile'></img>
                <img src={down} ></img>
            </div>

          </div>
      </nav>
    </>
  );
}

export default Navbar
