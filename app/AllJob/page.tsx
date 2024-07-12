// 'use client';

// import React, { useState, useEffect } from 'react';
// import { featuredJob } from '@/constants';
// import { FaArrowLeft, FaArrowRight, FaSpinner } from 'react-icons/fa';
// import Image from 'next/image';
// import { JobType } from '@/types/job';



// const jobsPerPage = 9;

// function Page() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [currentJobs, setCurrentJobs] = useState<JobType[]>([]);

//   useEffect(() => {
//     setLoading(true);
//     // Simulating a fetch request with a timeout
//     setTimeout(() => {
//       const jobs = featuredJob.slice(
//         (currentPage - 1) * jobsPerPage,
//         currentPage * jobsPerPage
//       );
//       setCurrentJobs(jobs);
//       setLoading(false);
//     }, 500); // Simulate a 500ms delay for fetching data
//   }, [currentPage]);

//   const totalPages = Math.ceil(featuredJob.length / jobsPerPage);

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePageClick = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className='w-full md:mx-18 bg-white'>
//       <div className='md:flex flex md:justify-between justify-between items-center md:mx-0 md:px-20 mx-4 bg-[#F1F2F4] md:h-[76px]'>
//         <h1 className='md:ml-8 md:text-[18px] text-[20px] md:leading-[28px]'>Find Job</h1>
//         <h1 className='md:mr-8 md:text-[18px] text-[20px] md:leading-[28px] text-gray-500'>Home / <span className='text-black'>Find job</span></h1>
//       </div>
//       {loading ? (
//         <div className='flex justify-center items-center h-[400px]'>
//           <FaSpinner className='animate-spin text-primary' size={48} />
//         </div>
//       ) : (
//         <div className='grid md:py-10 grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6 mx-4 md:mx-24'>
//           {currentJobs.map((job, index) => (
//             <div key={index} className='hover:bg-gradient-to-r from-linear to-white p-4 shadow-lg border-2 border-gray cursor-pointer rounded-[8px]'>
//               <h2 className='md:text-[18px] leading-[28px]'>{job.jobTitle}</h2>
//               <div className='flex gap-4 items-center'>
//                 <h3 className='text-[#0BA02C] md:text-[12px] bg-[#E7F6EA] p-1 font-semibold'>{job.jobPeriod}</h3>
//                 <p className='md:text-[14px]'>Salary: {job.jobSalary}</p>
//               </div>
//               <div className='flex mt-4 justify-between items-center'>
//                 <div className='flex gap-2'>
//                   <Image src={job.companyLogo} alt='' width={48} height={48} />
//                   <div className='grid'>
//                     <h2 className='md:text-[18px] md:leading-[28px]'>{job.nameCompany}</h2>
//                     <p className='md:text-[14px]'>{job.companyLocation}</p>
//                   </div>
//                 </div>
//                 <div>
//                   <Image src='/Bookmark.svg' width={24} height={24} alt='' />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       <div className='md:flex justify-center md:gap-2 md:pb-6'>
//         <button
//           onClick={handlePrevPage}
//           className={`text-primary hover:bg-[#E7F0FA] md:h-[48px] md:w-[48px] rounded-full items-center justify-center md:flex ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
//           disabled={currentPage === 1}
//         >
//           <FaArrowLeft size={24}/>
//         </button>
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => handlePageClick(index + 1)}
//             className={`hover:bg-[#F1F2F4] rounded-full md:h-[48px] md:w-[48px] ${currentPage === index + 1 ? 'bg-primary text-white' : ''}`}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button
//           onClick={handleNextPage}
//           className={`text-primary hover:bg-[#E7F0FA] md:h-[48px] md:w-[48px] rounded-full items-center justify-center flex ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
//           disabled={currentPage === totalPages}
//         >
//           <FaArrowRight size={24} />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Page;
