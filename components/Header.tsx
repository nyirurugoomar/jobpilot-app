import { CiSearch } from 'react-icons/ci';
import Image from 'next/image';

function Header() {
  return (
    <div className='md:w-full bg-white'>
     <div className='grid md:mt-4 md:flex grid-cols-2 lg:grid-cols-3 justify-center space-x-10 items-center md:mx-auto mx-2 md:p-4'>
        <div className=''>
          <Image src='/Logo.png' width={143} height={40} alt=''/>
        </div>
        <div>
        <div className=''>
            <form action='' className='md:flex grid md:space-y-0 space-y-4 border-2 border-gray rounded-[5px]  '>
                <div className='relative'>
                    <input
                         type='select'
                         className='w-full  h-[50px] py-2 px-8 border-r-2 border-gray text-[16px] rounded-sm focus:outline-none md:w-[150px] '
                         placeholder='Select country'
                     />
                    <div className='absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none'>
                        <CiSearch className='text-[#0066FF]' size={10} />
                     </div>
                 </div>
                <div className='relative'>
                     <input
                         type='text'
                         className='w-full mt-[2.1px] h-[50px] py-2 px-8 text-[16px]  rounded-sm focus:outline-none md:w-[668px] p-6'
                         placeholder='Job tittle, keyword, company'
                     />
                     <div className='absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none'>
                         <CiSearch className='text-[#0066FF] ' size={22} />
                     </div>
                </div>
         </form>
     </div>
        </div>
        <div className='md:flex md:gap-4'>
          <button className='border-2 border-gray h-[56px] w-[120px] text-primary text-[16px] rounded-md'>Sign in</button>
          <button className='bg-primary h-[56px] w-[131px] text-white text-[16px] rounded-md'>Post a Jobs</button>
        </div>
     </div>
    </div>
  )
}

export default Header