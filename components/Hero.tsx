import React from 'react';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { IoLocationOutline } from "react-icons/io5";



function Hero(){
    return (
        <div className='w-full md:mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center mx-auto md:p-24 gap-28'>
                <div className=''>
                    <h1 className='text-[50px] font-bold '>Find a job that suits your interest & skills.</h1>
                    <p className='text-base mt-4 leading-7 w-[536px]'>Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit vestibulum.</p>
                    <div className='mt-4 bg-white '>
                        <form action='' className='md:flex p-2  '>
                            <div className='relative'>
                                <input
                                    type='text'
                                    className='w-full mt-[2.1px] h-[50px] py-2 px-8 border-r-2 border-gray text-[16px] rounded-sm focus:outline-none '
                                    placeholder='Job title, Keyword...'
                                />
                                <div className='absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none'>
                                    <CiSearch className='text-[#0066FF]' size={20} />
                                </div>
                            </div>
                            <div className='relative'>
                                <input
                                    type='text'
                                    className='w-full mt-[2.1px] h-[50px] py-2 px-8 text-[16px]  rounded-sm focus:outline-none'
                                    placeholder='Your Location'
                                />
                                <div className='absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none'>
                                    <IoLocationOutline className='text-[#0066FF]' size={20} />
                                </div>
                            </div>
                            <button className='bg-primary h-[56px] w-[131px] text-white text-[16px] rounded-md'>Find Job</button>
                        </form>
                    </div>
                </div>
                <div className=''>
                    <Image src='/illustration.png' alt='' height={382} width={492} />
                </div>
            </div>
        </div>
    );
};

export default Hero;
