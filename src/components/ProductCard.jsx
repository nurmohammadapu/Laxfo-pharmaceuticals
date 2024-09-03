import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

function ProductCard({ productimages }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [scrollIndex, setScrollIndex] = useState(0);
    const thumbnailsToShow = 4; // Number of thumbnails to display at a time

    const totalThumbnails = productimages.length;

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % totalThumbnails;
            if (newIndex >= scrollIndex + thumbnailsToShow) {
                setScrollIndex((prevScrollIndex) => (prevScrollIndex + 1) % (totalThumbnails - thumbnailsToShow + 1));
            }
            return newIndex;
        });
    };

    const handlePreviousImage = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + totalThumbnails) % totalThumbnails;
            if (newIndex < scrollIndex) {
                setScrollIndex((prevScrollIndex) => (prevScrollIndex - 1 + (totalThumbnails - thumbnailsToShow + 1)) % (totalThumbnails - thumbnailsToShow + 1));
            }
            return newIndex;
        });
    };



    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
        if (index < scrollIndex) {
            setScrollIndex(index);
        } else if (index >= scrollIndex + thumbnailsToShow) {
            setScrollIndex(index - thumbnailsToShow + 1);
        }
    };

    return (
        <div className='flex flex-col font-Merriweather items-center justify-center gap-8'>
            {/* Display the large image */}
            <div className='max-w-[600px] overflow-hidden h-[600px] flex items-center justify-center'>
                <img
                    loading="lazy"
                    src={productimages[currentIndex].image}
                    alt='Product'
                    className='w-full h-full object-cover transition-transform duration-200'
                />
            </div>

            {/* Navigation Arrows for Main Image */}
            <div className=' max-w-[600px]  max-h-[600px] flex gap-4 justify-center items-center'>
                {/* Navigation Arrows for Main Image */}
                <div
                    className='bg-richblack-5 w-[34px] h-[34px] items-center justify-center rounded-full p-2 cursor-pointer'
                    onClick={handlePreviousImage}
                >
                    <FaArrowLeft />
                </div>
                {/* Thumbnail slider */}
                <div className='relative flex items-center w-full overflow-hidden'>
                    <div
                        className='flex gap-4'
                        style={{
                            transform: `translateX(-${scrollIndex * (100 / thumbnailsToShow)}%)`,
                            transition: 'transform 200ms ease'
                        }}
                    >
                        {productimages.map((data, index) => (
                            <div key={index} className='flex-shrink-0'>
                                <img
                                    loading="lazy"
                                    src={data.image}
                                    alt={`Thumbnail ${index}`}
                                    className={`cursor-pointer w-20 h-20 object-cover transition-transform duration-200 ${index === currentIndex ? 'border-2 border-blue-500' : ''}`}
                                    onClick={() => handleThumbnailClick(index)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {/* right arrow key  */}
                <div
                    className='bg-richblack-5 w-[34px] h-[34px] items-center justify-center rounded-full p-2 cursor-pointer'
                    onClick={handleNextImage}
                >
                    <FaArrowRight />
                </div>
            </div>
            
        </div>
    );
}

export default ProductCard;















