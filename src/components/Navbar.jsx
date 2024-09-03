import React, { useState } from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { NavbarLinks } from './../data/navbar-link';
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiMenu2Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri"; 
import { useSelector } from 'react-redux';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const totalItems = useSelector(state => state.cart.totalItems);

    const isActivePath = (path) => {
        return matchPath({
            path,
            end: true // Adjust this based on whether you want exact or partial match
        }, location.pathname) !== null;
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <div className='bg-brown-300 flex items-center justify-center h-16 border-b font-Merriweather border-brown-200'>
            <div className='w-10/12 max-w-maxContent flex items-center justify-between'>

                {/* logo */}
                <Link to="/">
                    <img src={logo} loading="lazy" className="w-[93.308px] h-[41.741px]" alt="logo" />
                </Link>

                {/* navlinks */}
                <nav className='hidden md:block'>
                    <ul className='gap-10 flex text-base font-medium'>
                        {
                            NavbarLinks.map((link, index) => {
                                const isActive = isActivePath(link.path);
                                return (
                                    <li key={index}>
                                        <Link to={link.path}>
                                            <p className={` ${isActive ? "text-oragne" : "text-richblack-300"} transition-colors duration-200`}>
                                                {link.title}
                                            </p>
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>

                <div className='flex gap-4 items-center'>
                    <Link to="/search">
                        <CiSearch className='h-6 w-6' />
                    </Link>
                    <Link to="/cart" className="relative">
                        <AiOutlineShoppingCart className='h-6 w-6' />
                        {totalItems > 0 && (
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-richblack-100 transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                    
                    <button className='md:hidden' onClick={toggleMobileMenu}>
                        <RiMenu2Fill />
                    </button>
                    
                    <Link to="/login">
                        <button className='text-base hidden md:block font-medium'>
                            Sign In
                        </button>
                    </Link>
                </div>

            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 bg-brown-300 w-full h-full md:hidden transform transition-transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
                <div className='flex flex-col items-center mt-10'>
                    <div className='flex pl-4 pb-8 border-b border-brown-400 justify-between items-center w-full'>
                        <Link to="/" >
                            <img src={logo} loading="lazy" alt="logo" onClick={toggleMobileMenu} />
                        </Link>
                        <button className='self-end mr-4 mt-4' onClick={toggleMobileMenu}>
                            <RiCloseFill className='h-6 w-6 text-richblack-100' />
                        </button>
                    </div>

                    <ul className='flex w-full flex-col mt-14 items-center gap-4 text-base font-medium'>
                    {
                        NavbarLinks.map((link, index) => {
                            const isActive = isActivePath(link.path);
                            return (
                                <li key={index} className={`w-full ${isActive ? "bg-brown-400" : "bg-brown-300"} border-b border-t border-brown-400 mx-auto`}>
                                    <Link to={link.path} className='w-full text-center block p-2'>
                                        <p onClick={toggleMobileMenu} className={` ${isActive ? "text-orange-300" : "text-richblack-300"} transition-colors duration-200`}>
                                            {link.title}
                                        </p>
                                    </Link>
                                </li>
                            );
                        })
                    }
                    </ul>

                    <Link onClick={toggleMobileMenu} to="/login">
                        <button className='text-base font-medium mt-4'>
                            Sign In
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;





