import React, { useEffect, useState } from "react";
import s from "./NightPage.module.scss";
import Image from "next/image";
import floresta from "/public/images/floresta.png";
import anime from "animejs";

const NightPage = () => {
  const [myVariable, setMyVariable] = useState(1);
  const [state, setState] = useState({
    num: 60,
    vw: 0,
    vh: 0,
  });
  useEffect(() => {
    // const interval = setInterval(() => {
    //   // Update the variable here
    //   setMyVariable(myVariable + 1);
    // }, 600);
    setState({
      num: 60,
      vw: Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      ),
      vh: Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      ),
    });
    // return () => clearInterval(interval);
  }, [myVariable]);

  const starryNight = () => {
    anime({
      targets: ["#sky .star"],
      opacity: [
        {
          duration: 700,
          value: "0",
        },
        {
          duration: 700,
          value: "1",
        },
      ],
      easing: "linear",
      loop: true,
      delay: (el, i) => 50 * i,
    });
  };
  const shootingStars = () => {
    anime({
      targets: [".wish"],
      easing: "linear",
      loop: true,
      delay: (el, i) => 1000 * i,
      opacity: [
        {
          duration: 700,
          value: "1",
        },
      ],
      width: [
        {
          value: "150px",
        },
        {
          value: "0px",
        },
      ],
      translateX: 350,
    });
  };
  const randomRadius = () => {
    return Math.random() * 0.7 + 0.6;
  };
  const getRandomX = () => {
    return Math.floor(Math.random() * Math.floor(state.vw)).toString();
  };
  const getRandomY = () => {
    return Math.floor(Math.random() * Math.floor(state.vh)).toString();
  };
  useEffect(() => {
    const interval = setInterval(() => {
      starryNight();
      shootingStars();
    }, 400);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const intervalId = setInterval(shootingStars, 1000);

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const { num } = state;
  return (
    <>
      <div className={s.night_page}>
        <svg className={s.sky}>
          {[...Array(num)].map((x, y) => (
            <circle
              cx={getRandomX()}
              cy={getRandomY()}
              r={randomRadius()}
              stroke="none"
              strokeWidth="0"
              fill="white"
              key={y}
              className="star"
            />
          ))}
        </svg>
        <div>
          <section>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </section>
        </div>
        {/* <div className={s.shootingstars}>
          {[...Array(60)].map((x, y) => (
            <div
              key={y}
              className={s.wish}
              style={{
                left: `${getRandomY()}px`,
                top: `${getRandomX()}px`,
              }}
            />
          ))}
        </div> */}
        <div className="w-full absolute bottom-0">
          <Image src={floresta} alt="" className={s.floresta} />
        </div>
      </div>
    </>
  );
};

export default NightPage;
