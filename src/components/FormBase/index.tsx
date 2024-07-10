// Ensure this file is marked as client-side
"use client";

import React from "react";
import * as yup from "yup";

interface FormBaseProps extends React.HTMLAttributes<HTMLFormElement> {
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

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitting form", Rules, props.submit);
    if (!Rules) {
      return props.submit();
    }
    Rules.validate(props.values, { abortEarly: false }).then(
      () => {
        setErrors({});
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

  return (
    <form
      // {...props}
      onSubmit={submit}
    >
      <ErrorContext.Provider value={{ errors, values: props.values }}>
        {props.children}
      </ErrorContext.Provider>
    </form>
  );
}
