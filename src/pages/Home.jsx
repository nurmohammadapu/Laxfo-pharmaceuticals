import React from 'react'
import Navbar from './../components/Navbar';
import Welcome from './../components/Welcome';
import Farmer from "../assets/farmer.jpg"
import Flower from "../assets/image 242.png"
import { ProductData } from './../data/productdata';
import ReviewSlider from './../components/ReviewSlider';
import Footer from './../components/Footer';
import { Link } from 'react-router-dom';
import InformationTable from './../components/InformationTable';
import ProductDetails from './../components/ProductDetails';
import Breadcrumb from './../components/Breadcrumb';


function Home() {


  return (
    <div className='bg-brown-100 font-Merriweather'>

    {/* section 1  */}
      <Welcome/>
      <Navbar/>

      {/* section 2  */}
      <Breadcrumb/>
      <ProductDetails/>

      {/* section 3  */}
      <InformationTable/>

      {/* section 4 */}
      <div className='flex flex-col md:flex-row gap-[51px] mx-auto bg-green-200 items-center'>
      <div 
        className="bg-cover bg-no-repeat  md:max-w-[50%] max-h-[586px] w-full" 
        style={{ backgroundImage: `url(${Farmer})`, backgroundColor: '#2C4236' }}
      >
        <img 
          src={Farmer}  
            
          alt="farmer img" 
          className='w-full h-auto max-h-[586px]' // Hide on medium screens and up
        />
      </div>
      <div className='max-w-[50%] pb-12  md:pb-0 '>
        <p className='text-3xl leading-normal md:text-[40px] w-full md:max-w-[487px] font-normal font-Merriweather text-white italic'>
          As a certified organic, family-run pharmaceutical, our Laxfo goes directly from us to you
          —with love.
        </p>  
      </div>
      </div>



      {/* section 5  */}
      <div className='border-b border-t mb-10 mt-10 p-6 border-brown-200'>
      <div className='w-10/12 flex flex-col gap-10 max-w-maxContent mx-auto  text-richblack-100'>
      {/* heading  */}
        <div className='flex flex-col gap-4 items-start'>
            <h1 className='text-[40px] font-medium text-richblack-100'>
            Frequently Bought Together
            </h1>
            <p className='text-base font-normal italic text-richblack-100'>
            In the dynamic world of e-commerce, the "Frequently Bought Together" feature has become a cornerstone of the online shopping experience. This tool leverages the power of data analytics and consumer behavior insights to suggest complementary products that are often purchased in conjunction with the item a customer is viewing. 
            </p>
        </div>
        {/* product section  */}
        <div className='flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center gap-6'>
        {
            ProductData.map((data,index)=>(
                <div key={index} 
                className='w-full md:max-w-[295px] flex flex-col gap-4
                '>
                  <img 
                  className='max-h-[401px] w-full object-cover'
                  src={data.image} 
                  alt="prodcut image" 
                  />  
                  <div className='flex flex-row text-[20px] justify-between'>
                    <p className='font-medium'>
                        {data.Name}
                        </p>
                    <p className='italic font-normal'>
                        BDT {data.Price}
                        </p>
                  </div>
                  <p className='text-xs font-medium'>
                    {data.Description}
                    </p>
                  <p className='text-xs font-normal italic'>
                    {data.Quantity}
                    </p>

                </div>
            ))
        }
        </div>
        <div>

        </div>
      </div>
      </div>
   
     {/* section 6 */}
     <ReviewSlider/>
      
      {/* section 7 */}
      <div className='bg-brown-500 mt-14 text-richblack-100'>
        <div className='w-10/12 mx-auto flex flex-col md:flex-row justify-between md:items-center'>
        <div>
          <img src={Flower} alt="Flower" />
        </div>
        <div className='flex flex-col pb-10 items-start font-medium gap-6 text-base'>
          <div className='flex flex-col gap-[10px]'>
          <p>Not Sure where to Start?</p>
          <p className='text-[40px] leading-[40px] max-w-[419px]'
          >Book a Free 25 Minute Consultation</p>
          </div>
          <Link to="book-a-therapy">
          <button className="flex pt-[14px] pr-[52px] pb-[14px] pl-[51px] justify-center items-center bg-green-300 text-white hover:bg-green-400 transition-all duration-200 " >
          Book Consultation
          </button>
          </Link>

        </div>

        </div>
      </div>
      <div className='bg-red  pt-4 pr-20 pb-3.5 pl-20 text-white'>
        <div className='w-11/12 mx-auto text-center flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-24'>
          <div className='flex flex-col  text-2xl font-medium gap-3'>
            <p>
            Free BD shopping Over <span className='italic font-normal'>BDT 1500</span> 
            </p>
            <Link to="/shop">
              Shop Now
            </Link>
          </div>
          <div className='flex flex-col  text-2xl font-medium gap-3'>
            <p>
            <span className='italic font-normal'>3-5 Day</span> International Shipping
            </p>
            <Link to="/learnmore">
            Learn More
            </Link>
          </div>
          <div className='flex flex-col  text-2xl font-medium gap-3'>
            <p>
            Rated <span className='italic font-normal'>4.8 out of 5</span> on Trustpilot
            </p>
            <Link to="/reviews">
            Read our reviews
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
