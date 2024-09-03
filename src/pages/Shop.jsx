import React from 'react'
import Navbar from './../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from './../components/Breadcrumb';

function Shop() {
  return (
    <div className='bg-brown-100 font-Merriweather'>
      <Navbar/>
      <Breadcrumb/>
      <div className='flex h-screen justify-center items-center text-2xl font-medium'>
      Welcome To Shop Page
      </div>
      <Footer/>
      
    </div>
  )
}

export default Shop
