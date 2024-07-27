import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import getUser from "./lib/getUser";

const middlewares = {
  async checkAuth(request: NextRequest) {
    const cookieStore = cookies();
    const user = await getUser(
      String(cookieStore.get("access_token")?.value),
      "force-cache"
    );
    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = "/auth";
      return NextResponse.rewrite(url.toString());
    }
  },
};

const routes = {
  "/my-account": middlewares.checkAuth,
};

export async function middleware(request: NextRequest) {
  const middleware = routes[request.nextUrl.pathname];
  if (middleware) {
    return await middleware(request);
  }
}
