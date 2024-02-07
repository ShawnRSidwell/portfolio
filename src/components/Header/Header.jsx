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
      className={` sticky top-0 z-[20] font-medium flex items-center justify-between  flex-wrap  py-6 px-24 transition-all duration-500 ${
        isSticky ? "bg-slate-100/10" : " bg-border-slate-100"
      }`}
    >
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
