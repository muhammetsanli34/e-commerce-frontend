"use server";

import getUser from "@/src/lib/getUser";
import style from "./style.module.scss";
import { cookies } from "next/headers";
import menuItems from "@/src/constants/MyAccountMenuItems";
import Link from "next/link";
import Menu from "./Menu";
export default async function MyAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // use the cached data
  const user = await getUser(
    cookies().get("access_token")?.value,
    "force-cache"
  );
  console.log("menuItems", menuItems);
  return (
    <div className="container">
      <h1>
        Welcome back <b>{user?.name}</b>
      </h1>
      <div className={style.layoutGrid}>
        <Menu menuItems={menuItems} />
        {children}
      </div>
    </div>
  );
}
