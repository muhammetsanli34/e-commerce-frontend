"use client";
import BaseInput from "@/src/components/BaseInput";
import FormBase from "@/src/components/FormBase";
import registerSchema from "@/src/validatons/Register";

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
        rules={registerSchema}
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
          <BaseInput type="email" name="email" />
        </div>
      </FormBase>
    </div>
  );
}
