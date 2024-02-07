import { useState } from "react";
import portfoliopic from "../../assets/LinkedInPhoto Final.jpg";

const projectList = [
  {
    employer: "Optum Health Care",
    jobTitle: "Software Developer",
    dates: "Aug 2022 - October 2023",
    img: portfoliopic,
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
    img: portfoliopic,
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
    img: portfoliopic,
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
    img: portfoliopic,
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

function AccordionItem({ curOpen, onOpen, num, title, img, children }) {
  const isOpen = curOpen === num;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div
      className={`shadow-sm  bg-white p-3 rounded-sm mx-8 my-3  text-center flex  flex-col items-center justify-center cursor-pointer hover:shadow-md  ${
        isOpen ? "border-blue-900 border-t-4" : ""
      }`}
      onClick={handleToggle}
    >
      <p className={` text-blue-900 ${isOpen ? "font-bold" : "font-semibold"}`}>
        {title}
      </p>

      <img className="size-1/3 p-5" src={img} alt="" />
      {isOpen && <p className="text-slate-600">{children}</p>}
    </div>
  );
}

function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div>
      {projectList.map(({ title, img, description }, i) => (
        <AccordionItem
          key={title}
          num={i}
          title={title}
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
