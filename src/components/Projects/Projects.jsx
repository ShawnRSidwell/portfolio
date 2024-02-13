import { useState } from "react";
import Button from "../Button";
import { projectList } from "./projectList";
import kanbanboard from "../../assets/kanbanboardcropped.png";

function Projects() {
  const [projSelected, setProjSelected] = useState(null);

  function handleClick(project) {
    if (project === projSelected) return setProjSelected(null);
    setProjSelected(project);
  }

  return (
    <div id="projects" className="max-w-screen-xl mx-auto mb-12 mt-4">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold tracking-wider text-center py-4 text-blue-900 uppercase">
            Projects
          </h2>
          {!projSelected ? (
            <>
              <img
                src={kanbanboard}
                alt="kanban board"
                className="w-1/2 md:w-[600px] md:h-[375px] mx-auto rounded-lg  border-2 border-blue-900 shadow-md"
              />
              <p className="p-6 mb-5 text-center text-slate-500 text-lg ">
                My projects makes use of vast variety of latest technology
                tools. My best experience is to create Data Science projects and
                deploy them to web applications using cloud infrastructure.
              </p>
            </>
          ) : (
            <>
              <img
                src={projSelected.img}
                alt={projSelected.name}
                className="w-3/4 md:w-[1200px] md:h-[650px] mx-auto rounded-lg  border-2 border-blue-900 shadow-lg object-scale-down	p-5"
              />
              <p className="p-6 mb-5 text-center text-slate-500 text-lg ">
                {projSelected.description}
              </p>
            </>
          )}

          <div className="grid grid-cols-2 gap-2 px-5">
            {projectList.map((project, index) => (
              <Button key={project.name} onClick={() => handleClick(project)}>
                {project.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
