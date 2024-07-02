"use client";
import Tabs from "@/src/components/Tab";
import style from "./style.module.scss";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export default function Register() {
  return (
    <div className={style.auth}>
      <Tabs>
        <Tabs.Titles
          items={[
            { id: "register", title: "Register" },
            {
              id: "login",
              title: "Login",
            },
          ]}
        />
        <Tabs.Contents
          items={[
            {
              id: "register",
              content: <RegisterForm />,
            },
            {
              id: "login",
              content: <LoginForm />,
            },
          ]}
        />
      </Tabs>
    </div>
  );
}
