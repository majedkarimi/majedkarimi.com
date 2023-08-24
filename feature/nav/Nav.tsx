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
import { scrollTosection } from "@/helpers/healper";

const Navigation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useAppSelector((state) => state.nav);
  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    dispatch(getNavLinks());
    console.log(document.getElementById("tech"));
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
    </nav>
  );
};

export default Navigation;
