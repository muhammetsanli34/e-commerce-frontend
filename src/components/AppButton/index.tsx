"use client";

import { useEffect, useState } from "react";
import style from "./style.module.scss";

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "danger" | "success";
  color?: string;
  backgroundColor?: string;
  onHoverColor?: string;
  onHoverBackgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  padding?: string;
}

export default function AppButton({ children, ...props }: AppButtonProps) {
  const [customStyle, setCustomStyle] = useState({
    color: props.color || "white",
    backgroundColor: props.backgroundColor || "black",
    borderColor: props.borderColor || "black",
    borderRadius: props.borderRadius || "5px",
    border: "1px solid",
    width: props.width || "",
    height: props.height || "null",
    padding: props.padding || "",
  });

  return (
    <button
      onMouseOver={() => {
        if (props.onHoverColor || props.onHoverBackgroundColor) {
          setCustomStyle({
            ...customStyle,
            color: props.onHoverColor,
            backgroundColor: props.onHoverBackgroundColor
              ? props.onHoverBackgroundColor
              : customStyle.backgroundColor
              ? customStyle.backgroundColor
              : "black",
            width: props.width || "auto",
            height: props.height || "auto",
          });
        }
      }}
      onMouseLeave={() => {
        setCustomStyle({
          ...customStyle,
          color: props.color || "white",
          backgroundColor: props.backgroundColor || "black",
          borderColor: props.borderColor || "black",
          borderRadius: props.borderRadius || "5px",
          border: "1px solid",
          width: props.width || "auto",
          height: props.height || "auto",
        });
      }}
      style={customStyle}
      {...props}
      className={`${style.appButton}`}
    >
      {children}
    </button>
  );
}
