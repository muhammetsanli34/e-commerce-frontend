import { ErrorContext } from "../FormBase";
import style from "./style.module.scss";

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export default function BaseInput(props: BaseInputProps) {
  return (
    <ErrorContext.Consumer>
      {({ errors, values }) => (
        <div className="flex flex-col">
          <input
            {...props}
            className={`${style.baseInput} ${props.className ?? ""}`}
          />
          ;<span className="text-red-500">{errors[props.name]}</span>
        </div>
      )}
    </ErrorContext.Consumer>
  );
}
