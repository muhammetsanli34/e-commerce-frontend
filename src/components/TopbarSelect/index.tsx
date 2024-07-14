"use client";
import AppIcon from "../AppIcon";
import style from "./style.module.scss";

interface TopbarSelectProps {
  elements: string[];
  onChange: (value: string) => void;
}

export default function TopbarSelect(props: TopbarSelectProps) {
  return (
    <div className={style.topbarSelect}>
      <select onChange={(e) => props.onChange(e.target.value)}>
        {props.elements.map((element, index) => (
          <option key={index} value={element}>
            {element}
          </option>
        ))}
      </select>
      <AppIcon icon="ti ti-chevron-down" />
    </div>
  );
}
