"use server";

import BaseInput from "@/src/components/BaseInput";
import FormBase from "@/src/components/FormBase";
import style from "./style.module.scss";
import { cookies } from "next/headers";
import Swal from "sweetalert2";
import { redirect } from "next/navigation";

export default async function LoginForm() {
  const formValues = {
    username: "",
    password: "",
  };

  const submit = async () => {
    "use server";
    console.log("submitting form2");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      cookies().set("token", data.token);
      redirect("/my-account");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data.message,
      });
    }
  };

  return (
    <FormBase
      rules="Login"
      values={formValues}
      submit={submit}
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
