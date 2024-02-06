import Card from "./Card";
import project from "../../assets/project-gif.gif";
import kanbanboard from "../../assets/kanbanboard.png";
import Button from "../Button";
import { FaGithub, FaPlay } from "react-icons/fa";

function Projects() {
  return (
    <div id="projects" className="py-10 my-10 p-6  ">
      <div className="flex mx-auto bg-blue-200 rounded-lg p-10 border-blue-900 border-4 shadow-lg">
        <div className="flex flex-col">
          <h2 className="text-center text-4xl font-bold mt-7 mx-auto">
            Projects
          </h2>
          <img
            src={kanbanboard}
            alt="kanban board"
            className="w-1/2 rounded-lg mx-auto my-5 border-4 border-blue-900"
          />
          <p className="py-5 px-10 mx-12  text-center ">
            My projects makes use of vast variety of latest technology tools. My
            best experience is to create Data Science projects and deploy them
            to web applications using cloud infrastructure.
          </p>
          <div className="flex flex-col justify-center">
            <div className="shadow-lg border-blue-900 bg-white border-4 p-3 rounded-lg m-3 justify-center">
              Frugal Fare
            </div>
            <div className="shadow-lg border-blue-900 bg-white border-4 p-3 rounded-lg m-3">
              Frugal Fare
            </div>
            <div className="shadow-lg border-blue-900 bg-white border-4 p-3 rounded-lg m-3">
              Frugal Fare
            </div>
            <div className="shadow-lg border-blue-900 bg-white border-4 p-3 rounded-lg m-3">
              Frugal Fare
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center items-center mx-6 w-1/2 border-blue-900 border-4">
          <img
            src={project}
            className="border-8 border-blue-900 bg-white rounded-full p-7 "
            alt=""
          />
        </div> */}
      </div>
      {/* <div className="flex relative z-10 p-8 ">
        <div className="flex flex-col justify-center">
          <div className="px-6 py-4 mt-6">
            <h2 className="font-bold text-base mb-2 text-center">
              The Coldest Sunset
            </h2>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="flex px-8 pt-4 pb-4 justify-evenly ga">
            <Button>
              <FaPlay /> Demo
            </Button>
            <Button>
              <FaGithub />
              Github
            </Button>
          </div>
        </div>
        <img className="p-7 m-5" src={computer} alt="computer" />
      </div>  */}
    </div>
  );
}

export default Projects;
