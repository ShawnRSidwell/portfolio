import { useState } from "react";
import optumLogo from "../../assets/optum-logo-ora-rgb1.svg";
import tekSystemsLogo from "../../assets/teksystems-logo.png";
import wellsfargoLogo from "../../assets/Wells_Fargo_Logo_(2020).svg.png";
import jfqLogo from "../../assets/jfq-logo.jpg";

const jobs = [
  {
    employer: "Optum Health Care",
    jobTitle: "Software Developer",
    dates: "Aug 2022 - October 2023",
    img: optumLogo,
    description: `
    • Obtained through TekSystems bootcamp. Started as a contributor
    to a large ingestion/ETL (Extracting, Transforming, Loading)
    team responsible for handling over 7M+ files/day.
    • Day to day team is comprised of DevOps, Software Engineering
    and Machine Learning experts.
    • Produced a proof-of-concept compression application to analyze
    and test Snappy compression on Amazon Keyspace storage.
    • Contributed to a project for bot technology that reviewed hl7
    fragments to apply rules that I created to match the appropriate
    records.
    • On-call duties required loading files manually or by using a
    sftp adapter and deploying the appropriate Kubernetes pod to
    process files.`,
  },
  {
    employer: "Optum Health Care",
    jobTitle: "Software Developer",
    dates: "Aug 2022 - October 2023",
    img: tekSystemsLogo,
    description: `
    • Obtained through TekSystems bootcamp. Started as a contributor
    to a large ingestion/ETL (Extracting, Transforming, Loading)
    team responsible for handling over 7M+ files/day.
    • Day to day team is comprised of DevOps, Software Engineering
    and Machine Learning experts.
    • Produced a proof-of-concept compression application to analyze
    and test Snappy compression on Amazon Keyspace storage.
    • Contributed to a project for bot technology that reviewed hl7
    fragments to apply rules that I created to match the appropriate
    records.
    • On-call duties required loading files manually or by using a
    sftp adapter and deploying the appropriate Kubernetes pod to
    process files.`,
  },
  {
    employer: "Optum Health Care",
    jobTitle: "Software Developer",
    dates: "Aug 2022 - October 2023",
    img: wellsfargoLogo,
    description: `
    • Obtained through TekSystems bootcamp. Started as a contributor
    to a large ingestion/ETL (Extracting, Transforming, Loading)
    team responsible for handling over 7M+ files/day.
    • Day to day team is comprised of DevOps, Software Engineering
    and Machine Learning experts.
    • Produced a proof-of-concept compression application to analyze
    and test Snappy compression on Amazon Keyspace storage.
    • Contributed to a project for bot technology that reviewed hl7
    fragments to apply rules that I created to match the appropriate
    records.
    • On-call duties required loading files manually or by using a
    sftp adapter and deploying the appropriate Kubernetes pod to
    process files.`,
  },
  {
    employer: "Optum Health Care",
    jobTitle: "Software Developer",
    dates: "Aug 2022 - October 2023",
    img: jfqLogo,
    description: `
    • Obtained through TekSystems bootcamp. Started as a contributor
    to a large ingestion/ETL (Extracting, Transforming, Loading)
    team responsible for handling over 7M+ files/day.
    • Day to day team is comprised of DevOps, Software Engineering
    and Machine Learning experts.
    • Produced a proof-of-concept compression application to analyze
    and test Snappy compression on Amazon Keyspace storage.
    • Contributed to a project for bot technology that reviewed hl7
    fragments to apply rules that I created to match the appropriate
    records.
    • On-call duties required loading files manually or by using a
    sftp adapter and deploying the appropriate Kubernetes pod to
    process files.`,
  },
];

function AccordionItem({
  curOpen,
  onOpen,
  num,
  employer,
  jobTitle,
  dates,
  img,
  children,
}) {
  const isOpen = curOpen === num;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      onClick={handleToggle}
      className={`block p-3 md:p-6 m-2 md:m-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}
    >
      <img
        className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg mx-auto"
        src={img}
        alt="employer picture"
      />
      <h5 className="md:my-2 text-center text-xl md:text-2xl font-bold text-blue-900 dark:text-white ">
        {employer}
      </h5>
      <h6 className="text-center tracking-tight text-slate-400 dark:text-white">
        {jobTitle}
      </h6>
      {isOpen && (
        <>
          <h6 className="mb-2 text-center text-sm tracking-tight text-gray-900 dark:text-white">
            {dates}
          </h6>
          <p className="text-sm text-gray-700 dark:text-gray-400">{children}</p>
        </>
      )}
    </div>
  );
}

function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  if (curOpen !== null) {
    const { employer, jobTitle, dates, img, description } = jobs[curOpen];
    return (
      <AccordionItem
        key={employer}
        num={curOpen}
        employer={employer}
        jobTitle={jobTitle}
        dates={dates}
        img={img}
        curOpen={curOpen}
        onOpen={setCurOpen}
      >
        {" "}
        {description}
      </AccordionItem>
    );
  }

  return (
    <div className="grid grid-cols-2  md:mx-7 md:my-10">
      {jobs.map(({ employer, jobTitle, dates, img, description }, i) => (
        <AccordionItem
          key={employer}
          num={i}
          employer={employer}
          jobTitle={jobTitle}
          dates={dates}
          img={img}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {description}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
