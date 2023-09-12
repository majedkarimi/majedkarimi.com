"use client";
import { forwardRef, InputHTMLAttributes } from "react";
import style from "./input.module.scss";
interface prop extends InputHTMLAttributes<HTMLInputElement> {
  calssName?: string;
}
const Input = forwardRef<HTMLInputElement, prop>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={`${style["common-input"]} ${props.className}`}
    />
  );
});
Input.displayName = "Input";
export default Input;
