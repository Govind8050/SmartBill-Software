import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import "../../App.css"


const NavLeft = () => {
  return (
        <div className='NavSearch'>
            <span className='MenuIcon'>
                <IoMenu/>
            </span>
            <div className='search-wrapper'>
                <input type="text" placeholder='Search Product here... ' />
                <span className='search-icon'><FaSearch/></span>
            </div>
        </div>
  )
}

export default NavLeft
