"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getSkills } from "@/store/skills/actions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
const Skils = () => {
  const disPatch = useDispatch<AppDispatch>();
  useEffect(() => {
    disPatch(getSkills());
  }, []);
  return <div>Skils</div>;
};

export default Skils;
