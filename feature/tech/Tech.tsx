"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getSkills } from "@/store/tech/actions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import style from "./tech.module.scss";
import Image from "next/image";
const Skils = () => {
  const disPatch = useDispatch<AppDispatch>();
  useEffect(() => {
    disPatch(getSkills());
  }, []);
  const { data, loading } = useAppSelector((state) => state.tech);
  return (
    <section className={style.tech}>
      <div className={style.inner}>
        <div className={style.title}>
          <div className={style.text}>
            <p>The technologies I use</p>
          </div>
          <div className={style.name}>
            <span>Tech</span>
          </div>
        </div>
        <div className={style.items}>
          {data?.map((item) => (
            <div className={style.item} key={item.id}>
              <div className={style.image}>
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={100}
                  height={100}
                />
              </div>
              <div className={style.name}>
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skils;
