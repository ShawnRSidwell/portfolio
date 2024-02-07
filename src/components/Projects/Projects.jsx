import kanbanboard from "../../assets/kanbanboardcropped.png";
import Accordion from "./Accordion";

function Projects() {
  return (
    <div id="projects" className="p-6 max-w-screen-xl mx-auto">
      <div className="flex mx-auto bg-blue-100 rounded-lg border-blue-900 border-2 shadow-lg">
        <div className="flex flex-col">
          <h2 className="text-center text-4xl font-bold mt-7 ml-4 text-blue-900">
            Projects
          </h2>
          <img
            src={kanbanboard}
            alt="kanban board"
            className="w-1/2 rounded-lg mx-auto my-5 border-2 border-blue-900 shadow-md"
          />
          <p className="py-5 px-10 mx-12  text-center ">
            My projects makes use of vast variety of latest technology tools. My
            best experience is to create Data Science projects and deploy them
            to web applications using cloud infrastructure.
          </p>
          <Accordion />
        </div>
      </div>
    </div>
  );
}

export default Projects;
