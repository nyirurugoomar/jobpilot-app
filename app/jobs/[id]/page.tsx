"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { FaSpinner } from "react-icons/fa";
import Link from "next/link";

interface Job {
    jobTitle: string;
    jobPeriod: string;
    jobSalary: string;
    companyLogo: string;
    jobDescription:string;
    nameCompany: string;
    companyLocation: string;
    jobExprience:string;
    jobEducation:string;
    jobLevel:string;
    jobExpire:Date;
    postedDate: Date;
}

const JobDetail = () => {
  const params = useParams();
  const { id } = params;
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchJob = async () => {
        try {
          const response = await axios.get(`/api/jobs/[id]?id=${id}`);
          setJob(response.data);
        } catch (error) {
          console.error("Error fetching job:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchJob();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <FaSpinner className="animate-spin text-primary" size={48} />
      </div>
    );
  }
  if (!job) {
    return <div className="text-center mt-10">Job not found</div>;
  }
  return (
    <div className="w-full ">
      <div className="flex md:justify-between justify-between items-center md:mx-0 md:px-20 mx-4 bg-[#F1F2F4] md:h-[76px] md:block">
        <div>
          <h1 className="md:ml-8 md:text-[15px] text-[10px] md:leading-[28px]">
            Job Details
          </h1>
        </div>
        <div className="flex gap-4 items-center  ">
          <code className="md:mr-8 md:text-[15px]  md:leading-[20px] text-gray-500">
            <Link href='/'>Home</Link> / <Link href='/AllJob'>Find Job</Link> / {job.jobTitle}{" "}
            <span className="text-[#18191C]"> / Job Details</span>{" "}
          </code>
        </div>
      </div>
      <div className="md:h-[1396px] bg-white md:pt-10 pt-10">
        <div className="md:flex grid md:justify-between justify-between items-center md:mx-0 md:px-20 mx-4  md:h-[76px]  ">
          <div className="md:flex gap-6">
            <Image
              src={job.companyLogo}
              className="rounded-full"
              alt=""
              width={96}
              height={96}
            />
            <div className="grid md:mt-4">
              <h2 className="md:text-[28px] md:leading-[32px]">
                {job.jobTitle}
              </h2>
              <div className="md:flex flex gap-2 items-center">
                <p className="md:text-[18px] md:leading-[28px]">
                  at {job.nameCompany}
                </p>
                <h3 className="text-white md:text-[15px] items-center justify-start flex uppercase bg-[#0BA02C] p-2 md:h-[30px] md:w-[98px] font-semibold rounded-[3px]">
                  {job.jobPeriod}
                </h3>
                <h3 className="text-[#E05151] md:text-[14px] items-center justify-center flex  bg-[#FCEEEE] p-2 md:h-[30px] md:w-[98px] font-semibold md:rounded-[52px]">
                  Featured
                </h3>
              </div>
            </div>
          </div>
          <div className="md:flex flex md:gap-4 gap-10 md:mt-0 mt-6">
            <div className="md:h-[56px] md:w-[56px] bg-[#E7F0FA] p-2 items-center flex justify-center rounded-[4px] shadow-sm">
              <Image
                src="/vector12.png"
                width={12}
                height={12}
                alt=""
                className=""
              />
            </div>
            <button className="h-[56px] w-[248px] bg-primary text-[16px] font-bold text-white  rounded-[4px] ">
              Apply now
            </button>
          </div>
        </div>
        <div className="md:grid grid-cols-1 lg:grid-cols-2 justify-center  md:mx-auto mx-4 md:p-24 gap-28 p-4">
          <div className="">
            <h2 className="md:text-[18px] md:leading-[28px] text-[#18191C]">
              Job Description
            </h2>
            <p>{job.jobDescription}</p>
          </div>
          <div className="md:space-y-6">
            <div className="flex border-2 border-[#E7F0FA] justify-evenly gap-10 p-10 md:w-[536px] items-center rounded-[8px] ">
              <div className="text-center space-y-2">
                <h3 className="md:text-[16px] text-[#18191C] md:leading-[24px] ">
                  Salary (USD)
                </h3>
                <h2 className="text-[#0BA02C] md:text-[20px] md:leading-[24px]">
                  {job.jobSalary}
                </h2>
                <p className="text-[#767F8C] md:text-[14px] md:leading-[20px]">
                  Yearly salary
                </p>
              </div>

              <div className="flex flex-col items-center justify-center text-center space-y-2">
                <Image
                  src="/MapTrifold.svg"
                  alt="icon-location"
                  height={38}
                  width={38}
                />
                <h3 className="md:text-[16px] text-[#18191C] md:leading-[24px]">
                  job Location
                </h3>
                <p className="text-[#767F8C] md:text-[14px] md:leading-[20px]">
                  {job.companyLocation}
                </p>
              </div>
            </div>

            {/* Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center border-2 border-[#E7F0FA] p-10 md:w-[536px]  rounded-[8px] gap-y-6 ">
              <div className="md:w-[140px] space-y-2">
                <Image
                  src="/CalendarBlank.svg"
                  alt="icon-location"
                  height={38}
                  width={38}
                />
                <p className="text-[#767F8C] uppercase md:text-[14px] md:leading-[20px]">
                  Job Posted:
                </p>
                <h3 className="md:text-[16px] text-[#18191C] md:leading-[24px] ">
                  {new Date(job.postedDate).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </h3>
              </div>
              <div className="md:w-[140px] space-y-2">
                <Image
                  src="/Timer.svg"
                  alt="icon-location"
                  height={38}
                  width={38}
                />
                <p className="text-[#767F8C] uppercase md:text-[14px] md:leading-[20px]">
                Job expire in:
                </p>
                <h3 className="md:text-[16px] text-[#18191C] md:leading-[24px] ">
                {new Date(job.jobExpire).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </h3>
              </div>
              <div className="md:w-[140px] space-y-2">
                <Image
                  src="/Stack.svg"
                  alt="icon-location"
                  height={38}
                  width={38}
                />
                <p className="text-[#767F8C] uppercase md:text-[14px] md:leading-[20px]">
                Job Level:
                </p>
                <h3 className="md:text-[16px] uppercase text-[#18191C] md:leading-[24px] ">
                {job.jobLevel}
                </h3>
              </div>
              <div className="md:w-[140px] space-y-2">
                <Image
                  src="/Wallet.svg"
                  alt="icon-location"
                  height={38}
                  width={38}
                />
                <p className="text-[#767F8C] uppercase md:text-[14px] md:leading-[20px]">
                Experience
                </p>
                <h3 className="md:text-[16px] uppercase text-[#18191C] md:leading-[24px] ">
                {job.jobExprience}
                </h3>
              </div>
              <div className="md:w-[140px] space-y-2">
                <Image
                  src="/briefcase.svg"
                  alt="icon-location"
                  height={38}
                  width={38}
                />
                <p className="text-[#767F8C] uppercase md:text-[14px] md:leading-[20px]">
                Education
                </p>
                <h3 className="md:text-[16px] uppercase text-[#18191C] md:leading-[24px] ">
                  {job.jobEducation}
                </h3>
              </div>
            </div>
            {/* share this job */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
