"use client";
import { useEffect } from "react";
import style from "./hero.module.scss";
import ComputerCanvas from "../canvas/computer/Computers";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";
import { getHero } from "@/store/hero/actions";
import { AppDispatch } from "@/store/store";
import { heroType } from "@/types/hero";
import Placeholder from "../common/placeHolder/Placeholder";
import { placeHolder } from "@/types/common";
import { scrollTosection } from "@/helpers/healper";
const Hero = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useAppSelector((state) => state.hero);
  useEffect(() => {
    dispatch(getHero());
  }, []);

  const heroData: heroType | null = data ? data[0] : null;

  return (
    <section className={`${style.hero}`}>
      <div className={style.inner}>
        <div className={style.title}>
          <div className={style.line}>
            <span className={style.circle}></span>
            <span className={style.height}></span>
          </div>

          {loading ? (
            <div className="flex gap-3 flex-col w-full">
              <Placeholder type={placeHolder.CONTENT} number={4} />
            </div>
          ) : (
            <div className={style.name}>
              <h1>
                {heroData?.title} <span>{heroData?.title_name}</span>
              </h1>
              <div className={style.info}>
                <p>{heroData?.description}</p>
              </div>
            </div>
          )}
        </div>
        <div className={style.canvas}>
          <ComputerCanvas />
        </div>
        <div className={style.more}>
          <div
            className={style.box}
            onClick={() => scrollTosection("experience")}
          >
            <div className={style.circle}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
