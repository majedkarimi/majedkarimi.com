import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import style from "./experience.module.scss";
import { experienceType } from "@/types/experience";
const ExperienceCard: React.FC<experienceType> = (props) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={props.date}
      iconStyle={{ background: `${props.iconBg}` }}
      icon={
        <div className={style["icon-company"]}>
          <Image
            src={props.icon}
            alt={props.company_name}
            width={30}
            height={30}
          />
        </div>
      }
      className={style["experience-item"]}
    >
      <div className={style.title}>{props.title}</div>
      <div className={style.company}>{props.company_name}</div>
      <ul className={style["point-items"]}>
        {props.points.map((item, index) => (
          <li className={style["point-item"]} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
