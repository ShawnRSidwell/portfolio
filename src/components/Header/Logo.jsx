import { useHeader } from "../../contexts/HeaderContext";

function Logo() {
  const { isSticky } = useHeader();
  return (
    <p
      className={`hover-underline-animation text-sm md:text-lg  ${
        isSticky ? "text-blue-900" : "text-blue-900"
      }`}
    >
      Shawn Sidwell
    </p>
  );
}

export default Logo;
