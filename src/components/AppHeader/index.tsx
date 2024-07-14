"use client";
import Link from "next/link";
import style from "./style.module.scss";
import TopbarSelect from "../TopbarSelect";
import AppSearch from "../AppSearch";
import { IconHeart, IconShoppingBag, IconUser } from "@tabler/icons-react";

export default function AppHeader() {
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
        <Link href={"/"}>
          <img src={"/images/logo.png"} />
        </Link>
        <AppSearch />
        <div className={style.linkGroup}>
          <IconHeart stroke={2} />
          <span>Wish List</span>
        </div>
        <Link href={"my-account"} className={style.linkGroup}>
          <IconUser stroke={2} />
          <span>
            Welcome <br />
            muhammetsanli34@gmail.com
          </span>
        </Link>
        <IconShoppingBag stroke={2} size={50} />
      </div>
    </header>
  );
}
