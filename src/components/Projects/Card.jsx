import computer from "../../assets/laptop.png";
import Button from "../Button";
import { FaGithub, FaPlay } from "react-icons/fa";

function Card() {
  return (
    <div className="mx-auto size-1/2 rounded overflow-hidden">
      <img className="w-full size" src={computer} alt="computer" />
      <div className="px-6 py-4">
        <div className="font-bold text-base mb-2 text-center">
          The Coldest Sunset
        </div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
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
  );
}

export default Card;
