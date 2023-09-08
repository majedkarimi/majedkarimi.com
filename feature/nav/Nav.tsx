"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { getNavLinks } from "@/store/nav/actions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import Image from "next/image";
import style from "./nav.module.scss";
import { placeHolder } from "@/types/common";
import Placeholder from "../common/placeHolder/Placeholder";
import { scrollTosection } from "@/helpers/healper";
import { infoType } from "@/types/info";

const Navigation = (props: infoType) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useAppSelector((state) => state.nav);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [fixeNav, setFixNav] = useState(false);
  useEffect(() => {
    dispatch(getNavLinks());
    const handleScroll = () => {
      const scroll = window.scrollY;
      console.log(scroll);
      if (scroll > 70) {
        setFixNav(true);
      } else {
        setFixNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleToggleMenu = function () {
    setToggleMenu((prev) => !prev);
    document.body.style.overflow = !toggleMenu ? "hidden" : "auto";
  };
  return (
    <nav className={`${style.nav} ${fixeNav || loading ? style.fixed : ""}`}>
      <div className={style.inner}>
        <div className={style.logo} onClick={() => scrollTosection("app")}>
          <Image src={props.logo} alt="logo" width={50} height={50} />
          <span>{props.logo_name}</span>
        </div>
        <div className={style.menu}>
          <div
            className={`${style["menu-icon"]} mobile`}
            onClick={handleToggleMenu}
          >
            <Image
              src={`/assets/icon/menu.svg`}
              alt="open"
              width={30}
              height={30}
              className={`${
                toggleMenu ? style["close-menu"] : style["open-menu"]
              } fade-out`}
            />
            <Image
              src={`/assets/icon/close.svg`}
              alt="open"
              width={30}
              height={30}
              className={`${
                toggleMenu ? style["open-menu"] : style["close-menu"]
              } fade-out`}
            />
          </div>
          <div
            className={`${style["nav-menu-container"]}  ${
              toggleMenu ? style["open-menu"] : style["close-menu"]
            }`}
            onClick={handleToggleMenu}
          >
            <ul className={`${style["menu-items"]} slide-right`}>
              {loading ? (
                <div className="flex flex-wrap justify-center items-center gap-4 w-full ">
                  <Placeholder
                    type={placeHolder.CONTENT}
                    number={3}
                    width="7rem"
                  />
                </div>
              ) : (
                <>
                  {data?.map((item) => (
                    <li
                      className={style["menu-item"]}
                      key={item.id}
                      onClick={() => scrollTosection(item.scroll)}
                    >
                      <span>{item.title}</span>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
