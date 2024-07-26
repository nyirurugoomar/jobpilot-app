'use client'
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaSpinner } from 'react-icons/fa';
import Image from 'next/image';
import { JobType } from '@/types/job';
import axios from 'axios'; // I
import Link from 'next/link';

const jobsPerPage = 9;

function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [currentJobs, setCurrentJobs] = useState<JobType[]>([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/jobs?page=${currentPage}`) // Adjust URL as per your API endpoint
      .then(response => {
        setCurrentJobs(response.data); // Assuming response.data is an array of JobType
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      });
  }, [currentPage]);

  // Calculate total pages based on currentJobs length
  const totalPages = Math.ceil(currentJobs.length / jobsPerPage);

  // Function to handle previous page button click
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to handle next page button click
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle clicking on a specific page number
  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the jobs to display on the current page
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const jobsToShow = currentJobs.slice(startIndex, endIndex);

  return (
    <div className='w-full md:mx-18 bg-white'>
      <div className='md:flex flex md:justify-between justify-between items-center md:mx-0 md:px-20 mx-4 bg-[#F1F2F4] md:h-[76px]'>
        <h1 className='md:ml-8 md:text-[15px] text-[20px] md:leading-[28px]'>Find Job</h1>
        <code className='md:mr-8 md:text-[15px] text-[20px] md:leading-[28px] text-gray-500'><Link href='/'>Home</Link> / <span className='text-black'>Find job</span></code>
      </div>
      {loading ? (
        <div className='flex justify-center items-center h-[400px]'>
          <FaSpinner className='animate-spin text-primary' size={48} />
        </div>
      ) : (
        <div className='grid md:py-10 grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6 mx-4 md:mx-24'>
          {jobsToShow.map((job, index) => (
          <Link key={index} href={`/jobs/${job._id}`} >
           <div  className='hover:bg-gradient-to-r from-linear to-white p-4 shadow-lg border-2 border-gray cursor-pointer rounded-[8px]'>
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
          </Link>
            
          ))}
        </div>
      )}
      <div className='md:flex justify-center md:gap-2 md:pb-6'>
        <button
          onClick={handlePrevPage}
          className={`text-primary hover:bg-[#E7F0FA] md:h-[48px] md:w-[48px] rounded-full items-center justify-center md:flex ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentPage === 1}
        >
          <FaArrowLeft size={24}/>
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={`hover:bg-[#F1F2F4] rounded-full md:h-[48px] md:w-[48px] ${currentPage === index + 1 ? 'bg-primary text-white' : ''}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className={`text-primary hover:bg-[#E7F0FA] md:h-[48px] md:w-[48px] rounded-full items-center justify-center flex ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentPage === totalPages}
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default Page;
