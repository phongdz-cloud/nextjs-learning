import authApiRequest from "@/app/apiRequests/auth";
import { HttpError } from "@/lib/http";
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = cookies();

  const sessionToken = (await cookieStore).get("sessionToken")?.value;
  if (!sessionToken) {
    return Response.json(
      { message: "Không nhận được session token" },
      {
        status: 401,
      }
    );
  }
  try {
    const result = await authApiRequest.logoutFromNextServerToServer(
      sessionToken
    );
    return Response.json(result.payload, {
      status: 200,
      headers: {
        // Xoá cookie sessionToken
        "Set-Cookie": "sessionToken=; Path=/; HttpOnly; Max-Age=0",
      },
    });
  } catch (error) {
    if (error instanceof HttpError) {
      return Response.json(error.payload, {
        status: error.status,
      });
    } else {
      return Response.json(
        {
          message: "Có lỗi xảy ra",
        },
        {
          status: 500,
        }
      );
    }
  }
}
