import Button from "../Button";
import ResumeDocument from "./ResumeDocument";

function Resume() {
  return (
    <div id="resume" className="flex flex-col p-5">
      <h1 className="p-5 font-bold text-xl text-center">Resume</h1>
      <Button>Download Resume</Button>
      <ResumeDocument />
      <Button>Download Resume</Button>
    </div>
  );
}

export default Resume;
