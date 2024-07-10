import React from 'react'
import Link from 'next/link';

function SubHeader() {
  return (
    <div className='w-full'>
        <div className='grid md:mt-4 md:flex grid-cols-2 lg:grid-cols-3 justify-between md:mx-16 mx-2'>
           <div>
           <ul className='md:flex md:gap-4 md:text-[16px]  font-[400px] md:leading-[20px] text-[#5E6670] '>
            <Link href='/'><li  className='hover:underline underline-offset-8 decoration-primary decoration-4 hover:text-primary'>Home</li></Link>
            <Link href='/AllJob'><li className='hover:underline underline-offset-8 decoration-primary decoration-4 hover:text-primary'>Find Job</li></Link>
            <li className='hover:underline underline-offset-8 decoration-primary decoration-4 hover:text-primary'>Employers</li>
            <li className='hover:underline underline-offset-8 decoration-primary decoration-4 hover:text-primary'>Candidates</li>
            <li className='hover:underline underline-offset-8 decoration-primary decoration-4 hover:text-primary'>Pricing Plans</li>
            <li className='hover:underline underline-offset-8 decoration-primary decoration-4 hover:text-primary'>Customer Supports</li>
           </ul>
           </div>
           <div className='md:flex md:gap-2 md:text-[16px]  font-[400px] md:leading-[20px]'>
             <h3>+1-202-555-0178</h3>
             <button>selector butto</button>
           </div>
        </div>
    </div>
  )
}

export default SubHeader