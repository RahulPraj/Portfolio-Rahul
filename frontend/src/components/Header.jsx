import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <Fragment>
        <div className='p-3 bg-bg flex justify-evenly items-center font-title sm:h-24 sm:p-1 sm:fixed sm:w-full'>
            <span className='text-text_primary  '>
            <NavLink to= '/'>Portfolio</NavLink>
            </span>
            <div className='text-text_primary flex  w-1/2 justify-between items-center'>
                <NavLink to="#about">About</NavLink>
                <NavLink to='#skills'>Skills</NavLink>
                <NavLink to='#experience'>Experience</NavLink>
                <NavLink to='#projects'>Projects</NavLink>
                <NavLink to='#education'>Education</NavLink>
            </div>
            <button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                <span className="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                <NavLink to= 'https://github.com/RahulPraj'>Github Profile</NavLink>
                </span> 
            </button>
        </div>
    </Fragment>
  )
}

export default Header