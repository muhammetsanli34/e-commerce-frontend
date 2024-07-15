"use server";
import Image from "next/image";
import style from "./style.module.scss";
import Link from "next/link";
interface AppBannerProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default async function asAppBanner(props: AppBannerProps) {
  return (
    <div className={style.appBanner}>
      <Image
        src={props.image}
        alt={props.title}
        className={style.appBannerImage}
        width={300}
        height={300}
      />
      <div className={style.appBannerText}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <Link href={props.link}>Shop Now</Link>
      </div>
    </div>
  );
}
