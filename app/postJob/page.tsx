'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

type Job = {
  jobTitle: string;
  nameCompany: string;
  jobDescription: string;
  jobPeriod: string;
  jobSalary: string;
  companyLogo: string | null;
  companyLocation: string;
  jobExprience: string;
  jobEducation: string;
  jobLevel: string;
  jobExpire: string;
};

function Page() {
  const router = useRouter();
  const [job, setJob] = useState<Job>({
    jobTitle: "",
    nameCompany: "",
    jobDescription: "",
    jobPeriod: "",
    jobSalary: "",
    companyLogo: null,
    companyLocation: "",
    jobExprience: "",
    jobEducation: "",
    jobLevel: "",
    jobExpire: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onPostJob = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErrorMessage("");

      const response = await axios.post("/api/jobs", job, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Job Post Success', response.data);
      router.push("/AllJob");
    } catch (error: any) {
      console.log('Job Post Failed', error.message);
      if (error.response) {
        console.log('Error response data', error.response.data);
        setErrorMessage(error.response.data.message || 'Post Job failed. Please try again');
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      job.jobTitle.length > 0 &&
      job.jobDescription.length > 0 &&
      job.jobPeriod.length > 0 &&
      job.jobSalary.length > 0 &&
      job.companyLocation.length > 0 &&
      job.jobExprience.length > 0 && 
      job.jobEducation.length > 0 &&
      job.jobLevel.length > 0 &&
      job.jobExpire.length > 0 &&
      job.nameCompany.length > 0 &&
      job.companyLogo !== null
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [job]);

  return (
    <div className="w-full md:mx-18 bg-white">
      <div className="md:flex flex md:justify-between justify-between items-center md:mx-0 md:px-20 mx-4 bg-[#F1F2F4] md:h-[76px]">
        <h1 className="md:ml-8 md:text-[15px] text-[20px] md:leading-[28px]">Post Job</h1>
        <code className="md:mr-8 md:text-[15px] text-[20px] md:leading-[28px] text-gray-500">
          <Link href="/">Home</Link> / <span className="text-black"> post job</span>
        </code>
      </div>

      <form onSubmit={onPostJob} className="p-20 space-y-10">
        <div className="md:flex justify-center gap-20">
          <div className="md:w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700">Job Title</label>
            <input
              type="text"
              value={job.jobTitle}
              onChange={(e) => setJob({ ...job, jobTitle: e.target.value })}
              placeholder="Ex: Product Manager"
              className="border-gray border-[1.5px] h-14 p-3 w-full rounded-lg outline-none"
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              value={job.nameCompany}
              onChange={(e) => setJob({ ...job, nameCompany: e.target.value })}
              placeholder="Ex: Google Inc"
              className="border-gray border-[1.5px] h-14 p-3 w-full rounded-lg outline-none"
            />
          </div>
        </div>
        <div className="md:flex justify-center gap-10">
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700">Job Period</label>
            <input
              type="text"
              value={job.jobPeriod}
              onChange={(e) => setJob({ ...job, jobPeriod: e.target.value })}
              placeholder="Ex: FULL-TIME"
              className="border-gray border-[1.5px] h-14 p-3 w-full rounded-lg outline-none"
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700">Salary</label>
            <input
              type="text"
              value={job.jobSalary}
              onChange={(e) => setJob({ ...job, jobSalary: e.target.value })}
              placeholder="Ex: $90,000 - $120,000"
              className="border-gray border-[1.5px] h-14 p-3 w-full rounded-lg outline-none"
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              value={job.companyLocation}
              onChange={(e) => setJob({ ...job, companyLocation: e.target.value })}
              placeholder="Ex: Kigali, Rwanda"
              className="border-gray border-[1.5px] h-14 p-3 w-full rounded-lg outline-none"
            />
          </div>
        </div>

        <div className="w-full">
          <label className="block mb-2 text-sm font-medium text-gray-700">Company Logo</label>
          <input
            type="file"
            onChange={(e) => setJob({ ...job, companyLogo: e.target.files ? URL.createObjectURL(e.target.files[0]) : null })}
            className="border-gray border-[1.5px] h-14 p-3 w-full rounded-lg outline-none"
          />
        </div>

        <div className="w-full">
          <label className="block mb-2 text-sm font-medium text-gray-700">Job Description</label>
          <textarea
            value={job.jobDescription}
            onChange={(e) => setJob({ ...job, jobDescription: e.target.value })}
            className="border-gray border-[1.5px] h-20 p-3 w-full rounded-lg outline-none"
            placeholder="Your description"
          />
        </div>
        <div className="md:flex justify-center gap-20">
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700">Experience</label>
            <input
              type="text"
              value={job.jobExprience}
              onChange={(e) => setJob({ ...job, jobExprience: e.target.value })}
              placeholder="Ex: 5 "
              className="border-gray border-[1.5px] h-14 p-3 w-full rounded-lg outline-none"
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700">Education</label>
            <input
              type="text"
              value={job.jobEducation}
              onChange={(e) => setJob({ ...job, jobEducation: e.target.value })}
              placeholder="Ex: Bachelor Degree"
              className="border-gray border-[1.5px] h-14 p-3 w-full rounded-lg outline-none"
            />
          </div>
        </div>
        <div className="md:flex justify-center gap-20">
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700">Level</label>
            <input
              type="text"
              value={job.jobLevel}
              onChange={(e) => setJob({ ...job, jobLevel: e.target.value })}
              placeholder="Ex: Senior"
              className="border-gray border-[1.5px] h-14 p-3 w-full rounded-lg outline-none"
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700">Expire</label>
            <input
              type="date"
              value={job.jobExpire}
              onChange={(e) => setJob({ ...job, jobExpire: e.target.value })}
              className="border-gray border-[1.5px] h-14 p-3 w-full rounded-lg outline-none"
            />
          </div>
        </div>

        {errorMessage && <div className="text-[#FF0000]">{errorMessage}</div>}

        <button
          type="submit"
          className={`bg-primary text-white p-2 rounded ${buttonDisabled || loading ? 'opacity-50' : ''}`}
          disabled={buttonDisabled || loading}
        >
          {loading ? "Posting..." : "Post Job"}
        </button>
      </form>
    </div>
  );
}

export default Page;
