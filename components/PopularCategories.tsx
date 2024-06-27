import React from 'react'
import Image from 'next/image'
import { PopularCategory } from '@/constants'
import { FaArrowRight } from "react-icons/fa6";


function PopularCategories() {
  return (
    <div className='w-full md:mx-18 md:mt-20 bg-white md:p-20'>
       <div className='md:ml-16 md:flex md:justify-between items-center'>
            <h1 className='text-[40px] md:leading-[48px]'>Popular category</h1>
            <button className='flex items-center text-primary md:gap-2'>
          View All
          <FaArrowRight />

        </button>
       </div>
       <div className='grid md:mt-6 md:grid grid-cols-1 lg:grid-cols-4 justify-evenly items-center md:mx-8 md:space-y-10 space-y-4 '>
       {PopularCategory.map((category, index) => (
          <div key={index} className='flex gap-4 bg-[#fbfbfb] hover:bg-white hover:shadow-lg p-4 md:w-[312px] md:mx-auto mx-6 rounded-[8px]'>
            <Image src={category.icon} alt={category.title} width={68} height={68} />
            <div className='grid'>
              <h2 className='md:text-[18px] md:leading-[28px]'>{category.title}</h2>
              <p>{category.OpenPositon} Open positions</p>
            </div>
          </div>
        ))}
       </div>
    </div>
  )
}

export default PopularCategories