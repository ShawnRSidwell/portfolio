import Button from "../Button";
import ResumeDocument from "./ResumeDocument";
import profilepic from "../../assets/LinkedInPhoto Final.jpg";
import Accordion from "./Accordion";

function Experience() {
  return (
    <div id="experience" className="p-9 mx-12 ">
      <h1 className="p-5 font-bold text-4xl text-center text-blue-900">
        Experience
      </h1>
      <button className="flex justify-center bg-blue-300 rounded-full p-3 mx-auto my-5">
        Download Resume
      </button>
      <Accordion />
    </div>
  );
}

export default Experience;
