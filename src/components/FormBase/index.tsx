"use client";

import React from "react";
import * as yup from "yup";

interface FormBaseProps extends React.HTMLAttributes<HTMLFormElement> {
  rules?: yup.ObjectSchema<any>;
  children: React.ReactNode;
  submit: () => void;
  values: any;
}

export const ErrorContext = React.createContext<any>({});

export default function FormBase(props: FormBaseProps) {
  const [errors, setErrors] = React.useState<any>({});

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.rules?.validate(props.values, { abortEarly: false }).then(
      () => {
        setErrors({});
      },
      (err) => {
        const errors: any = {};
        err.inner.forEach((error: any) => {
          errors[error.path] = error.message;
        });
        setErrors(errors);
      }
    );
    props.submit();
  };

  return (
    <form {...props} className="w-full" onSubmit={(e) => submit(e)}>
      <ErrorContext.Provider value={{ errors, values: props.values }}>
        {props.children}
      </ErrorContext.Provider>
    </form>
  );
}