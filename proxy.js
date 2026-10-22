// import { NextResponse } from "next/server";

// export function proxy(request) {

//   return NextResponse.redirect(new URL("/about", request.url));
// }

import { auth } from "@/_lib/auth";

export const proxy = auth;

export const config = {
  matcher: ["/account/:path*"],
};
