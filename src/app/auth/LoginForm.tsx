import loginSchema from "@/src/validatons/Login";
import BaseInput from "@/src/components/BaseInput";
import FormBase from "@/src/components/FormBase";
import style from "./style.module.scss";

export default function LoginForm() {
  const formValues = {
    username: "",
    password: "",
  };
  return (
    <FormBase
      rules={loginSchema}
      values={formValues}
      submit={() => {
        console.log("submit");
      }}
    >
      <span className={style.infoText}>
        If you have an account, sign in with your username or email address.
      </span>
      <BaseInput type="text" name="username" label="Username*" />
      <BaseInput type="password" name="password" label="Password*" />
      <button className={style.submitButton} type="submit">
        Login
      </button>
    </FormBase>
  );
}
