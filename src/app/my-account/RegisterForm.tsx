"use server";

import BaseInput from "@/src/components/BaseInput";
import FormBase from "@/src/components/FormBase";
import style from "./style.module.scss";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";

export default async function RegisterForm() {
  const formValues = {
    username: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_number: "",
  };

  const submit = async () => {
    "use server";

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/register`,
      {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "content-type": "application/json",
        },
      }
    );
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
    <FormBase rules="Register" values={formValues} submit={submit}>
      <span className={style.infoText}>
        There are many advantages to creating an account: the payment process is
        faster, shipment tracking is possible and much more.
      </span>
      <BaseInput type="text" name="username" label="Username*" />
      <BaseInput type="text" name="name" label="Name*" />
      <BaseInput type="text" name="surname" label="Surname*" />
      <BaseInput type="email" name="email" label="Email*" />
      <BaseInput type="password" name="password" label="Password*" />
      <BaseInput
        type="password"
        name="confirm_password"
        label="Confirm Password*"
      />
      <BaseInput type="tel" name="phone_number" label="Phone Number" />
      <button type="submit" className={style.submitButton}>
        REGISTER
      </button>
      <span className={style.infoText}>
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our privacy policy.
      </span>
    </FormBase>
  );
}
