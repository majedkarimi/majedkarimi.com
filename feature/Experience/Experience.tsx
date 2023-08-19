"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";
import { getExperience } from "@/store/experience/actions";
import { AppDispatch } from "@/store/store";
import style from "./experience.module.scss";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "./ExperienceCard";
import Placeholder from "../common/placeHolder/Placeholder";
import { placeHolder } from "@/types/common";
const Experience = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getExperience());
  }, []);
  const { data, error, loading } = useAppSelector((state) => state.experience);
  return (
    <section className={style.experience}>
      <div className={style.inner}>
        <div className={style["experience-info"]}>
          <div className={style["experience-title"]}>
            <p> What I have done so far</p>
          </div>
          <div className={style["experience-name"]}>
            <h3>Work Experience.</h3>
          </div>
        </div>
        {loading ? (
          <div className="flex  justify-center items-center  w-full ">
            <div className="flex justify-center items-center flex-wrap max-w-5xl gap-6">
              <Placeholder type={placeHolder.CARD} number={6} />
            </div>
          </div>
        ) : (
          <VerticalTimeline>
            {data?.map((item) => (
              <ExperienceCard {...item} key={item.id} />
            ))}
          </VerticalTimeline>
        )}
      </div>
    </section>
  );
};

export default Experience;