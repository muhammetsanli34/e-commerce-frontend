"use client";
import BaseInput from "@/src/components/BaseInput";
import FormBase from "@/src/components/FormBase";

export default function Register() {
  const formValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <div>
      <h1>Register</h1>
      <FormBase
        values={formValues}
        submit={() => {
          console.log("submit");
        }}
      >
        <div>
          <BaseInput
            type="text"
            name="
            username
          "
          />
        </div>
        <div>
          <BaseInput type="email" />
        </div>
      </FormBase>
    </div>
  );
}
