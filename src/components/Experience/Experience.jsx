import Accordion from "./Accordion";

function Experience() {
  return (
    <div id="experience" className="p-3  md:p-9 md:mx-12 ">
      <div>
        <h1 className="text-4xl font-extrabold tracking-wider text-center text-blue-900 uppercase">
          Experience
        </h1>
        <p className="p-1 md:p-6 mb-5 text-center text-slate-500  md:text-lg ">
          My projects makes use of vast variety of latest technology tools. My
          best experience is to create Data Science projects and deploy them to
          web applications using cloud infrastructure.
        </p>
        <div className="flex justify-center">
          <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Download Resume
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-3xl">
        <Accordion />
      </div>
    </div>
  );
}

export default Experience;
