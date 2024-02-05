import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

import ScrollLink from "./ScrollLink";

function Navlinks() {
  return (
    <>
      <ScrollLink to="home">Home</ScrollLink>
      <ScrollLink to="about">About</ScrollLink>
      <ScrollLink to="projects">Projects</ScrollLink>
      <ScrollLink to="resume">Resume</ScrollLink>
      <ScrollLink to="contact"> Contact</ScrollLink>
    </>
  );
}
function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <>
      <nav className={`w-1/4 flex justify-end`}>
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
