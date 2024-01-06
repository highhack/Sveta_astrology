import Heading from "./Heading";
import { FC } from "react";
import Image from "next/image";
import React from "react";

const Footer: FC = () => {
  return (
    <footer className="absolute flex justify-between bottom-0 w-full h-10 px-4">
      <div className="flex items-center">
        <Heading
          tag={"h2"}
          className="text-[14px]"
          text={"©2019-2024 created by "}
        />
        <Image
          alt=""
          src={"/logo.png"}
          className="w-8 h-3"
          width={20}
          height={20}
        />
      </div>
      <Heading
        tag={"h2"}
        className="text-[14px]"
        text={" All rights reserved. Copyright | Privacy Policy"}
      />
    </footer>
  );
};

export default Footer;
