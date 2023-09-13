"use client";
import { useState, useRef, ChangeEvent } from "react";
import style from "./contact.module.scss";
import { useAppSelector } from "@/store/hooks";
import emailjs from "@emailjs/browser";
import {
  EMAIL_PUBLIC_KEY,
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
} from "@/constants/endPoints";
import SuccessEmail from "./SuccessEmail";
import EarthAnimate from "../UI/lottieAnimate/Earth";
import Input from "../UI/input/Input";
import Loading from "../UI/lottieAnimate/Loading";
const Contact = () => {
  const { loading } = useAppSelector((state) => state.project);
  const [btnLoading, setBtnLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  const [modal, setModal] = useState(false);
  const handleInputValue = function (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { value, name } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = function () {
    if (!form.name) {
      nameInputRef.current?.focus();
      return;
    } else if (!form.email) {
      emailInputRef.current?.focus();
      return;
    } else if (!form.message) {
      messageInputRef.current?.focus();
      return;
    }
    setBtnLoading(true);
    emailjs
      .send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Majed",
          from_email: form.email,
          to_email: "majed.karimi3@gmail.com",
          message: form.message,
        },
        EMAIL_PUBLIC_KEY
      )
      .then(() => {
        setModal(true);
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
      {modal && (
        <SuccessEmail
          onClose={() => {
            setModal(false);
            document.body.style.overflow = "auto";
          }}
        />
      )}
      <div className={style["contact-inner"]}>
        {!loading && (
          <>
            <div className={style.planet}>
              <EarthAnimate />
            </div>
            <div className={style.email}>
              <div className={style.title}>
                <span className={style.info}>{`LET'S STAY IN CONTACT`}</span>
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
                      ref={nameInputRef}
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
                      ref={emailInputRef}
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
                      ref={messageInputRef}
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
