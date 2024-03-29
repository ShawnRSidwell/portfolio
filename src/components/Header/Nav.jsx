import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

import ScrollLink from "./ScrollLink";

function Navlinks({ onClick }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleMobile() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleMobile();

    window.addEventListener("resize", handleMobile);

    return window.removeEventListener("resize", handleMobile);
  });

  return (
    <>
      <ScrollLink to="home" onClick={onClick}>
        Home
      </ScrollLink>
      <ScrollLink to="about" offset={isMobile ? -200 : -75} onClick={onClick}>
        About
      </ScrollLink>
      <ScrollLink
        to="projects"
        offset={isMobile ? -250 : -100}
        onClick={onClick}
      >
        Projects
      </ScrollLink>
      <ScrollLink
        to="experience"
        offset={isMobile ? -225 : -50}
        onClick={onClick}
      >
        Experience
      </ScrollLink>
      <ScrollLink to="contact" offset={isMobile ? 50 : -90} onClick={onClick}>
        Contact
      </ScrollLink>
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
              <AiFillCloseCircle color="grey" size="1.5em" />
            ) : (
              <AiOutlineMenu color="grey" size="1.5em" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div
          className="flex flex-col items-center basis-full"
          onClick={toggleNavbar}
        >
          <Navlinks onClick={toggleNavbar} />
        </div>
      )}
    </>
  );
}

export default Nav;
