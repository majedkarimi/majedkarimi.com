import React from "react";
import style from "./footer.module.scss";
import { infoType } from "@/types/info";

const Footer = (props: infoType) => {
  return (
    <div className={style.footer}>
      <div className={style.inner}>
        <div className="flex flex-col gap-1">
          <div className="copyright">
            <span>Copyright © 2023 Farsdev. All rights reserved.</span>
          </div>
          <div className={style.information}>
            <div className={style.mobile}>
              <span>Phone:</span>
              <a href={`tel:+98${props.phone}`}>{`0${props.phone}`}</a>
            </div>
            <div className={style.email}>
              <span>Email:</span>
              <a href={`mailto: ${props.email}`}>{props.email}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
