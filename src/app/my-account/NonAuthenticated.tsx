import Tabs from "@/src/components/Tab";
import style from "./style.module.scss";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import TabTitles from "@/src/components/Tab/TabTitles";
import TabsContents from "@/src/components/Tab/TabsContents";

export default function NonAuthenticated() {
  return (
    <div className={style.auth}>
      <Tabs>
        <TabTitles
          items={[
            { id: "register", title: "Register" },
            {
              id: "login",
              title: "Login",
            },
          ]}
        />
        <TabsContents
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
