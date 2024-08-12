"use server";

import { cookies } from "next/headers";
import WishlistItem from "../models/WishlistItem";

export default async function getWishlists(
  cache: RequestCache = "default"
): Promise<Array<WishlistItem>> {
  const token = cookies().get("access_token")?.value;
  const url = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/user/get_wishlists`
  );

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);
  console.log("cache", cache);
  const response = await fetch(url.href, {
    method: "GET",
    headers,
    cache,
  });

  console.log("response", response);

  if (!response.ok) {
    return [];
  }

  const data = await response.json();
  return data.wishlists;
}
