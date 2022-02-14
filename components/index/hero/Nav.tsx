import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuHandler = () => {
    const html = document.querySelector<HTMLElement>("html")!;
    if (!isOpen) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "initial";
    }
    setIsOpen((e) => !e);
  };
  const sections = [
    {
      name: "team",
      display: "team",
    },
    
    {
      name: "course",
      display: "kurs",
    },
    {
      name: "about",
      display: "o nas",
    },
    {
      name: "testimonials",
      display: "opinie",
    },
    {
      name: "contact",
      display: "kontakt",
    },
  ];
  const btn = "mx-2 inline-block text-2xl uppercase relative font-light";
  const after =
    "after:w-full after:h-[2px] after:bg-black after:absolute after:left-0 after:bottom-0 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500";
  return (
    <nav className="flex justify-between mx-5 pt-7 items-center">
      <img src="/logo.png" alt="logo" />
      <ul className="hidden md:block">
        {sections.map((section, index) => (
          <a key={index} href={`#${section.name}`}>
            <li className={`${btn} ${after}`}>{section.display}</li>
          </a>
        ))}
      </ul>
      <ul
        className={`fixed top-0 scroll-m-0 w-screen h-screen z-20 bg-white flex flex-col transition-all items-center justify-center md:-left-[150%] ${
          isOpen ? "left-0" : "-left-[150%]"
        }`}
      >
        {sections.map((section, index) => (
          <a
            key={index}
            href={`#${section.name}`}
            className="hover:bg-secondary text-center w-full transition-colors"
            onClick={() => {
              setIsOpen(false);
              document.querySelector<HTMLElement>("html")!.style.overflow =
                "initial";
            }}
          >
            <li className={`${btn} my-7`}>{section.display}</li>
          </a>
        ))}
      </ul>
      <button className={`p-4 relative z-50 md:hidden`} onClick={menuHandler}>
        <div
          className={`menu after:transition-all before:transition-all ${
            isOpen
              ? "before:translate-y-2 before:rotate-45 after:-translate-y-2 after:-rotate-45"
              : "bg-black"
          }`}
        ></div>
      </button>
    </nav>
  );
};

export default Nav;
