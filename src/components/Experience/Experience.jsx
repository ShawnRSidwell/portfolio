import Accordion from "./Accordion";

function Experience() {
  return (
    <div id="experience" className="p-3  md:p-9 md:mx-12 ">
      <div>
        <h1 className="text-4xl font-extrabold tracking-wider text-center text-blue-900 uppercase">
          Experience
        </h1>
        <p className="p-1 md:p-6 mb-5 text-center text-slate-500  md:text-lg ">
          With 2 years of software engineering experience in the technology
          industry and over a decade of diverse corporate leadership roles in
          the financial sector, specifically in mortgages, I bring a unique
          blend of technical proficiency and business acumen to any position.
        </p>
        <div className="flex justify-center">
          <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Download Resume
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-3xl md:h-[40em]">
        <Accordion />
      </div>
    </div>
  );
}

export default Experience;
