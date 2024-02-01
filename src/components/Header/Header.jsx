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
      className={`bg-dg-bkground sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-b p-2 border-gray-300 flex-wrap bg-slate-300 ${
        isSticky && "bg-slate-200"
      }`}
    >
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
