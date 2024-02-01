import { Link } from "react-scroll";

function ScrollLink({ to, children }) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      spy={true}
      offset={-70} // Adjust the offset based on your layout
    >
      <button className="text-white flex justify-center gap-1">
        {children}
      </button>
    </Link>
  );
}

export default ScrollLink;
