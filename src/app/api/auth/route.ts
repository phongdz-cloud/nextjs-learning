export async function POST(request: Request) {
  const res = await request.json();
  const sessionToken = res.data?.token;
  if (!sessionToken) {
    return Response.json(
      { message: "Không nhận được session token" },
      {
        status: 400,
      }
    );
  }
  console.log("res.data", res.data);
  return Response.json(res.data, {
    status: 200,
    headers: {
      "Set-Cookie": `sessionToken=${sessionToken}; Path=/; HttpOnly`,
    },
  });
}
