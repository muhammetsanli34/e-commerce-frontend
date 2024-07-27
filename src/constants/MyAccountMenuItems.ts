import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default [
  {
    title: "Dashboard",
    link: "/my-account",
  },
  {
    title: "Orders",
    link: "/my-account/orders",
  },
  {
    title: "Wishlist",
    link: "/my-account/wishlist",
  },
  {
    title: "Logout",
    link: "/logout",
  },
];
