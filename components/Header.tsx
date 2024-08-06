'use client'
import { CiSearch } from 'react-icons/ci';
import Image from 'next/image';
import Link from 'next/link';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';
import { E164Number } from 'libphonenumber-js/core';

function Header() {
  const [value, setValue] = useState<E164Number | undefined>(undefined);

  return (
    <div className='md:w-full bg-white'>
      <div className='md:mt-4 md:flex grid-cols-2 lg:grid-cols-3 justify-center space-x-10 items-center md:mx-auto mx-2 md:p-4'>
        <Link href='/'>
          <div className=''>
            <Image src='/Logo.png' width={143} height={40} alt=''/>
          </div>
        </Link>
        <div>
          <div className=''>
            <form action='' className='md:flex md:space-y-0 space-y-4 border-2 border-gray rounded-[5px]'>
              <div className='relative'>
                <PhoneInput
                  international
                  withCountryCallingCode
                  defaultCountry='RW'
                  value={value}
                  onChange={setValue}
                  className='w-full h-[50px] py-2 px-8 border-r-2 border-gray text-[16px] rounded-sm focus:outline-none md:w-[150px]'
                  placeholder='Select country'
                />
              </div>
              <div className='relative border-2 md:border-0 border-gray'>
                <input
                  type='text'
                  className='w-full mt-[2.1px] h-[50px] py-2 px-8 text-[16px] rounded-sm focus:outline-none md:w-[668px] p-6'
                  placeholder='Job title, keyword, company'
                />
                <div className='absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none'>
                  <CiSearch className='text-[#0066FF]' size={22} />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='md:flex md:gap-4 md:space-x-0 space-x-4 md:mt-0 mt-4  '>
          <a href='/Login'>
            <button className='border-2 border-gray h-[56px] w-[120px] text-primary text-[16px] hover:bg-primary hover:text-white rounded-md'>Sign in</button>
          </a>
          <a href='/postJob'>
          <button className='bg-primary h-[56px] w-[131px] text-white text-[16px] rounded-md'>Post a Job</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
