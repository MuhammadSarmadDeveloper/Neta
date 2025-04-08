import React from 'react'
// import { useState } from 'react';
import net from '../assets/net.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  // const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false); // Control for Login dropdown
  return (
<>
    <div  className='lg:p-6 lg:w-[85%] lg:mx-auto md:w-[85%] md:mx-auto md:p-6 p-2'>
    <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white text-xl font-bold rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li>
          <a>Services</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>About Us</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
   <div><img src={net} className='w-[8rem] h-12' /></div>
  </div>
  <div className="navbar-center font-bold bg-white hidden ">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>About us</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className=' md:flex gap-2'>
            <div className='w-auto font-bold h-auto rounded-[10px] gap-2 px-2 py-1 bg-white flex items-center'>
              <Link to="/login" className="bg-white text-black px-3 font-bold py-1 rounded ">
              ➜Login
              </Link>
              <div
                className="relative"
                // onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
              >
                <Link to="/signup">
                <button className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600   text-white px-3 py-1 rounded">
                  SignUp
                </button>
                </Link>
                {/* {isLoginDropdownOpen && (
                  <div className="absolute font-extrabold px-1 py-1 ml-[-6rem] mt-4 w-44 bg-white border-[#eb744c] border-2 rounded-md shadow-lg z-10">
                   
                  </div>
                )} */}
              </div>
            </div>
          </div>
  </div>
</div>
    </div>
</>
  )
}

export default Navbar