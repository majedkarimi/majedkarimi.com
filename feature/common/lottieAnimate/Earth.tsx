import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import earth from "./anim/earth.json";
const EarthAnimate = () => {
  return (
    <>
      <Player
        autoplay={true}
        loop={true}
        controls={false}
        src={earth}
        style={{ height: "100%", width: "100%" }}
      />
    </>
  );
};

export default EarthAnimate;
