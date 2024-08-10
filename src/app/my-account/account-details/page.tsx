"use client";
import BaseInput from "@/src/components/BaseInput";
import FormBase from "@/src/components/FormBase";
import getUser from "@/src/api/getUser";
import User from "@/src/models/User";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import style from "./style.module.scss";

type FormValues = User & {
  password: string;
  old_password: string;
  confirm_password: string;
};

export default function AccountDetails() {
  const [formValues, setFormValues] = useState<FormValues>({} as FormValues);
  const pathname = usePathname();
  const setUser = async () => {
    getUser("force-cache").then((user) => {
      if (user) {
        setFormValues(user as FormValues);
      }
    });
  };

  useEffect(() => {
    setUser();
  }, [pathname]);

  const submitEditProfile = async () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/edit-profile`, {
      method: "PUT",
      body: JSON.stringify(formValues),
      headers: {
        "content-type": "application/json",
      },
    }).then((response) => {
      if (response.status === 200) {
        Swal.fire({
          title: "Success",
          text: "Your account details have been updated",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        response.json().then((data) => {
          alert(data.message);
        });
      }
    });
  };
  return (
    <FormBase
      rules="AccountDetail"
      values={formValues}
      submit={submitEditProfile}
    >
      <BaseInput
        type="text"
        name="username"
        label="Username*"
        value={formValues.username}
      />
      <BaseInput
        type="text"
        name="name"
        label="Name*"
        value={formValues.name}
      />
      <BaseInput
        type="text"
        name="surname"
        label="Surname*"
        value={formValues.surname}
      />
      <BaseInput
        type="email"
        name="email"
        label="Email*"
        value={formValues.email}
      />
      <BaseInput
        type="tel"
        name="phone_number"
        label="Phone Number"
        value={formValues.phone_number}
      />
      <h1>Password Change</h1>

      <BaseInput
        type="password"
        name="old_password"
        label="New Password"
        value={formValues.old_password}
      />
      <BaseInput
        type="password"
        name="password"
        label="Current Password"
        value={formValues.password}
      />
      <BaseInput
        type="password"
        name="confirm_password"
        label="Confirm Password"
        value={formValues.confirm_password}
      />

      <button type="submit" className={style.submitBtn}>
        Save changes
      </button>
    </FormBase>
  );
}
