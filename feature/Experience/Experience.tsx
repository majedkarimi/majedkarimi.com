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
import { placeHolder } from "@/types/common";
import Placeholder from "../UI/placeHolder/Placeholder";
const Experience = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getExperience());
  }, []);
  const { data, error, loading } = useAppSelector((state) => state.experience);
  return (
    <section className={style.experience} id="experience">
      <div className={style.inner}>
        {loading ? (
          <div className="flex  justify-center items-center  w-full ">
            <div className="flex justify-center items-center flex-wrap max-w-5xl gap-6">
              <Placeholder type={placeHolder.CARD} number={6} />
            </div>
          </div>
        ) : (
          <>
            <div className={style["experience-info"]}>
              <div className={style["experience-title"]}>
                <p> What I have done so far</p>
              </div>
              <div className={style["experience-name"]}>
                <h3>Work Experience.</h3>
              </div>
            </div>
            <VerticalTimeline>
              {data?.map((item) => (
                <ExperienceCard {...item} key={item.id} />
              ))}
            </VerticalTimeline>
          </>
        )}
      </div>
    </section>
  );
};

export default Experience;
