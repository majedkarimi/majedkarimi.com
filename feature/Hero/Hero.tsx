"use client";
import { useEffect } from "react";
import style from "./hero.module.scss";
import { useAppSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";
import { getInfo } from "@/store/info/actions";
import { AppDispatch } from "@/store/store";
import { infoType } from "@/types/info";
import Placeholder from "../common/placeHolder/Placeholder";
import { placeHolder } from "@/types/common";
import { scrollTosection } from "@/helpers/healper";
import ProgrammingAnimate from "../common/lottieAnimate/Programming";
const Hero = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useAppSelector((state) => state.info);
  useEffect(() => {
    dispatch(getInfo());
  }, []);

  console.log("data", data);
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
                {data?.title} <span>{data?.title_name}</span>
              </h1>
              <div className={style.info}>
                <p>{data?.description}</p>
              </div>
            </div>
          )}
        </div>
        <div className={style.canvas}>
          <ProgrammingAnimate />
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
