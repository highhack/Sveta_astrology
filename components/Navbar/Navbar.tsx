import s from "./Navbar.module.scss";
import clsx from "clsx";
import { Link } from "react-scroll";
import { useState } from "react";
import { useRouter } from "next/router";

const navigation = [
  { id: 1, title: "Home" },
  { id: 2, title: "Zodiacs" },
  { id: 3, title: "Contacts" },
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("Home");

  const router = useRouter();

  const handleSetActive = (to: string) => {
    setActiveNav(to);
    // router.push(to);
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
                  "flex flex-around relative before:absolute before:bg-[#d063d0] before:w-10 before:h-2 before:bottom-2 before:z-[-1] before:rounded-[50px] transition-all duration-500 delay-100 ease-in-out",
                  {
                    "before:w-20 text-[28px] font-bold": activeNav === title,
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
