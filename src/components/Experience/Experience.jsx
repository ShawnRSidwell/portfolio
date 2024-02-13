import Button from "../Button";
import Accordion from "./Accordion";
import resumeFile from "../../assets/Shawn Sidwell Resume 2024.pdf";

function Experience() {
  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = resumeFile;
    anchor.download = "Shawn Sidwell Resume.pdf";
    anchor.click();
  };

  return (
    <div id="experience" className="p-3  md:p-9 md:mx-12 ">
      <div>
        <h1 className="text-4xl font-extrabold tracking-wider text-center text-blue-900 uppercase">
          Experience
        </h1>
        <p className="p-1 md:p-6 mb-5 text-center text-slate-500  md:text-lg md:size-1/2 md:mx-auto ">
          With 2 years of software engineering experience in the technology
          industry and over a decade of diverse corporate leadership roles in
          the financial sector, specifically in mortgages, I bring a unique
          blend of technical proficiency and business acumen to any position.
        </p>
        <div className="flex justify-center">
          <Button onClick={handleDownload}>Download Resume</Button>
        </div>
      </div>
      <div className="mx-auto max-w-3xl md:h-[40em]">
        <Accordion />
      </div>
    </div>
  );
}

export default Experience;
