"use client";

import React from "react";
import * as yup from "yup";

interface FormBaseProps {
  rules?: string;
  children: React.ReactNode;
  submit: () => void;
  values: any;
}

export const ErrorContext = React.createContext<any>({});

export default function FormBase(props: FormBaseProps) {
  const [errors, setErrors] = React.useState<any>({});
  let Rules:
    | yup.ObjectSchema<any>
    | yup.StringSchema<string>
    | yup.NumberSchema<number>
    | yup.DateSchema<Date>
    | yup.BooleanSchema<boolean>
    | yup.MixedSchema<any>
    | yup.Lazy<any, any>
    | null = null;

  if (props.rules) {
    import(`@/src/validatons/${props.rules}`).then((module) => {
      Rules = module.default;
    });
  }

  const submit = async () => {
    "use client";
    if (!Rules) {
      return props.submit();
    }
    Rules.validate(props.values, { abortEarly: false }).then(
      () => {
        setErrors({});
        console.log("submitting form", props.submit);
        props.submit();
      },
      (err) => {
        const validationErrors: any = {};
        err.inner.forEach((error: any) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      }
    );
  };

  const formRef = React.useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <ErrorContext.Provider value={{ errors, values: props.values, submit }}>
        {props.children}
      </ErrorContext.Provider>
    </form>
  );
}
