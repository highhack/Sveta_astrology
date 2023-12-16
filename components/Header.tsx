import Navbar from "./Navbar/Navbar";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="fixed top-10  left-10 z-[10]">
      <Navbar />
    </header>
  );
};

export default Header;
