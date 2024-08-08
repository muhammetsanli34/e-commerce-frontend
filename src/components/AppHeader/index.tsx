"use client";
import Link from "next/link";
import style from "./style.module.scss";
import TopbarSelect from "../TopbarSelect";
import AppSearch from "../AppSearch";
import AppIcon from "../AppIcon";
import getUser from "@/src/lib/getUser";
import { useEffect, useState } from "react";
import User from "@/src/models/User";

export default function AppHeader() {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    getUser("force-cache").then((user) => {
      console.log("user", user);
      setUser(user);
    });
  }, []);
  return (
    <header className="container">
      <div className={style.topbar}>
        <ul>
          <li>
            <Link href="/">FAQ</Link>
          </li>
          <li>
            <Link href={"/"}>My Account</Link>
          </li>
          <li>
            <Link href={"/"}>About Us</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"/"}>Order Tracking</Link>
          </li>
          <li>
            <TopbarSelect
              elements={["English", "Turkish", "German", "Spanish"]}
              onChange={() => {}}
            />
          </li>
        </ul>
      </div>
      <hr />
      <div className={style.header}>
        <AppIcon icon="ti ti-menu-2" size="md" className={style.menuIcon} />
        <Link href={"/"}>
          <img src={"/images/logo.png"} />
        </Link>
        <div className={style.search}>
          <AppSearch />
        </div>
        <div className={style.linkGroup}>
          <AppIcon icon="ti ti-heart" size="md" />
          <span>Wish List</span>
        </div>
        <Link href={"my-account"} className={style.linkGroup}>
          <AppIcon icon="ti ti-user" size="md" />
          {user ? (
            <span>
              Welcome <br />
              {user.email}
            </span>
          ) : (
            <span>Sign In</span>
          )}
        </Link>
        <AppIcon icon="ti ti-shopping-bag" size="md" />
      </div>
    </header>
  );
}
