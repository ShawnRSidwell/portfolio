import { useState } from "react";
import { motion } from "framer-motion";
import { projectList } from "./projectList";
import Button from "../Button";
import project from "../../assets/project-gif.gif";

function Projects() {
  const [projSelected, setProjSelected] = useState(null);

  function handleClick(project) {
    if (project === projSelected) return setProjSelected(null);
    setProjSelected(project);
  }

  return (
    <div id="projects" className="max-w-screen-xl mx-auto mb-12 mt-4 md:py-16">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center">
          <h2 className="py-2 text-4xl font-extrabold tracking-wider text-center md:py-6 text-blue-900 uppercase">
            Projects
          </h2>
          {!projSelected ? (
            <motion.div
              key="default"
              initial={{ opacity: 0.5, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
            >
              <a
                href="https://github.com/ShawnRSidwell"
                target="_blank"
                rel="noreferrer"
              >
                <motion.img
                  src={project}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.9 }}
                  alt="kanban board"
                  className="w-1/2 md:w-[600px] md:h-[375px] mx-auto rounded-lg  border-2 border-blue-900 shadow-md"
                />
              </a>
              <p className="p-6 mb-5 text-justify text-slate-500 text-base  md:max-w-[800px] md:mx-auto">
                Welcome to my project showcase! Below you'll find a curated
                selection of projects that highlight my skills, creativity, and
                expertise. Each project represents a unique challenge I've
                tackled, showcasing my ability to innovate, problem-solve, and
                deliver exceptional results. Whether it's web development,
                graphic design, or data analysis, I'm passionate about bringing
                ideas to life. Take a look at my work by clicking on any project
                image and feel free to reach out if you have any questions or
                would like to collaborate.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={projSelected.name}
              layoutId="fadein"
              initial={{ opacity: 0.5, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
            >
              <a href={projSelected.link} target="_blank" rel="noreferrer">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.9 }}
                  src={projSelected.img}
                  alt={projSelected.name}
                  className="w-[25em] h-[25dvh] md:w-[800px] md:h-[400px] mx-auto rounded-lg  border-2 border-blue-900 shadow-lg object-scale-down	p-5"
                />
              </a>
              <p className="p-6 mb-5 text-justify text-slate-500 text-base md:max-w-[800px] md:mx-auto">
                {projSelected.description}
              </p>
            </motion.div>
          )}

          <div className="grid grid-cols-2 gap-2 md:gap-4 px-5 md:px-24 md:mx-5">
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
