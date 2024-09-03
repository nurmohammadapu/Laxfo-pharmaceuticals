import React from 'react';
import images from "../assets/frame3.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { RiCloseFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus } from "react-icons/fa";
import { addToCart, removeFromCart, resetCart } from '../redux/Slices/cartSlice';
import { MdDelete } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";



const Cart = () => {
    const dispacth = useDispatch();
    const cart = useSelector(state => state.cart.cart); 
    const total = useSelector(state => state.cart.total); 
    const totalItems = useSelector(state => state.cart.totalItems);



    return (
        <div className='font-Merriweather  bg-brown-100 '>

        {
            cart>0 ? (
        <div className='w-full mx-auto  justify-between flex flex-col h-screen'>

            {/* card info  */}
            <div>
            <div className='flex pt-4 w-10/12 mx-auto items-center justify-between'>
                <p className='text-2xl font-medium'>Shopping Cart</p>
                <Link to="/">
                <RiCloseFill/>
                </Link>
                 
            </div>
            
            <div className='p-4 w-10/12  mx-auto flex flex-col gap-2 text-base font-medium'>  
            <p >Add items worth Tk 30 for free shopping</p>
            <div className='h-1 bg-green-300 rounded-md'>
            </div>
            <p className='font-semibold'>Added items ({totalItems} Items)</p>
            </div>

            {/* card  */}
            <div className=' w-10/12 mx-auto flex gap-2 pb-2 justify-between border-b border-brown-300'>
            <div className='flex gap-5 justify-between '>
                    <img src={images} width={61} height={55} loading='lazy' alt="images" />
                    <div className='flex flex-col gap-2'>
                        <p>Tropical Fruit Trio
                        (Rambutan)</p>
                        <div className='flex bg-brown-300 border-2 rounded-3xl border-green-300 justify-between p-2'>
                    <button 
                    onClick={()=>dispacth(removeFromCart())}
                    >
                        <FaMinus />
                    </button>
                    <p className='font-medium'>
                        {totalItems}
                    </p>
                    <button
                    onClick={()=>dispacth(addToCart())}
                    >
                        <FaPlus />
                    </button>
                        </div>
                </div>
            </div>
            <div className='flex flex-col text-sm items-end justify-between'>
                <p className='flex justify-center font-semibold items-center'><TbCurrencyTaka className='w-4 h-4' />{total}</p>
                <MdDelete className='text-deepred' onClick={()=> dispacth(resetCart())} />
            </div>
             </div>
            </div>
            <div className='w-full bg-brown-300'>
                <div className='p-4 w-10/12 max-w-maxContent mx-auto flex items-center gap-4 flex-col'>
                    <div className='flex w-full gap-4 justify-between'>
                        <p>Subtotal</p>
                        <p className='font-semibold'>Tk. {total}</p>
                    </div>
                    <Link 
                    to="/checkout"
                    className='bg-green-300 text-center rounded-3xl w-full px-[75px] py-1 text-white'>
                        Checkout
                    </Link>
                </div>
            </div>
        </div>
            ) : (
                <div className='flex flex-col gap-3 items-center justify-center  h-screen'>
                    <p className='text-2xl'>
                    No Products Found
                    </p>
                    
                    <Link to="/" className='bg-green-300 p-2 rounded-md mx-auto text-white font-medium'>
                      Buy Something
                    </Link>
                </div>
            )
        }


        </div>
    );
};

export default Cart;
