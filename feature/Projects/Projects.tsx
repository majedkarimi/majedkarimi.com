"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getProjects } from "@/store/project/actions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import style from "./projects.module.scss";
import ProjectItem from "./ProjectItem";
import { placeHolder } from "@/types/common";
import Placeholder from "../UI/placeHolder/Placeholder";
const Projects = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getProjects());
  }, []);
  const { data, loading } = useAppSelector((state) => state.project);
  console.log(data);
  return (
    <section className={style.project} id="projects">
      <div className={`${style.inner} container`}>
        {loading ? (
          <div className="flex flex-wrap justify-center items-center gap-8 w-full">
            <Placeholder type={placeHolder.CARD} number={3} />
          </div>
        ) : (
          <>
            <div className={style.head}>
              <div className={style.info}>
                <span>MY WORK</span>
              </div>
              <div className={style.name}>
                <h3>Projects.</h3>
              </div>
              <div className={style.desc}>
                <p>
                  Following projects showcases my skills and experience through
                  real-world examples of my work. Each project is briefly
                  described with links to code repositories and live demos in
                  it. It reflects my ability to solve complex problems, work
                  with different technologies, and manage projects effectively.
                </p>
              </div>
            </div>
            <div className={style.items}>
              {data?.map((item) => (
                <ProjectItem {...item} key={item.id} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
