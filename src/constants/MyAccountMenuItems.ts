import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const logout = async () => {
  "use server";
  cookies().delete("access_token");
  console.log("logout");
  redirect("/auth");
};

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
    link: "/logout"
  },
];
