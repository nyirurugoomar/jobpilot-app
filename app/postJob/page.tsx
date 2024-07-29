import Link from "next/link";

function Page() {
  return (
    <div className="w-full md:mx-18 bg-white">
      <div className="md:flex flex md:justify-between justify-between items-center md:mx-0 md:px-20 mx-4 bg-[#F1F2F4] md:h-[76px]">
        <h1 className="md:ml-8 md:text-[15px] text-[20px] md:leading-[28px]">
          Post Job
        </h1>
        <code className="md:mr-8 md:text-[15px] text-[20px] md:leading-[28px] text-gray-500">
          <Link href="/">Home</Link> /{" "}
          <span className="text-black"> post job</span>
        </code>
      </div>

      <form action="" className="p-20 space-y-10">
        <div className="flex justify-center gap-20 ">
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Job Title
            </label>
            <input
              type="text"
              placeholder="Ex:Product Manager"
              className="border-gray border-[1.5px] h-14 p-3 w-full rounded-lg outline-none"
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Ex:Google Inc"
              className="border-gray border-[1.5px] h-14 p-3 w-full rounded-lg outline-none"
            />
          </div>
        </div>
        <div className="flex justify-center gap-10 ">
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Job Period
            </label>
            <input
              type="text"
              placeholder="Ex:FULL-TIME"
              className="border-gray border-[1.5px] h-14 p-3 w-full rounded-lg outline-none"
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Salary
            </label>
            <input
              type="text"
              placeholder="Ex:$90,000 - $120,000"
              className="border-gray border-[1.5px] h-14 p-3 w-full rounded-lg outline-none"
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              placeholder="Ex:Seattle, USA"
              className="border-gray border-[1.5px] h-14 p-3 w-full rounded-lg outline-none"
            />
          </div>
        </div>

        <div className="flex justify-center items-center border-dashed border-gray border-[5.5px] p-20">
           updload company picture
        </div>
        <button className="bg-primary p-3 text-white w-40 rounded-sm font-bold">Submit</button>
      </form>
    </div>
  );
}

export default Page;
