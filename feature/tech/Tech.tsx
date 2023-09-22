"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getSkills } from "@/store/tech/actions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import style from "./tech.module.scss";
import Image from "next/image";
import { techType } from "@/types/tech";
import { placeHolder } from "@/types/common";
import Placeholder from "../UI/placeHolder/Placeholder";
const Skils = () => {
  const disPatch = useDispatch<AppDispatch>();
  useEffect(() => {
    disPatch(getSkills());
  }, []);
  const { data, loading } = useAppSelector((state) => state.tech);
  return (
    <section className={style.tech} id="tech">
      <div className={style.inner}>
        {loading ? (
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Placeholder type={placeHolder.IMAGE} number={9} width="7rem" />
          </div>
        ) : (
          <>
            <div className={style.title}>
              <div className={style.text}>
                <p>The technologies I use</p>
              </div>
              <div className={style.name}>
                <span>Tech</span>
              </div>
            </div>
            <div className={style.items}>
              {data?.map((item: techType) => (
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
          </>
        )}
      </div>
    </section>
  );
};

export default Skils;
