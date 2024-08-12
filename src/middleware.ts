import { NextRequest, NextResponse } from "next/server";
import getUser from "./actions/getUser";

const middlewares = {
  async checkAuth(request: NextRequest) {
    const user = await getUser("no-cache");
    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = "/auth";
      return NextResponse.rewrite(url.toString(), {
        status: 302,
        headers: {
          Location: url.toString(),
        },
      });
    }
  },
};

const routes = {
  "/my-account": middlewares.checkAuth,
};

export async function middleware(request: NextRequest) {
  for (const [route, middleware] of Object.entries(routes)) {
    if (request.nextUrl.pathname.startsWith(route)) {
      return await middleware(request);
    }
  }
}
