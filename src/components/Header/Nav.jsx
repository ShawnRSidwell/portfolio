import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiTwotoneHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FaHammer } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import ScrollLink from "./ScrollLink";

function Navlinks() {
  return (
    <>
      <ScrollLink to="home">
        <AiTwotoneHome size="1em" color="white" /> Home
      </ScrollLink>
      <ScrollLink to="about">
        <AiOutlineUser size="1em" color="white" />
        About
      </ScrollLink>
      <ScrollLink to="projects">
        {" "}
        <FaHammer size="1em" color="white" />
        Projects
      </ScrollLink>
      <ScrollLink to="resume">
        <AiOutlineFileText size="1em" color="white" />
        Resume
      </ScrollLink>
      <ScrollLink to="contact">
        <AiOutlineMail size="1em" color="white" /> Contact
      </ScrollLink>
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
