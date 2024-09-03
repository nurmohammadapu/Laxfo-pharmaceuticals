import React from 'react'
import logo from "../assets/footerlogo.svg"
import { Link } from 'react-router-dom';
import { FaArrowRight,FaInstagram,FaWhatsapp ,FaFacebookF  } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { VscCallOutgoing } from "react-icons/vsc";


function Footer() {
  return (
    <div className='bg-green-400 font-Merriweather'>
      <div className='w-10/12 pb-10 pt-14 gap-9 min-h-[173px] max-w-maxContent mx-auto flex flex-col md:flex-row justify-between items-center text-white relative'>
        
        {/* logo */}
        <Link to="/">
        <img src={logo} loading="lazy"  className="w-[186.616px] h-[83.481px] absolute top-[61px] left-4  md:relative md:top-0 md:left-0 text-white" alt="logo" />
        </Link>

        <div className='max-w-[442px] mt-20 md:mt-0 flex flex-col gap-[27px] border-b'>
        <p className='text-base font-medium text-center'>
        Subscribe to the newsletter and always stay updated on the 
        latest news and exclusive promotions.
        </p>
        <div className='flex justify-between'>
            <p>Your Email address</p>
            <Link to="/submit">
            <button className='flex justify-center items-center gap-[6px]'>
               Submit 
               <FaArrowRight className='w-[15px] h-[15px] rotate-[-39.026deg] ' />

            </button>
            </Link>

        </div>
        </div>

        <div className='flex flex-col gap-3 items-start'>
            <p className='text-base font-medium'>We are here to help</p>
            <div className='flex gap-5'>
              
              <Link to="/facebook" className='w-9 h-9  flex justify-center items-center border-2 bg-green-400 border-white rounded-full'>
              <FaFacebookF   className='w-6 h-6'  />
              </Link>
              
              <Link to="/instagram" className='w-9 h-9 flex justify-center items-center border-2 bg-green-400 border-white rounded-full'>
              <FaInstagram className='w-6 h-6'  />
              </Link>

              <Link to="/callOutgoing" className='w-9 h-9 flex justify-center items-center border-2 bg-green-400 border-white rounded-full'>
              <VscCallOutgoing className='w-6 h-6'  />
              </Link>

              <Link to="/whatsapp" className='w-9 h-9 flex justify-center items-center border-2 bg-green-400 border-white rounded-full'>
              
              <FaWhatsapp  className='w-6 h-6'  />
              </Link>

              <Link to="/messenger" className='w-9 h-9 flex justify-center items-center border-2 bg-green-400 border-white rounded-full'>
              <RiMessengerLine className='w-6 h-6'  />
              </Link>
            </div>

        </div>

      </div>
    </div>
  )
}

export default Footer
