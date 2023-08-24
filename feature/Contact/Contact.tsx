"use client";
import React from "react";
import PlanetCanvas from "../canvas/planet/Planet";
import style from "./contact.module.scss";
import { useAppSelector } from "@/store/hooks";
const Contact = () => {
  const { loading } = useAppSelector((state) => state.project);
  return (
    <div className={style.contact} id="contact">
      <div className={style["contact-inner"]}>
        {!loading && (
          <>
            <div className={style.planet}>
              <PlanetCanvas />
            </div>
            <div className={style.email}>
              <div className={style.title}>
                <span className={style.info}>GET IN TOUCH</span>
                <span className={style.name}>Contact.</span>
              </div>
              <div className={style.form}>
                <div className={style.item}>
                  <div className={style.label}>
                    <label htmlFor="">Your Name</label>
                  </div>
                  <div className={style.input}>
                    <input type="text" placeholder="What's your good name?" />
                  </div>
                </div>
                <div className={style.item}>
                  <div className={style.label}>
                    <label htmlFor="">Your email</label>
                  </div>
                  <div className={style.input}>
                    <input
                      type="text"
                      placeholder="What's your email address?"
                    />
                  </div>
                </div>

                <div className={style.item}>
                  <div className={style.label}>
                    <label htmlFor="">Your Message</label>
                  </div>
                  <div className={style.textarea}>
                    <textarea placeholder="What you want to say?"></textarea>
                  </div>
                </div>
                <div className={style.btn}>
                  <button>Send</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
