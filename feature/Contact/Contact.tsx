"use client";
import { useState, useRef, ChangeEvent } from "react";
import PlanetCanvas from "../canvas/planet/Planet";
import style from "./contact.module.scss";
import { useAppSelector } from "@/store/hooks";
import Input from "../common/input/Input";
import emailjs from "@emailjs/browser";
import {
  EMAIL_PUBLIC_KEY,
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
} from "@/constants/endPoints";
import EmailSuccess from "../common/lottieAnimate/EmailSuccess";
import Loading from "../common/lottieAnimate/Loading";
const Contact = () => {
  const { loading } = useAppSelector((state) => state.project);
  const [btnLoading, setBtnLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleInputValue = function (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { value, name } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = function () {
    setBtnLoading(true);
    emailjs
      .send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Majed",
          from_email: form.email,
          to_email: "smajed.karimi3@gmail.com",
          message: form.message,
        },
        EMAIL_PUBLIC_KEY
      )
      .then(() => {
        alert("Thank you. I will get back to you as soon as possible.");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setBtnLoading(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      });
  };

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
                    <Input
                      type="text"
                      placeholder="What's your good name?"
                      onChange={handleInputValue}
                      value={form.name}
                      name="name"
                    />
                  </div>
                </div>
                <div className={style.item}>
                  <div className={style.label}>
                    <label htmlFor="">Your email</label>
                  </div>
                  <div className={style.input}>
                    <Input
                      type="text"
                      placeholder="What's your email address?"
                      name="email"
                      onChange={handleInputValue}
                      value={form.email}
                    />
                  </div>
                </div>

                <div className={style.item}>
                  <div className={style.label}>
                    <label htmlFor="">Your Message</label>
                  </div>
                  <div className={style.textarea}>
                    <textarea
                      placeholder="What you want to say?"
                      name="message"
                      onChange={handleInputValue}
                      value={form.message}
                    ></textarea>
                  </div>
                </div>
                <div className={style.btn}>
                  <button onClick={handleSubmit}>
                    {btnLoading ? (
                      <div className={style.loading}>
                        <Loading />
                      </div>
                    ) : (
                      <>
                        <span>Send</span>
                      </>
                    )}
                  </button>
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
