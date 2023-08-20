"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getProjects } from "@/store/project/actions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
const Projects = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getProjects());
  }, []);
  const { data, loading } = useAppSelector((state) => state.project);
  console.log(data);
  return <div>Projects</div>;
};

export default Projects;
