import React from "react";
import { FC } from "react";
import clsx from "clsx";

type HeadingProps = {
  tag?: string;
  text: string;
  className?: string;
};
const Heading: FC<HeadingProps> = ({ tag, text, className }) => {
  return (
    <div className={clsx("", className)} role={tag || "h1"}>
      {text}
    </div>
  );
};

export default Heading;
