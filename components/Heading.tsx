import { FC } from "react";

type HeadingProps = {
  tag?: string;
  text: string;
};
const Heading: FC<HeadingProps> = ({ tag, text }) => {
    return <div role={tag || "h1"}>{text}</div>;
};

export default Heading;
