'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { FaSpinner } from 'react-icons/fa';
import axios from "axios";

interface Job {
  _id: any;
  jobTitle: string;
  jobDescription: string;
  jobPeriod: string;
  jobSalary: string;
  companyLogo: string;
  nameCompany: string;
  companyLocation: string;
  postedDate: Date;
}

function FeatureJob() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("/api/jobs");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div className='flex justify-center items-center h-[400px]'>
    <FaSpinner className='animate-spin text-primary' size={48} />
  </div>;
  }

  return (
    <div className="w-full md:mx-18 bg-white md:p-20">
      <div className="md:flex flex md:justify-between justify-between items-center md:mx-0 mx-4">
        <h1 className="md:ml-8 md:text-[40px] text-[25px] md:leading-[48px]">
          Featured job
        </h1>
        <Link href="/AllJob">
          <button className="flex items-center text-primary md:gap-2 border-2 border-gray md:p-2 font-semibold">
            View All
            <FaArrowRight />
          </button>
        </Link>
      </div>
      <div className="grid md:mt-8 grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6 mx-4">
        {jobs.map((job, index) => (
          <Link key={index} href={`/jobs/${job._id}`}>
          
          <div
            

            className="hover:bg-gradient-to-r from-linear to-white p-4 shadow-lg border-2 border-gray cursor-pointer rounded-[8px]"
          >
            <h2 className="md:text-[18px] leading-[28px]">{job.jobTitle}</h2>
            <div className="flex gap-4 items-center">
              <h3 className="text-[#0BA02C] md:text-[12px] bg-[#E7F6EA] p-1 font-semibold">
                {job.jobPeriod}
              </h3>
              <p className="md:text-[14px]">Salary: {job.jobSalary}</p>
            </div>
            <div className="flex mt-4 justify-between items-center">
              <div className="flex gap-2">
                <Image src={job.companyLogo} alt="" width={48} height={48} />
                <div className="grid">
                  <h2 className="md:text-[18px] md:leading-[28px]">
                    {job.nameCompany}
                  </h2>
                  <p className="md:text-[14px]">{job.companyLocation}</p>
                </div>
              </div>
              <div>
                <Image src="/Bookmark.svg" width={24} height={24} alt="" />
              </div>
            </div>
          </div>
          </Link>
          
        ))}
      </div>
    </div>
  );
}

export default FeatureJob;
