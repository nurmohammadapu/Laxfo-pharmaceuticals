import React from 'react'
import { reviewData } from './../data/reviewdata';
import { FaRegStar } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiOutlineLike,AiOutlineDislike  } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';
function ReviewSlider() {


  return (
    <div className='border-brown-200 bg-brown-100 border-b border-t '>
    <div className='font-Merriweather  bg-brown-100 w-10/12 mb-14 mx-auto'>
      <div>
        <div className='mt-6 mb-14 flex flex-col lg:flex-row gap-10  justify-between items-start lg:items-end'>
          <div>
            <p className='text-[40px] font-medium'>
            Reviews
            </p>
            <Link to="write-a-review">
          <button className="flex pt-[14px] pr-[52px] pb-[14px] pl-[51px] justify-center items-center bg-green-300 text-white hover:bg-green-400 transition-all duration-200 " >
          Write a Review
          </button>
          </Link>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='border-b max-w-maxContent border-richblack-100 text-base font-medium'>
            Filter Reviews
            </p>
            <div className='flex flex-col items-start md:flex-row lg:flex-row md:items-center justify-between gap-5'>
            <button
            className="inline-flex h-[34px] p-[9px_21px_9px_12px] bg-green-300 text-white justify-center items-center gap-[97px] flex-shrink-0"
            >
            Search
          <CiSearch className='w-4 h-4'/>
          </button>
          <button className='inline-flex border p-[5px_12px] justify-center items-center gap-[76px]'>   
          Images & Videos
            <IoMdArrowDropdown className='w-4 h-4'/>
            </button>

            </div>

          </div>
        </div>
        {/* reviews  */}
        {
          reviewData.map((data,index)=>(
            <div key={index}
            className='text-base border-b flex flex-col gap-4 border-brown-400 mt-5 pb-8'
            >

              <div className='flex justify-between  items-center'>
              <div className='flex items-center justify-center gap-[9px]'>
                <div className='w-6 h-6 flex items-center justify-center rounded-full bg-richblack-5'>
                <FaRegUser />
                </div>

                <p className='italic font-normal'>{data.name}</p>
              </div>
              <p className='italic font-normal'>{data.date}</p>
              </div>
              <div className='flex gap-5 items-center '>
                <div className='flex gap-[2px]'>
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                </div>
                {data.prodcuctName}
              </div>

              <div className='flex flex-col gap-2 md:flex-row  md:justify-between md:items-end'>
                <p className='max-w-[738px] leading-normal'>{data.description}</p>
                <div className='flex gap-[13px]'>
                  {data.comment}
                  <AiOutlineLike className='w-6 h-6' />
                  <AiOutlineDislike className='w-6 h-6' />
                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div>

    </div>

  )
}

export default ReviewSlider
