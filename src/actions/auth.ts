"use server";

import { cookies } from "next/headers";

export default async function authAction(
  endpoint: "login" | "register",
  formValues: any
) {
  try {
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
    if (response.ok) {
      cookies().set("access_token", data.token);
      return Promise.resolve(data);
    } else {
      return Promise.reject(new Error(data.detail || "Something went wrong"));
    }
  } catch (error: any) {
    return Promise.reject(new Error(error));
  }
}
