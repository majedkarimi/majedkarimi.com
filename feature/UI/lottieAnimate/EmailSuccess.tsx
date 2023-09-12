import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import successAnimate from "./anim/email-success.json";
const EmailSuccess = () => {
  return (
    <>
      <Player
        autoplay={true}
        loop={true}
        controls={false}
        src={successAnimate}
        style={{ height: "100%", width: "100%" }}
      />
    </>
  );
};

export default EmailSuccess;
