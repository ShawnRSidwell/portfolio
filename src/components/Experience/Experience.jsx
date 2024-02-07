import Button from "../Button";
import ResumeDocument from "./ResumeDocument";
import profilepic from "../../assets/LinkedInPhoto Final.jpg";

function Experience() {
  return (
    <div id="experience" className="p-9 mx-12">
      <h1 className="p-5 font-bold text-4xl text-center">Experience</h1>
      <button className="flex justify-center bg-blue-300 rounded-full p-3 mx-auto my-5">
        Download Resume
      </button>
      <div className="grid grid-cols-2 gap-4">
        <div className=" block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <img
            className="w-24 h-24  rounded-full shadow-lg mx-auto"
            src={profilepic}
            alt="profile picture"
          />
          <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology
          </h5>
          <h6 className="text-center tracking-tight text-gray-900 dark:text-white">
            Software Developer
          </h6>
          <h6 className="mb-2 text-center text-sm tracking-tight text-gray-900 dark:text-white">
            Aug 2022 - October 2023
          </h6>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            <ul>
              <li>
                • Obtained through TekSystems bootcamp. Started as a contributor
                to a large ingestion/ETL (Extracting, Transforming, Loading)
                team responsible for handling over 7M+ files/day.
              </li>
              <li>
                • Day to day team is comprised of DevOps, Software Engineering
                and Machine Learning experts.
              </li>
              <li>
                • Produced a proof-of-concept compression application to analyze
                and test Snappy compression on Amazon Keyspace storage.
              </li>
              <li>
                • Contributed to a project for bot technology that reviewed hl7
                fragments to apply rules that I created to match the appropriate
                records.
              </li>
              <li>
                • On-call duties required loading files manually or by using a
                sftp adapter and deploying the appropriate Kubernetes pod to
                process files.
              </li>
            </ul>
          </p>
        </div>
        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg mx-auto"
            src={profilepic}
            alt="profile picture"
          />
          <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology
          </h5>
          <h6 className="text-center tracking-tight text-gray-900 dark:text-white">
            Software Developer
          </h6>
          <h6 className="mb-2 text-center text-sm tracking-tight text-gray-900 dark:text-white">
            Aug 2022 - October 2023
          </h6>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg mx-auto"
            src={profilepic}
            alt="profile picture"
          />
          <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology
          </h5>
          <h6 className="text-center tracking-tight text-gray-900 dark:text-white">
            Software Developer
          </h6>
          <h6 className="mb-2 text-center text-sm tracking-tight text-gray-900 dark:text-white">
            Aug 2022 - October 2023
          </h6>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg mx-auto"
            src={profilepic}
            alt="profile picture"
          />
          <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology
          </h5>
          <h6 className="text-center tracking-tight text-gray-900 dark:text-white">
            Software Developer
          </h6>
          <h6 className="mb-2 text-center text-sm tracking-tight text-gray-900 dark:text-white">
            Aug 2022 - October 2023
          </h6>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
      {/* <ResumeDocument /> */}
    </div>
  );
}

export default Experience;
