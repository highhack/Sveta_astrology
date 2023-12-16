import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import s from "./ScrollText.module.scss";

const ScrollFillText = ({ content }) => {
  const contentRef = useRef();

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["end center", "start start"],
  });

  const scrollValue = useTransform(scrollYProgress, [0, 0.15], ["100%", "0%"]);
  const clipPathVal = useMotionTemplate`inset(0% ${scrollValue} 0% 0%)`;

  return (
    <span ref={contentRef}>
      <motion.span
        style={{ clipPath: clipPathVal }}
        className={s["highlighted-text"]}
        data-text={content}
      />
    </span>
  );
};

export default ScrollFillText;
