import React, { useEffect, useState } from "react";
import style from "./Countdown.module.css"; // custom styles

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const total = Date.parse(targetDate) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.total <= 0) {
    return <h2 className={style.finished}>🎉 The Celebration Has Started! 🎉</h2>;
  }

  return (
    <div className={style.countdowncontainer}>
      <h1 className={style.title}>🎉 Celebration Begins In 🎉</h1>
      <div className={style.countdowngrid}>
        <div className={style.countdownbox}>
          <span className={style.number}>{timeLeft.days}</span>
          <span className={style.label}>Days</span>
        </div>
        <div className={style.countdownbox}>
          <span className={style.number}>{timeLeft.hours}</span>
          <span className={style.label}>Hours</span>
        </div>
        <div className={style.countdownbox}>
          <span className={style.number}>{timeLeft.minutes}</span>
          <span className={style.label}>Minutes</span>
        </div>
        <div className={style.countdownbox}>
          <span className={style.number}>{timeLeft.seconds}</span>
          <span className={style.label}>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
