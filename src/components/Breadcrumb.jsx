import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PiGreaterThan } from "react-icons/pi";
import { GoHeart } from "react-icons/go";

function Breadcrumb() {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(path => path); // Split and filter empty paths

    return (
        <div className="bg-brown-100 border-b py-6 font-Merriweather border-brown-300 ">
            <div className="w-10/12 flex justify-between max-w-maxContent mx-auto">
                <nav className="text-base">
                    <ul className="flex gap-2">
                        <li>
                            <Link to="/" className="text-richblack-100 hover:text-oragne transition-all duration-200">Home</Link>
                        </li>
                        {paths.map((path, index) => {
                            const fullPath = `/${paths.slice(0, index + 1).join('/')}`;
                            const isLast = index === paths.length - 1;
                            return (
                                <li key={index} className="flex items-center">
                                    <span className="mx-2"><PiGreaterThan /></span>
                                    {isLast ? (
                                        <span className="text-richblack-100">{decodeURIComponent(path)}</span>
                                    ) : (
                                        <Link to={fullPath} className="text-richblack-100 hover:text-oragne transition-all duration-200">
                                            {decodeURIComponent(path)}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <Link to="/cart" className='text-xs font-semibold underline italic hidden sm:block'>Add to Wishlist</Link>
                <Link to="/cart" className='text-xs font-semibold underline italic sm:hidden'><GoHeart className='w-6 h-6' /></Link>
            </div>
        </div>
    );
}

export default Breadcrumb;
