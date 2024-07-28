"use client";

import BaseInput from "@/src/components/BaseInput";
import FormBase from "@/src/components/FormBase";
import style from "./style.module.scss";
import authAction from "@/src/actions/auth";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function LoginForm() {
  const router = useRouter();
  const formValues = {
    username: "",
    password: "",
  };

  return (
    <FormBase
      rules="Login"
      values={formValues}
      submit={async () => {
        authAction("login", formValues)
          .then(() => {
            router.push("/my-account");
          })
          .catch((error) => {
            console.log("error", error);
            Swal.fire({
              title: "Error!",
              text: error,
              icon: "error",
              confirmButtonText: "OK",
            });
          });
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
