import Heading from "./Heading";
import { FC } from "react";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className="absolute bottom-0 w-full h-10">
      <Heading tag={"h3"} text={"created by Gera"} />
      <Image
        alt=""
        src={"/logo.png"}
        className="w-10 h-5"
        width={20}
        height={20}
      />
    </footer>
  );
};

export default Footer;
