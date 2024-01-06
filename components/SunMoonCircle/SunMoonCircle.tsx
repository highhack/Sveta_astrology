import React, { useEffect, useState } from "react";
import s from "./SunMoonCircle.module.scss";
import Image from "next/image";
import sun from "/public/images/sun1.png";
import moon from "/public/images/moon.png";

const SunMoonCircle = () => {
  useEffect(() => {
    window.addEventListener("scroll", myFunction);
    let sunMoonCircle = document.getElementById("sun_moon_circle");
    let sun = document.getElementById("sun");
    let moon = document.getElementById("moon");
    function myFunction() {
      let totalLength = document.documentElement.scrollHeight;
      let clientLength = document.documentElement.clientHeight;
      let currentHeight = window.scrollY;
      if (currentHeight === 0) {
        sun.style.visibility = "hidden";
        moon.style.visibility = "hidden";
      }
      if (currentHeight > 0) {
        moon.style.visibility = "visible";
        if (totalLength - currentHeight <= clientLength) {
          sun.style.visibility = "hidden";
        }
        if (totalLength - currentHeight > clientLength) {
          sun.style.visibility = "visible";
        }
      }
      let a =
        currentHeight / (totalLength - document.documentElement.clientHeight);
      sunMoonCircle.style.transform = `rotate(${a * 90}deg)`;
      moon.style.transform = `rotate(${-a * 90}deg)`;
      sun.style.left = `${a * 25 + 40}%`;
      moon.style.left = `${a * 25}%`;

      sunMoonCircle.style.left = `${a * 30}%`;
      // sunMoonCircle.style.top = `${a*50}%`
    }
  });

  return (
    <div className={s.sun_moon_circle} id="sun_moon_circle">
      <div className={s.sun} id="sun">
        <Image src={sun} alt="" className={s.sun_content} />
      </div>
      <div className={s.moon} id="moon">
        <Image src={moon} alt="" className={s.moon_content} />
      </div>
    </div>
  );
};

export default SunMoonCircle;
