import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import programming from "./anim/moonDev.json";
const ProgrammingAnimate = () => {
  return (
    <>
      <Player
        autoplay={true}
        loop={true}
        controls={false}
        src={programming}
        style={{ height: "100%", width: "100%" }}
      />
    </>
  );
};

export default ProgrammingAnimate;
