import s from "./Navbar.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import clsx from "clsx";
import { Events, Link, animateScroll as scroll, scrollSpy } from "react-scroll";
import { useEffect, useState } from "react";
// import logo from './../../public/logo.png';

const navigation = [
  { id: 1, title: "Home" },
  { id: 2, title: "Zodiacs" },
  { id: 3, title: "Contacts" },
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("Home");

  const handleSetActive = (to: string) => {
    setActiveNav(to);
  };
  return (
    <nav className="h-[100px] w-[300px] flex group ">
      <div className="">
        {navigation.map(({ id, title }) => {
          return (
            <Link
              key={id}
              to={title}
              smooth={true}
              duration={500}
              onClick={() => setActiveNav(title)}
              onSetActive={handleSetActive}
              spy={true}
              activeClass="active"
            >
              <div
                className={clsx(
                  "flex flex-around relative before:absolute before:bg-[#d063d0] before:w-10 before:h-2 before:bottom-2 before:z-[-1] before:rounded-[50px]",
                  {
                    "before:w-20 !text-[28px] !font-bold": activeNav === title,
                  }
                )}
              >
                {title}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
