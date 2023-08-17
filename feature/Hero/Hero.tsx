import React from "react";
import style from "./hero.module.scss";
import ComputerCanvas from "../canvas/computer/Computers";
const Hero = () => {
  return (
    <section className={`${style.hero}`}>
      <div className={style.inner}>
        <div className={style.title}>
          <div className={style.line}>
            <span className={style.circle}></span>
            <span className={style.height}></span>
          </div>
          <div className={style.name}>
            <h1>
              Hi, I&lsquo;m <span>Majed</span>
            </h1>
            <div className={style.info}>
              <p>
                I develop user-friendly interfaces and dynamic web applications
                as a front-end developer.
              </p>
            </div>
          </div>
        </div>
        <div className={style.canvas}>
          <ComputerCanvas />
        </div>
        <div className={style.more}>
          <div className={style.box}>
            <div className={style.circle}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
