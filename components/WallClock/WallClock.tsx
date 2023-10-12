import React, { useState, useEffect } from "react";
import styles from "./WallClock.module.scss"; // Import the module styles

function WallClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className={styles["wall-clock"]}>
      <div className={styles["clock-face"]}>
        <div
          className={styles["hour-hand"]}
          style={{ transform: `rotate(${(hours % 12) * 30}deg)` }}
        />
        <div
          className={styles["minute-hand"]}
          style={{ transform: `rotate(${minutes * 6}deg)` }}
        />
        <div
          className={styles["second-hand"]}
          style={{ transform: `rotate(${seconds * 6}deg)` }}
        />
        <div className={styles["clock-center"]} />
      </div>
      <div className={styles["digital-clock"]}>
        {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </div>
    </div>
  );
}

export default WallClock;
