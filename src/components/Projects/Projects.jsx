import Card from "./Card";
import computer from "../../assets/laptop.png";
import Button from "../Button";
import { FaGithub, FaPlay } from "react-icons/fa";

function Projects() {
  return (
    <div id="projects" className="py-10 my-10 p-6 relative">
      <div className="absolute inset-0 flex items-center justify-center bg-blue-300 rounded-full shadow-xl"></div>

      <div className="relative z-10">
        <h2 className="text-center text-4xl text-blue-900">Projects</h2>
        <h3 className="text-center text-blue-900 p-3">
          Come see what I have been building.
        </h3>
      </div>
      <div className="flex relative z-10 bg-white border shadow p-8 rounded-full">
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
      </div>
    </div>
  );
}

export default Projects;
