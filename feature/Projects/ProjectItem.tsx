import React from "react";
import style from "./projects.module.scss";
import Image from "next/image";
import { projectsType } from "@/types/projects";
const ProjectItem: React.FC<projectsType> = (props) => {
  return (
    <div className={style.item}>
      <a href={props.source_code_link} target="_blank" className={style.image}>
        <Image src={props.image} alt={props.name} width={430} height={230} />
        <div className={style.source}>
          <Image
            src={props.source_code_img}
            alt={props.name}
            width={20}
            height={20}
          />
        </div>
      </a>
      <div className={style.title}>
        <span>{props.name}</span>
      </div>
      <div className={style.info}>
        <p>{props.description}</p>
      </div>
      <div className={style.tags}>
        {props.tags.map((item, index) => (
          <span className={style.tag} key={index}>{`#${item}`}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
