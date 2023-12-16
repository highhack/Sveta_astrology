import Heading from "./Heading";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="absolute bottom-0 w-full h-10">
      <Heading tag={"h3"} text={"created by Gera"} />
    </footer>
  );
};

export default Footer;
