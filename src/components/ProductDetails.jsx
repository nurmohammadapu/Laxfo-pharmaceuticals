import React, { useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import ProductCard from './ProductCard';
import productimages from '../data/productimages';
import { CiStethoscope,CiStar,CiPillsBottle1} from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { LiaPrescriptionBottleAltSolid } from "react-icons/lia";
import { SiAmazonwebservices } from "react-icons/si";
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart, resetCart } from '../redux/Slices/cartSlice';
import { useDispatch } from 'react-redux';


function ProductDetails() {
  const dispacth = useDispatch();
  // Initialize with the default values
  const [selectedQuantity, setSelectedQuantity] = useState('100ml');
  const [selectedFlavor, setSelectedFlavor] = useState('Orange'); // Default flavor

  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  const handleFlavorChange = (event) => {
    setSelectedFlavor(event.target.value);
  };

  const sizes = ['100ml', '200ml', '500ml'];

  // Store icon components in an array
  const icons = [
    {
      Icon: CiStethoscope, 
      title: "Founded by Doctors",
    },
    {
      Icon: CiStar, 
      title: "Made In Bangladesh",
    },
    {
      Icon: CiPillsBottle1, 
      title: "Clinically Verified",
    },
    {
      Icon: LiaPrescriptionBottleAltSolid, 
      title: "Halal Ingredients",
    },
    {
      Icon: SiAmazonwebservices , 
      title: "Tested by 3rd Party",
    },
  ];

  // Subscription options
  const subscription = [
    {
      title: "Subscribe & Save 10%",
      description: "FREE SHIPPING + Cancel anytime YOUR SUSBSCRIPTION PERKS +",
      price: "BDT 800",
    },
    {
      title: "One Time Purchase",
      description: "or four interest-free payments of BDT 20 with sezzle",
      price: "BDT 200",
    },
  ];

  // Set default selected subscription to the first item
  const [selectedSubscription, setSelectedSubscription] = useState(subscription[0].title);

  return (
    <div className='w-10/12 font-Merriweather gap-4 flex flex-col md:flex-row justify-between items-start pt-[14px] mx-auto'>
      <ProductCard className='w-[50%]' productimages={productimages} />

      <div className='w-full md:max-w-[50%] flex flex-col gap-4'>

        <div className='flex items-center gap-4'>
        <div className='flex gap-1'>
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <Link to="/reviews" className='font-medium text-xs underline'>
        See all reviews
        </Link>
        </div>

        

        {/* product details  */}
        <div className='flex flex-col gap-4'>

        <p className='text-[40px] font-bold italic'>Liposomal Vitamin C</p>
        <p className='text-2xl italic'>
          BDT <span className='text-[32px] font-bold'>4332.23</span>
        </p>
        <p className='text-base font-medium'>
          Liposomal Vitamin C is an advanced form of Vitamin C encapsulated within liposomes, which are tiny fat-like particles that enhance its absorption and bioavailability in the body.
        </p>
        <p className='text-base font-medium'>
          This delivery method allows for more efficient cellular uptake, ensuring that higher levels of Vitamin C reach the bloodstream and tissues.
        </p>
        <p className='text-base font-medium'>
          It provides potent antioxidant support, boosts the immune system, promotes collagen production, and enhances skin health. Liposomal Vitamin C is ideal for those seeking maximum benefits from their Vitamin C supplementation.
        </p>
        </div>

        
        {/* Select Size */}
        <div className="mt-4 text-sm gap-2 w-full justify-between items-center  flex">
          <p className="font-medium">Select Size</p>
          <div className="flex gap-4">
            {sizes.map((size) => (
              <label
                key={size}
                className={`border font-medium px-4 py-[10px] border-green-300 flex justify-center items-center cursor-pointer ${
                  selectedQuantity === size ? 'bg-green-300 text-white' : 'bg-white text-green-300'
                }`}
              >
                <input
                  type="radio"
                  value={size}
                  checked={selectedQuantity === size}
                  onChange={handleQuantityChange}
                  className="hidden"
                />
                {size}
              </label>
            ))}
          </div>
        </div>

        {/* Select Flavor */}
        <div className="mt-4 gap-2 w-full justify-between items-center  flex">
          <p className="text-sm font-medium">Select Flavor</p>
          <div className="flex gap-4">
            {['Orange', 'Blue Berry', 'Lime'].map((flavor) => (
              <div key={flavor} className="flex gap-2 items-center">
                <input
                  type="radio"
                  id={flavor}
                  value={flavor}
                  checked={selectedFlavor === flavor}
                  onChange={handleFlavorChange}
                  className="hidden peer"
                />
                <div
                  className={`cursor-pointer h-4 w-4 rounded-full ${
                    selectedFlavor === flavor ? 'bg-green-300' : 'bg-richblack-5'
                  }`}
                ></div>
                <label htmlFor={flavor} className="cursor-pointer text-sm">
                  {flavor}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className='w-full mt-8 gap-8 h-[48px] hover:bg-green-400 transition-all duration-200 bg-green-300 flex justify-between items-center text-white p-5'>
          <button 
          onClick={()=>dispacth(removeFromCart())}
           className='w-5 h-5'>
            <FaMinus />
          </button>
          <p className='font-medium text-2xl'>
            Add to Cart
          </p>
          <button
          onClick={()=>dispacth(addToCart())}
          >
            <FaPlus className='w-5 h-5' />
          </button>
        </div>

        {/* Pickup Information */}
        <div className='flex flex-col gap-2'>
          <p className='text-base font-medium'>
            Pickup available at our <span className='font-bold italic'>22 Bistro Place, Banani</span> 
          </p>
          <p className='text-xs font-medium'>
            Usually ready In 2-4 days
          </p>
        </div>

        {/* Subscription Options */}
        <div className="mt-4 gap-8 flex">
          <div className="flex flex-col w-full">
            {subscription.map((flavor) => (
              <div key={flavor.title} className="flex gap-2 p-1 border-richblack-5 border">
                <input
                  type="radio"
                  id={flavor.title}
                  value={flavor.title}
                  checked={selectedSubscription === flavor.title}
                  onChange={(e) => setSelectedSubscription(e.target.value)}
                  className="hidden peer"
                />
                <div
                  className={`cursor-pointer mt-[6px] h-3 w-3 rounded-full ${
                    selectedSubscription === flavor.title ? 'bg-green-300' : 'bg-richblack-5'
                  }`}
                ></div>
                <label
                  htmlFor={flavor.title}
                  className={`w-full cursor-pointer pb-4 ${
                    selectedSubscription === flavor.title ? 'text-black' : 'text-richblack-5'
                  }`}
                >
                  {flavor.title}
                  <div className="flex w-full justify-between">
                    <p>{flavor.description}</p>
                    <p className="text-xl font-medium pr-2">{flavor.price}</p>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Icon Section */}
        <div className="mt-4 flex flex-wrap w-full gap-4 justify-around items-center">
          {icons.map(({ Icon, title }) => (
            <div key={title} className='max-w-[80px] flex flex-col items-center justify-center'>
              <Icon className="w-9 h-9" />
              <p className='text-center w-full'>{title}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;
