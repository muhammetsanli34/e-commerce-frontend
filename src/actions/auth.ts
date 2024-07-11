"use server";

import { cookies } from "next/headers";
import Swal from "sweetalert2";

export default async function authAction(
  endpoint: "login" | "register",
  formValues: any
) {
  console.log("authAction", endpoint, formValues);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`,
    {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const data = await response.json();
  if (response.status === 200) {
    cookies().set("token", data.token);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: data.message,
    });
  }
}
