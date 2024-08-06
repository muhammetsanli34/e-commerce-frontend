"use client";
import { ErrorContext } from "../FormBase";
import style from "./style.module.scss";

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export default function BaseInput(props: BaseInputProps) {
  return (
    <ErrorContext.Consumer>
      {({ errors, values }) => (
        (
          <div
            className={`${style.baseInputWrapper} ${
              errors[props.name] ? "error" : ""
            }`}
          >
            <label htmlFor={props.name} className={style.label}>
              {props.label}
            </label>
            <input
              {...props}
              onChange={(e) => {
                props.onChange
                  ? props.onChange(e)
                  : (values[props.name] = e.target.value);
              }}
              className={`${style.baseInput} ${props.className ?? ""}`}
            />
            <span
              className={style.error}
              style={{ display: errors[props.name] ? "block" : "none" }}
            >
              {errors[props.name]}
            </span>
          </div>
        )
      )}
    </ErrorContext.Consumer>
  );
}
