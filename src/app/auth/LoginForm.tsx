import loginSchema from "@/src/validatons/Login";
import BaseInput from "@/src/components/BaseInput";
import FormBase from "@/src/components/FormBase";

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
      <BaseInput type="text" name="username" label="Username" />
      <BaseInput type="password" name="password" label="Password" />
      <button type="submit">Login</button>
    </FormBase>
  );
}
