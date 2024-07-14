"use client";

import style from "./style.module.scss";
import { IconChevronDown } from "@tabler/icons-react";
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
      <IconChevronDown size={20} />
    </div>
  );
}
