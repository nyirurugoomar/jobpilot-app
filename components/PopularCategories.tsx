import React from 'react'
import Image from 'next/image'
import { PopularCategory } from '@/constants'
import { FaArrowRight } from "react-icons/fa6";


function PopularCategories() {
  return (
    <div className='w-full md:mx-18 md:mt-20 bg-white md:p-20'>
       <div className=' md:flex flex md:justify-between justify-between items-center md:mx-0 mx-4'>
            <h1 className=' md:ml-8 md:text-[40px] text-[25px] md:leading-[48px]'>Popular category</h1>
            <button className='flex items-center text-primary md:gap-2  border-2 border-gray md:p-2 font-semibold'>
          View All
          <FaArrowRight />

        </button>
       </div>
       <div className='grid md:mt-8 grid-cols-1 lg:grid-cols-4 gap-8 md:gap-6 mx-4'>
       {PopularCategory.map((category, index) => (
          <div key={index} className='flex gap-2 bg-[#fbfbfb] hover:bg-white hover:shadow-lg p-4 md:w-[312px] md:mx-auto mx-6 rounded-[8px]'>
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