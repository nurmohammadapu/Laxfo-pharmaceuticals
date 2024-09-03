import React, { useState } from 'react';
import Bottle from "../assets/Bottleimage.png";
import { Infromation } from './../data/information';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

function InformationTable() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the dropdown if it's already active
    } else {
      setActiveIndex(index); // Open the clicked dropdown
    }
  };

  return (
    <div className='border-b border-t mb-10 mt-10 font-Merriweather border-brown-300'>
      <div className='w-10/12 mx-auto  flex flex-col-reverse lg:flex-row justify-between items-center'>
        <div className='w-full max-w-[616px]'>
          {Infromation.map((data, index) => (
            <div key={index} className="mb-4 w-full flex flex-col gap-6  border-b pb-4 border-brown-200">
              <div className='flex w-full items-center justify-between'>
                <p className='font-medium text-2xl'>{data.name}</p>
                <button onClick={() => toggleDropdown(index)} className="ml-2 transition-all duration-400">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              {activeIndex === index && (
                <p className='max-w-[606px] pb-4 pl-2 pr-2 text-base font-medium'>{data.description}</p>
              )}
            </div>
          ))}
        </div>
        <img src={Bottle} loading="lazy"  alt="BottleImg" width={500} height={500} className='lg:max-w-[50%]' />
      </div>
    </div>
  );
}

export default InformationTable;

