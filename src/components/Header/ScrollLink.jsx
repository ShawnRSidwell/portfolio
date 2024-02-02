import { Link } from "react-scroll";

function ScrollLink({ to, children }) {
  return (
    <Link
      activeClass="active hover-underline-animation"
      to={to}
      smooth={true}
      duration={500}
      spy={true}
      offset={-70} // Adjust the offset based on your layout
    >
      <button className="flex justify-center gap-1 hover-underline-animation">
        {children}
      </button>
    </Link>
  );
}

export default ScrollLink;
