import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa6";
import { featuredJob } from '@/constants';
function FeatureJob() {
  return (
    <div className='w-full md:mx-18 bg-white md:p-20'>
      <div className='md:flex md:justify-between justify-between items-center md:mx-0 mx-4'>
        <h1 className='md:ml-8 md:text-[40px] text-[25px] md:leading-[48px]'>Featured job</h1>
        <button className='flex items-center text-primary md:gap-2 border-2 border-gray md:p-2 font-semibold'>
          View All
          <FaArrowRight />
        </button>
      </div>
      <div className='grid md:mt-8 grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6 mx-4'>
        {featuredJob.map((job, index) => (
          <div key={index} className='hover:bg-gradient-to-r from-linear to-white p-4 shadow-lg border-2 border-gray cursor-pointer rounded-[8px]'>
            <h2 className='md:text-[18px] leading-[28px]'>{job.jobTitle}</h2>
            <div className='flex gap-4 items-center'>
              <h3 className='text-[#0BA02C] md:text-[12px] bg-[#E7F6EA] p-1 font-semibold'>{job.jobPeriod}</h3>
              <p className='md:text-[14px]'>Salary: {job.jobSalary}</p>
            </div>
            <div className='flex mt-4 justify-between items-center'>
              <div className='flex gap-2'>
                <Image src={job.companyLogo} alt='' width={48} height={48} />
                <div className='grid'>
                  <h2 className='md:text-[18px] md:leading-[28px]'>{job.nameCompany}</h2>
                  <p className='md:text-[14px]'>{job.companyLocation}</p>
                </div>
              </div>
              <div>
                <Image src='/Bookmark.svg' width={24} height={24} alt='' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureJob;
