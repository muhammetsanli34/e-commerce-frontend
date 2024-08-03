"use client";

import BaseInput from "@/src/components/BaseInput";
import FormBase from "@/src/components/FormBase";
import style from "./style.module.scss";
import authAction from "@/src/actions/auth";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function RegisterForm() {
  const router = useRouter();
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
    try {
      console.log("formValues", formValues);
      const { data } = await authAction("register", formValues);
      console.log("data", data);
      router.push("/my-account");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error as string,
        icon: "error",
        confirmButtonText: "OK",
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
