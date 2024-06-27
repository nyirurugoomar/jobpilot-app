import React from 'react'
import Image from 'next/image'
import { WorkProcess } from '@/constants'

function JobpilotWork() {
  return (
    <div className='md:w-full my-20 b'>
        <div className=''>
          <h1 className='justify-center flex items-center text-[40px] leading-[48px]'>How jobpilot work</h1>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-4 justify-center items-center md:mx-20 md:mt-10 mx-4 md:p-2 gap-10 p-4'>
        {WorkProcess.map((process, index) => (
          <div key={index} className='hover:bg-white md:p-4 md:w-[312px] md:h-[224px] rounded-[12px]'>
            <div className='flex justify-center items-center text-center'>
              <Image src={process.icon} alt={process.title} width={72} height={72} />
            </div>
            <div className='md:space-y-2'>
              <h3 className='text-center md:text-[18px]'>{process.title}</h3>
              <p className='w-[264px] md:text-center md:text-[14px]'>{process.info}</p>
            </div>
          </div>
        ))}
        </div>

    </div>
  )
}

export default JobpilotWork