import User from "../models/User";

export default async function getUser(
  token?: string,
  cache: RequestCache = "default"
): Promise<User | null> {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/user/get_profile_detail`
  );

  const headers = new Headers();
  headers.append("Authorization", `${token}`);

  const response = await fetch(url.href, {
    method: "GET",
    headers,
    cache,
  });

  if (!response.ok) {
    return null;
  }

  const responseData = await response.json().then((data) => data.userdetail);

  return responseData;
}
