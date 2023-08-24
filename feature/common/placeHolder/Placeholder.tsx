"use client";
import React from "react";
import "./placeholder.scss";
import { placeHolder } from "@/types/common";

interface prop {
  type: placeHolder.CARD | placeHolder.CONTENT | placeHolder.IMAGE;
  number: number;
  width?: string;
}
const Placeholder: React.FC<prop> = ({ type, number, width }) => {
  const holder = [];
  if (type === placeHolder.CARD) {
    for (let index = 0; index < number; index++) {
      holder.push(
        <article key={index} style={{ width: width }}>
          <div className="image loading"></div>
          <div className="loading"></div>
          <div className="loading"></div>
          <div className="loading"></div>
        </article>
      );
    }
  }
  if (type === placeHolder.CONTENT) {
    for (let index = 0; index < number; index++) {
      holder.push(
        <article key={index} style={{ width: width }}>
          <div className="loading"></div>
        </article>
      );
    }
  }
  if (type === placeHolder.IMAGE) {
    for (let index = 0; index < number; index++) {
      holder.push(
        <article key={index} style={{ width: width }}>
          <div className="image loading"></div>
        </article>
      );
    }
  }
  return <>{...holder}</>;
};

export default Placeholder;
