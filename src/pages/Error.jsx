import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import Breadcrumb from './../components/Breadcrumb';



function Error() {
  return (


    

    <div className='bg-brown-100 font-Merriweather'>
            <Navbar/>
            <Breadcrumb/>
            <div className='flex h-screen flex-col gap-5 justify-center items-center text-2xl font-medium'>
            <p className='text-2xl'>
            404 Not Found
            </p>
            <Link to="/" className='bg-green-300 p-2 rounded-md mx-auto text-white font-medium'>
            Go to Home
            </Link>
            </div>

                    
 
            <Footer/>
        </div>

  )
}

export default Error
