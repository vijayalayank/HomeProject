import React from "react";
import style from "./ThankYou.module.css";

export default function ThankYou() {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>
        🙏 ✨ Thank You ✨ 🙏
      </h1>
      <p className={style.message}>
        "Home is not a place, it's a feeling. Thank you for being a part of our journey 
        and making our house a home with your presence and blessings."
      </p>
      <p className={style.footer}>
        With Love & Gratitude, <br />
        <span className={style.family}>The [Your Family Name] Family</span>
      </p>
    </div>
  );
}
