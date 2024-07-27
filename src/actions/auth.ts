"use server";

import { cookies } from "next/headers";
import Swal from "sweetalert2";

export default async function authAction(
  endpoint: "login" | "register",
  formValues: any
) {
  console.log ("endpoint", endpoint);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/${endpoint}`,
    {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log("data", data);
  if (response.status === 200) {
    cookies().set("access_token", data.access_token);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: data.message,
    });
  }
}
