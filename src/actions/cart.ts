"use server";

import { cookies } from "next/headers";
import CartItem from "../models/Cart";

// cart.ts

export async function getCart(): Promise<{
  item_detail: Array<CartItem>;
}> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/order/get_basket_detail`);

  const token = cookies().get("access_token")?.value;

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);

  const response = await fetch(url.href, {
    method: "GET",
    headers,
  });

  return await response.json();
}

export async function addToCart(listing_id: string): Promise<{
  item_detail: Array<CartItem>;
}> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/cart/add_to_cart`);

  const token = cookies().get("access_token")?.value;

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);
  headers.append("Content-Type", "application/json");

  const response = await fetch(url.href, {
    method: "POST",
    headers,
    body: JSON.stringify({ listing_id }),
  });

  return await response.json();
}
