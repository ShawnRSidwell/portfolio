import { Link } from "react-scroll";
import { useHeader } from "../../contexts/HeaderContext";

function ScrollLink({ to, children }) {
  const { isSticky } = useHeader();
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      spy={true}
      offset={-70} // Adjust the offset based on your layout
    >
      <button
        className={`hover-underline-animation ${
          isSticky ? "text-blue-900" : "text-white"
        }`}
      >
        {" "}
        {children}
      </button>
    </Link>
  );
}

export default ScrollLink;
