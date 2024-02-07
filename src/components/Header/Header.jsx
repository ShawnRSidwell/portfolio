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
      className={` sticky top-0 z-[20] font-medium text-lg flex items-center justify-center  flex-wrap  py-6 px-24 transition-all duration-500 ${
        isSticky ? "bg-white shadow " : " bg-border-slate-100"
      }`}
    >
      {/* <Logo /> */}
      <Nav />
    </header>
  );
}

export default Header;
