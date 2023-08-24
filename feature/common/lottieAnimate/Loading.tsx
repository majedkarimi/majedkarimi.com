import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import lodingAnim from "./anim/loading-1.json";
const Loading = () => {
  return (
    <>
      <Player
        autoplay={true}
        loop={true}
        controls={false}
        src={lodingAnim}
        style={{ height: "100%", width: "100%" }}
      />
    </>
  );
};

export default Loading;
