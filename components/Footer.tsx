import Image from "next/image";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className='w-full bg-black md:p-20 p-10'>
      <div className='grid md:mt-8 grid-cols-1 lg:grid-cols-5 gap-8 md:mx-auto mx-4 md:space-x-10'>
        <div className='md:space-y-4'>
          <Image src='/Logo-Footer.png' width={143} height={40} alt=''/>
          <div className="flex">
            <h4 className="text-gray-500 text-[18px]">Call now: <span className="text-white">(319) 555-0115</span></h4>
          </div> 
          <p className="text-gray-500 text-[14px] md:leading-[20px] md:w-[312px]">6391 Elgin St. Celina, Delaware 10299, New York, United States of America</p>
        </div>

        <div className="text-[#9199A3] md:space-y-4">
          <h2 className="text-white text-[20px]">Quick Link</h2>
          <ul className="text-[16px]">
            <li className="hover:text-white flex items-center">
              About
              
            </li>
            <li className="hover:text-white flex items-center">
              Contact
            </li>
            <li className="hover:text-white  flex items-center">
              Pricing
            </li>
            <li className="hover:text-white cursor-pointer flex items-center">
              Blog
            </li>
          </ul>
        </div>

        <div className="text-[#9199A3] md:space-y-4">
          <h2 className="text-white text-[20px]">Candidate</h2>
          <ul className="text-[16px]">
            <li className="hover:text-white cursor-pointer flex items-center">
              Browse Jobs
            </li>
            <li className="hover:text-white cursor-pointer flex items-center">
              Browse Employers
            </li>
            <li className="hover:text-white cursor-pointer flex items-center">
              Candidate Dashboard
            </li>
            <li className="hover:text-white cursor-pointer flex items-center">
              Saved Jobs
            </li>
          </ul>
        </div>

        <div className="text-[#9199A3] md:space-y-4">
          <h2 className="text-white text-[20px]">Employers</h2>
          <ul className="text-[16px]">
            <li className="hover:text-white cursor-pointer  flex items-center">
              Post a Job
            </li>
            <li className="hover:text-white cursor-pointer  flex items-center">
              Browse Candidates
            </li>
            <li className="hover:text-white cursor-pointer  flex items-center">
              Employers Dashboard
            </li>
            <li className="hover:text-white cursor-pointer  flex items-center">
              Applications
            </li>
          </ul>
        </div>

        <div className="text-[#9199A3] md:space-y-4">
          <h2 className="text-white text-[20px]">Support</h2>
          <ul className="text-[16px]">
            <li className="hover:text-white cursor-pointer  flex items-center">
              Faqs
            </li>
            <li className="hover:text-white cursor-pointer flex items-center">
              Privacy Policy
            </li>
            <li className="hover:text-white cursor-pointer flex items-center">
              Terms & Conditions
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-gray-500 md:mt-10">
        <div className="md:mt-4 justify-between md:flex items-center">
          <div>
            <p>@ 2021 Jobpilot - Job Portal. All rights Rserved</p>
          </div>
          <div className="flex gap-4 text-gray-500">
            <FaFacebookF />
            <FaYoutube />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
