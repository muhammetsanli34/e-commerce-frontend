"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.scss";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
      <FontAwesomeIcon icon={faChevronDown} color="#000"
        size="sm"
      />
    </div>
  );
}
