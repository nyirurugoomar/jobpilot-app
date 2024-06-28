import React from 'react'
import Image from 'next/image'
import { companies } from '@/constants'

function TopCampany() {
  return (
    <div className='w-full md:mx-18  bg-white md:p-20'>
        <div className='md:ml-4 ml-2'>
          <h1 className='md:text-[40px] text-[20px] md:leading-[48px]'>Top companies</h1>
      </div>
       <div className='grid md:mt-8 grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 mx-4 '>
        {companies.map((company,index) =>(
            <div key={index} className='space-y-4 border-2 border-gray p-4 md:w-[424px] rounded-[8px] md:gap-8'>
            <div className='flex gap-2'>
                <Image src={company.companyLogo} alt='' width={56} height={56} />
                <div className='grid'>
                  <div className='flex gap-4 items-center'>
                  <h2 className='md:text-[18px] md:leading-[28px]'>{company.companyName}</h2>
                  <p className='p-1 md:w-[83px] text-[14px] text-[#E05151] text-center bg-[#FCEEEE] rounded-[52px]'>Featured</p>

                  </div>
                  <p className='md:text-[14px]'>{company.companyLocation}</p>
                </div>
              </div>
              <button className='w-full h-[48px] bg-[#E7F0FA] hover:bg-primary hover:text-white text-primary rounded-[3px]'>Open Position (3)</button>
           </div>
        ))}
           
       </div>
    </div>
  )
}

export default TopCampany