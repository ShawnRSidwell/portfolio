import { useState } from "react";

function Icon({ icon, size, name, useHover = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = icon;
  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <IconComponent size={size} />
      {useHover && isHovered && (
        <div className="absolute top-full left-1/2 translate-x-[-50%] bg-blue-900 text-white p-1 mt-1 rounded-sm text-sm capitalize">
          {name}
        </div>
      )}
    </div>
  );
}

export default Icon;
