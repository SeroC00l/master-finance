"use client";
import Image from "next/image";
import Logo from "../../../public/logo.svg";

function Header() {

  const handleClick = () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("hidden");
  };
  
  return (
    <>
      <header className="w-full flex flex-col h-max md:flex-row md:right-0 fixed z-10">
        <div
          id="logo"
          className="flex items-center justify-between w-screen bg-secondary"
        >
          <a href="/" className="flex items-center">
            <Image src={Logo} alt="logo" />
            <h1 className="text-golden text-2xl sm:text-5xl hidden md:flex">
              Master Finance
            </h1>
          </a>
          <button onClick={handleClick} className="md:hidden mr-4">
            <img src="/menu.svg" alt="menu" className="w-12 mr-3" />
          </button>
        </div>
        <nav className="bg-secondary md:items-center md:justify-end md:pr-12 p-4 gap-8 md:gap-16 flex md:w-[77%] flex-col-reverse md:flex-row w-full">
          <a href="/sing-up" className="text-textColor text-2xl md:text-5xl">
            Sing Up
          </a>
          <a href="/sing-in" className="text-textColor text-2xl md:text-5xl">
            Sing In
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
