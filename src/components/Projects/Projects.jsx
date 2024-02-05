import Card from "./Card";
import project from "../../assets/project-gif.gif";
import Button from "../Button";
import { FaGithub, FaPlay } from "react-icons/fa";

function Projects() {
  return (
    <div id="projects" className="py-10 my-10 p-6">
      <div className="flex w-2/3 mx-auto">
        <div className="flex flex-col">
          <h2 className="text-center text-4xl font-bold">Projects</h2>
          <h3 className=" text-xl text-center">
            Come see what I have been building.
          </h3>
          <p className=" py-3  text-center">
            My projects makes use of vast variety of latest technology tools. My
            best experience is to create Data Science projects and deploy them
            to web applications using cloud infrastructure.
          </p>
        </div>
        <img
          src={project}
          className="bg-blue-100 rounded-full p-10 mb-5 mx-10 w-1/3 h-128"
          alt=""
        />
      </div>
      <div>
        <div className="shadow-lg border-blue-300 border-4 p-4 rounded-lg m-3">
          Frugal Fare
        </div>
        <div className="shadow-lg border-blue-300 border-4 p-4 rounded-lg m-3">
          Frugal Fare
        </div>
        <div className="shadow-lg border-blue-300 border-4 p-4 rounded-lg m-3">
          Frugal Fare
        </div>
        <div className="shadow-lg border-blue-300 border-4 p-4 rounded-lg m-3">
          Frugal Fare
        </div>
        <div className="shadow-lg border-blue-300 border-4 p-4 rounded-lg m-3">
          Frugal Fare
        </div>
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
