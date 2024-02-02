import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import { useHeader } from "../../contexts/HeaderContext";

function Header() {
  const { isSticky, setIsSticky } = useHeader();

  function handleScroll() {
    window.scrollY >= 20 ? setIsSticky(true) : setIsSticky(false);
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <header
      className={` sticky top-0 z-[20] flex items-center justify-between border-b flex-wrap  py-4 px-3 transition-all duration-500 ${
        isSticky
          ? "bg-slate-200/90 bg-border-slate-100"
          : "bg-blue-900 border-blue-300"
      }`}
    >
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
