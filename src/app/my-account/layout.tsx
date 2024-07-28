"use server";

import getUser from "@/src/lib/getUser";
import style from "./style.module.scss";
import menuItems from "@/src/constants/MyAccountMenuItems";
import Menu from "./Menu";
export default async function MyAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // use the cached data
  const user = await getUser("force-cache");
  console.log("menuItems", menuItems);
  return (
    <div className="container">
      <div className={style.layoutGrid}>
        <div>
          <h1 className={style.header}>
            Welcome back <b>{user?.name}</b>
          </h1>

          <Menu menuItems={menuItems} />
        </div>
        {children}
      </div>
    </div>
  );
}
