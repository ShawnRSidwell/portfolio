import { useState } from "react";
import Button from "../Button";
import frugalFare from "../../assets/frugal-fare-cropped.png";
import wildOasis from "../../assets/wild-oasis.png";
import pizzaMenu from "../../assets/fast-react-pizza.png";
import eatnSplit from "../../assets/eat-n-split.png";
import kanbanboard from "../../assets/kanbanboardcropped.png";

const projectList = [
  {
    name: "Frugal Fare",
    description:
      "A ride-sharing price simulator designed to help users find the most competitive quotes for their trips. By simulating various ride-sharing prices, users can easily compare prices and select the best option tailored to their needs. It is built mainly in Java using MySQL for the databse.",
    img: frugalFare,
  },
  {
    name: " Wild Oasis",
    description:
      "This project is a comprehensive hotel management system developed in Javascript with Supabase acting as the database. Offering robust features and seamless integration, it streamlines hotel operations, including reservations, guest management, billing, and more. ",
    img: wildOasis,
  },
  {
    name: "Eat-N-Split",
    description:
      "This project is a split-check calculator built using React, simplifying the process of dividing bills among multiple individuals. With its intuitive interface and precise calculations, it ensures accurate splitting of expenses, enhancing convenience for users dining together.",
    img: eatnSplit,
  },
  {
    name: "Shawns Pizza Co.",
    description:
      "Developed entirely in React, this project is a fully functioning pizza website offering an immersive online ordering experience. From customizable toppings to seamless checkout, it provides customers with a user-friendly platform to browse, order, and enjoy delicious pizzas from the comfort of their homes.",
    img: pizzaMenu,
  },
];

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
