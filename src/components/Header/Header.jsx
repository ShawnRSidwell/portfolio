import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  function handleScroll() {
    window.scrollY >= 20 ? setIsSticky(true) : setIsSticky(false);
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <header
      className={` sticky top-0 z-[20] flex items-center justify-between border-b border-gray-300 flex-wrap bg-blue-900 py-4 ${
        isSticky && "bg-slate-200"
      }`}
    >
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
