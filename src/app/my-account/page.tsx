import getUser from "@/src/lib/getUser";
import { cookies } from "next/headers";
import Authenticated from "./Authenticated";
import NonAuthenticated from "./NonAuthenticated";

export default async function MyAccount() {
  const cookieStore = cookies();
  const user = await getUser(String(cookieStore.get("token")), "no-store");
  return <div>{user ? <Authenticated /> : <NonAuthenticated />}</div>;
}
