"use client";
import Link from "next/link";
import style from "./style.module.scss";

interface MenuItem {
  title: string;
  link: string;
}

export default function MyAccountMenu({
  menuItems,
}: {
  menuItems: MenuItem[];
}) {
  return (
    <ul className={style.menu}>
      {menuItems.map((item) => (
        <li
          key={item.title}
          className={`${style.menuItem}
          ${location.pathname === item.link ? style.menuItemActive : ""}
          `}
        >
          <Link href={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
