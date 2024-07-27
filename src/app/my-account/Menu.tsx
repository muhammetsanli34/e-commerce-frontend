"use client";
import style from "./style.module.scss";

interface MenuItem {
  title: string;
  link: string | (() => Promise);
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
          onClick={() => {
            if (typeof item.link === "string") {
              location.pathname = item.link;
            } else {
              item.link();
            }
          }}
        >
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
}
