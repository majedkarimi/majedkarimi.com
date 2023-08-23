import React from "react";
import PlanetCanvas from "../canvas/planet/Planet";
import style from "./contact.module.scss";
const Contact = () => {
  return (
    <div className="">
      <div className={style.planet}>
        <PlanetCanvas />
      </div>
      <div></div>
    </div>
  );
};

export default Contact;
