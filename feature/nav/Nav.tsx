"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getNavLinks } from "@/store/nav/actions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import Image from "next/image";
import style from "./nav.module.scss";
import { placeHolder } from "@/types/common";
import Placeholder from "../common/placeHolder/Placeholder";

const Navigation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useAppSelector((state) => state.nav);
  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    dispatch(getNavLinks());
  }, []);
  const handleToggleMenu = function () {
    setToggleMenu((prev) => !prev);
  };
  return (
    <nav className={style.nav}>
      <div className={style.inner}>
        <div className={style.logo}>
          <Image
            src={"/assets/img/majed-logo.png"}
            alt="logo"
            width={50}
            height={50}
          />
          <span>Majed</span>
        </div>
        <div className={style.menu}>
          <div className={`${style["menu-icon"]} mobile`}>
            <figure className={style.open} onClick={handleToggleMenu}>
              <Image
                src={`/assets/icon/${toggleMenu ? "close" : "menu"}.svg`}
                alt="open"
                width={30}
                height={30}
              />
            </figure>
          </div>

          <ul
            className={`${style["menu-items"]} ${
              toggleMenu ? "mobile" : "desktop"
            }`}
          >
            {loading && <Placeholder type={placeHolder.CONTENT} number={1} />}
            {data?.map((item) => (
              <li className={style["menu-item"]} key={item.id}>
                <a href={`#${item.scroll}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
