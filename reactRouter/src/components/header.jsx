import React from 'react'
import { Link, NavLink } from "react-router-dom";

function Header() {
    return(
        <header className='shadow sticky top-0 z-50 '>
            <nav className='bg-white border-gray-500 px-4 lg:px-6'>
                <div className='flex flex-wrap lg:flex-nowrap justify-between items-center'>
                    <Link to="/" className='order-1 lg:order-1 w-auto'>
                        <img className="flex items-center ml-5 h-16 w-16" src="https://i.pinimg.com/736x/d1/45/93/d1459319e66d7c4f67510278cde53b53.jpg" alt="" />
                    </Link>
                    <div className='flex items-center order-3 lg:order-3 mt-2 lg:mt-0 lg:w-auto'>
                        <Link to='#' className='m-3 font-semibold hover:text-orange-700'>
                            Log In
                        </Link>
                        <Link to='#' className='m-3 mr-6 p-2 font-semibold rounded-2xl bg-orange-400 hover:bg-orange-600'>
                            Sign Up
                        </Link>
                    </div>
                    <div className='flex order-2 lg:order-2 w-auto lg:w-auto justify-center lg:justify-between items-center mt-2 lg:mt-0'>
                        <ul className='flex flex-row'>
                            <li>
                                <NavLink  to="/"
                                 className={({isActive}) => 
                                    `block hover:bg-gray-50 hover:border-b hover:border-y-slate-100
                                    ${isActive ? "text-orange-600" : "text-gray-500"}
                                   font-semibold rounded-xl px-3 pt-1 mx-1 hover:text-orange-500 `
                                }>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about"
                                className={({isActive}) => 
                                    `block hover:bg-gray-50 hover:border-b hover:border-y-slate-100
                                    ${isActive ? "text-orange-600" : "text-gray-500"}
                                   font-semibold rounded-xl px-3 pt-1 mx-1 hover:text-orange-500 `
                                }>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact"
                                className={({isActive}) => 
                                    `block hover:bg-gray-50 hover:border-b hover:border-y-slate-100
                                    ${isActive ? "text-orange-600" : "text-gray-500"}
                                   font-semibold rounded-xl px-3 pt-1 mx-1 hover:text-orange-500 `
                                }>
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/github"
                                className={({isActive}) => 
                                    `block hover:bg-gray-50 hover:border-b hover:border-y-slate-100
                                    ${isActive ? "text-orange-600" : "text-gray-500"}
                                   font-semibold rounded-xl px-3 pt-1 mx-1 hover:text-orange-500 `
                                }>
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;