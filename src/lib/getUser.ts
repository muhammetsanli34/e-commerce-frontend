export default async function getUser(
  token?: string,
  cache: RequestCache = "default"
) {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/user/get_profile_detail`);

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
  return response.json();
}
