import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

import ScrollLink from "./ScrollLink";

function Navlinks() {
  return (
    <>
      <ScrollLink to="home">Home</ScrollLink>
      <ScrollLink to="about" offset={-100}>
        About
      </ScrollLink>
      <ScrollLink to="projects" offset={-100}>
        Projects
      </ScrollLink>
      <ScrollLink to="experience" offset={-70}>
        Experience
      </ScrollLink>
      <ScrollLink to="contact" offset={-100}>
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
          <Navlinks />
        </div>
      )}
    </>
  );
}

export default Nav;
