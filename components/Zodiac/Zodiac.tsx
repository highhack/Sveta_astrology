import React, { useEffect, useRef, useState } from "react";
import s from "./Zodiac.module.scss";
import Image from "next/image";
import Texts from "../Texts/Texts";
import { zodiacs } from "../../constants/zodiacs";
import { texts } from "../../constants/texts";
import PaintedZodiacSVG from "./PaintedZodiacSVG";
import { ScrollText } from "../../lib/ScrollText/ScrollText";

const Zodiac = React.memo(function Zodiac() {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  console.log("isVisible", isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // You can adjust the threshold as needed
    );

    console.log("observer", observer);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div className={s.zodiac_page}>
      <div className={s.zodiac}>
        {texts.map(
          ({ text, top, left, right, id }) =>
            !isVisible && (
              <div
                key={id}
                // ref={targetRef}
                className={s["centered-text"]}
                style={{
                  top: `${top}px`,
                  left: `${left}px`,
                  right: `${right}px`,
                }}
              >
                <div className={s["text-content"]}>
                  <Texts textData={text} />
                  {/* <ScrollText content={text} /> */}
                </div>
              </div>
            )
        )}
        {zodiacs.map((zo) => {
          return (
            <div key={zo.name} className={s[zo.name]}>
              <Image
                width={200}
                height={200}
                src={`/../public/images/${zo.image}.png`}
                alt=""
              />
            </div>
          );
        })}
        <PaintedZodiacSVG />
      </div>
    </div>
  );
});

export default Zodiac;
