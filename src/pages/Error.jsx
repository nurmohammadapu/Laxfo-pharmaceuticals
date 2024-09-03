import React from 'react'
import { Link } from 'react-router-dom';


function Error() {
  return (

    <div className='flex font-Merriweather flex-col gap-3 items-center justify-center  h-screen bg-brown-100'>

            <p className='text-2xl'>
            404 Not Found
            </p>
                    
            <Link to="/" className='bg-green-300 p-2 rounded-md mx-auto text-white font-medium'>
            Go to Home
            </Link>
        </div>

  )
}

export default Error
