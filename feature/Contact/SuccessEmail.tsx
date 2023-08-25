"use client";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import style from "./contact.module.scss";
import EmailSuccess from "../common/lottieAnimate/EmailSuccess";
interface prop {
  onClose: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export const Modal: React.FC<prop> = function ({ onClose }) {
  document.body.style.overflow = "hidden";

  return (
    <div className={style.modal} onClick={onClose}>
      <div className={style["modal-inner"]}>
        <div className={style["modal-inner_head"]}>
          <EmailSuccess />
        </div>
        <div className={style["modal-inner_body"]}>
          <p>Thank you. I will get back to you as soon as possible.</p>
        </div>
      </div>
    </div>
  );
};
const SuccessEmail: React.FC<prop> = ({ onClose }) => {
  return <>{createPortal(<Modal onClose={onClose} />, document.body)}</>;
};

export default SuccessEmail;
