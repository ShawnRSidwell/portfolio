import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiTwotoneHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FaHammer } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function Navlinks() {
  return (
    <>
      <p to="/" className="flex items-center gap-1 text-base text-white">
        <AiTwotoneHome size="1em" color="white" /> Home
      </p>
      <p to="about" className="flex items-center gap-1 text-base text-white">
        <AiOutlineUser size="1em" color="white" />
        About
      </p>
      <p to="projects" className="flex items-center gap-1 text-base text-white">
        {" "}
        <FaHammer size="1em" color="white" />
        Projects
      </p>
      <p to="resume" className="flex items-center gap-1 text-base text-white">
        <AiOutlineFileText size="1em" color="white" />
        Resume
      </p>
      <p to="contact" className="flex items-center gap-1 text-base text-white ">
        <AiOutlineMail size="1em" color="white" /> Contact
      </p>
    </>
  );
}
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className={`w-1/3 flex justify-end`}>
        <div className="hidden w-full md:flex justify-between gap-2">
          <Navlinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <AiFillCloseCircle color="white" size="1.5em" />
            ) : (
              <AiOutlineMenu color="white" size="1.5em" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full">
          <Navlinks />
        </div>
      )}
    </>
  );
}

export default Nav;
