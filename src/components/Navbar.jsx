import React, { useState } from 'react'
import { FaTimes, FaBars } from "react-icons/fa";
import { CiUser, CiShoppingBasket, CiSearch } from "react-icons/ci";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const menuItems = ['Home', 'Websites', 'About', 'Coming Soon...'];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className='fixed top-0 left-0 w-full border-b border-gray-600  z-50 bg-gray-800'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16 items-center'>
                    <div className='text-2xl font-bold bg-clip-text text-transparent bg-emerald-400'>
                        <i className='fas fa-globe-americas text-red-500'></i> GlideSphere
                    </div>

                    {/* MOBILE VIEW TOOGLE */}
                    <div className='md:hidden flex items-center'>
                        <button className='text-white text-2xl' onClick={toggleMenu}>
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className={`hidden md:flex items-center space-x-6`}>
                        {menuItems.map((item, index) => (
                            <span key={index} className=' relative text-white px-4 py-2 cursor-pointer group 
                                transition-transform transform hover:scale-105'>
                                <span className=' absolute inset-0 bg-gradient-to-r from-green-400 to-red-500 
                                text-white rounded-full opacity-0 group-hover:opacity-100 transition 
                                    duration-500 transform -skew-x-12 scale-110'
                                    style={{ clipPath: 'ellipse(50% 30% at 50% 50%' }}>
                                </span>
                                <span className=' relative z-10'>{item}</span>
                            </span>
                        ))}
                    </div>

                    {/* DESKTOP icons */}
                    <div className='hidden md:flex items-center space-x-4'>
                        {[CiSearch, CiShoppingBasket, CiUser].map((Icon, idx) => (
                            <Icon key={idx}
                                className='text-white text-xl cursor-pointer hover:text-purple-500 transition duration-300' />
                        ))}
                        <a href="https://hexagondigitalservices.com/contact" target='blank'>
                            <button className='ml-4 text-sm bg-gradient-to-r from-green-400 to-red-500 text-white
                                px-4 py-2 rounded-full hover:opacity-90 shadow-lg transition duration-300'>
                                Contact Us
                            </button>
                        </a>
                    </div>
                </div>

                {/* MOBILE MENU */}
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-700`}>
                    <div className='space-y-4 py-4'>
                        {menuItems.map((item, index) => (
                            <div className='text-white text-center py-2 cursor-pointer hover:bg-gray-600' key={index}>
                                {item}
                            </div>
                        ))}
                        <div className='flex justify-center space-x-4'>
                            {[CiSearch, CiShoppingBasket, CiUser].map((Icon, idx) => (
                                <Icon key={idx}
                                    className='text-white text-xl cursor-pointer hover:text-purple-500 transition duration-300' />
                            ))}
                        </div>
                        <div className='text-center'>
                            <a href="https://hexagondigitalservices.com/contact" target='blank'>
                                <button className='text-sm bg-gradient-to-r from-green-400 to-red-500 text-white px-4 py-2 
                            rounded-full hover:opacity-90 shadow-lg transition duration-300'>
                                    Contact Us
                                </button>
                            </a>
                        </div>
                    </div>

                </div>

            </div>

        </nav>
    )
}

export default Navbar