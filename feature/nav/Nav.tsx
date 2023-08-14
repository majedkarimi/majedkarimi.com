"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getNavLinks } from "@/store/nav/actions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
const Navigation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, error, loading } = useAppSelector((state) => state.nav);

  useEffect(() => {
    dispatch(getNavLinks());
  }, []);
  return <div>Navigation</div>;
};

export default Navigation;
