import BaseInput from "@/src/components/BaseInput";
import FormBase from "@/src/components/FormBase";
import registerSchema from "@/src/validatons/Register";
import style from "./style.module.scss";

export default function RegisterForm() {
  const formValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  return (
    <FormBase
      rules={registerSchema}
      values={formValues}
      submit={() => {
        console.log("submit");
      }}
    >
      <BaseInput
        type="text"
        name="
            username
          "
        label="Username*"
      />
      <BaseInput type="email" name="email" label="Email*" />
      <BaseInput type="password" name="password" label="Password*" />
      <BaseInput
        type="password"
        name="confirmPassword"
        label="Confirm Password*"
      />
      <button type="submit" className={style.submitButton}>
        REGISTER
      </button>
    </FormBase>
  );
}
