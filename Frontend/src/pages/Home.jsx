import React from 'react';
import Navbar from '../components/Navbar'
// import banner from '../assets/banner.png';
import chara from '../assets/chara.png'
import net from '../assets/net.png';
import agent from '../assets/agent.png'
import cal from '../assets/cal.png'
import file from '../assets/file.png'
import clock from '../assets/cloc.png'
import { FaSearch, FaMicrophone } from 'react-icons/fa'; // Importing the search and microphone icons


const Home = () => {
    const TwitterIcon = () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current hover:opacity-80 transition-opacity"
        >
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      );
    
      const YoutubeIcon = () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current hover:opacity-80 transition-opacity"
        >
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      );
    
      const FacebookIcon = () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current hover:opacity-80 transition-opacity"
        >
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      );
    
      const footerLinks = ['About us', 'Contact', 'Jobs', 'Press kit'];
      const socialIcons = [<TwitterIcon key="twitter" />, <YoutubeIcon key="youtube" />, <FacebookIcon key="facebook" />];
  return (
    <div>
      <Navbar/>
      <div className="md:hidden p-4">
  <div className="flex flex-col gap-4 items-center w-full">
    <label className="input input-bordered flex items-center gap-2 w-full">
      <FaSearch className="w-4 h-4" />
      <input 
        type="text" 
        className="grow text-sm" 
        placeholder="Ask a question or search for tools" 
      />
      <FaMicrophone className="w-4 h-4 text-blue-900 opacity-70" />
    </label>
  </div>
</div>

<div className="max-w-screen-2xl bg-gradient-to-r from-blue-50 via-blue-200 to-blue-50 container mx-auto px-4 md:px-10 py-8 md:py-12 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
  {/* Left Section */}
  <div className="w-full md:w-1/2 lg:ml-28  md:ml-8 mt-0 md:mt-0 text-center md:text-left space-y-5">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
      Hello, welcome to Neta
    </h1>
    <p className="text-sm md:text-base lg:text-lg text-gray-700">
      Your all-in-one electrical Solutions assistant
    </p>
    
    <div className="flex justify-center md:justify-start mt-4">
      <img 
        src={net} 
        alt="Neta Logo" 
        className="w-64 md:w-72 lg:w-80 h-auto max-h-32 object-contain" 
      />
    </div>
    
   
  </div>

  {/* Right Section */}
  <div className="w-full md:w-1/2 flex flex-col items-center">
    {/* Chat Bar - Visible on md and larger screens */}
    <div className="hidden md:flex flex-col gap-4 items-center w-full mb-6 max-w-md">
      <label className="input input-bordered flex items-center gap-2 w-full">
        <FaSearch className="w-4 h-4" />
        <input 
          type="text" 
          className="grow text-sm md:text-base" 
          placeholder="Ask a question or search for tools" 
        />
        <FaMicrophone className="w-4 h-4 text-blue-900 opacity-70" />
      </label>
    </div>
    
    {/* NETA Character Image */}
    <div className="w-full flex justify-center">
      <img
        src={chara}
        alt="NETA Character"
        className=" w-[20rem] h-[20rem] lg:w-[26rem] lg:h-[26rem] object-contain"
      />
    </div>
  </div>
</div>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Popular bots</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Electrical Assistant Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <img 
              src={agent}
              alt="Electrical Assistant" 
              className="w-12 h-12 mr-4"
            />
            <h2 className="text-xl font-semibold">Electrical Assistant</h2>
          </div>
          <p className="text-gray-600">Generate photo-realistic pictures with RealVisXi_4.0</p>
        </div>
        
        {/* Estimate Assistant Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
          <img 
  src={cal}
  alt="Estimate Assistant" 
  className="w-12 h-12 mr-4"
/>
            <h2 className="text-xl font-semibold">Coming Soon</h2>
          </div>
          <p className="text-gray-600">Generate accurate cost estimates</p>
        </div>
        
        {/* Document Upload Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <img 
              src={file}
              alt="Document Upload" 
              className="w-12 h-12 mr-4"
            />
            <h2 className="text-xl font-semibold">Document Upload</h2>
          </div>
          <p className="text-gray-600">Upload and manage project files</p>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Recent activity</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Electrical Assistant Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <img 
              src={clock}
              alt="Electrical Assistant" 
              className="w-12 h-12 mr-4"
            />
            <h2 className="text-xl font-semibold">Project Estimate Completed</h2>
          </div>
          <p className="text-gray-600">2 hours ago</p>
        </div>
        
        {/* Estimate Assistant Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
          <img 
  src={clock}
  alt="Estimate Assistant" 
  className="w-12 h-12 mr-4"
/>
<h2 className="text-xl font-semibold">Project Estimate Completed</h2>
          </div>
          <p className="text-gray-600">2 hours ago</p>
        </div>
        
        {/* Document Upload Card */}
      
      </div>
    </div>
    <footer className="bg-gray-50 dark:bg-slate-900 text-gray-700 dark:text-gray-300">
      <div className="border-t border-gray-200 dark:border-gray-700"></div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center space-y-8">
          <nav className="w-full">
            <ul className="flex flex-col items-center space-y-4">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex space-x-6">
            {socialIcons.map((icon, index) => (
              <a key={index} href="#" className="hover:scale-110 transition-transform">
                {icon}
              </a>
            ))}
          </div>

          <div className="text-center text-sm">
            <p>Copyright © 2024 - All rights reserved by ACME Industries Ltd</p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col items-center space-y-8">
          <nav className="w-full max-w-2xl">
            <ul className="flex justify-center space-x-8">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex space-x-6">
            {socialIcons.map((icon, index) => (
              <a key={index} href="#" className="hover:scale-110 transition-transform">
                {icon}
              </a>
            ))}
          </div>

          <div className="text-center text-sm">
            <p>Copyright © 2025 - All rights reserved by NETA</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Home;
