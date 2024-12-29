import Profile from "@/app/me/profile";
import envConfig from "@/config";
import { cookies } from "next/headers";

const MeProfile = async () => {
  const cookieStore = cookies();
  const sessionToken = (await cookieStore).get("sessionToken");

  const result = await fetch(
    `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/account/me`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionToken?.value}`,
      },
    }
  ).then(async (res) => {
    const payload = await res.json();
    const data = {
      status: res.status,
      payload,
    };
    if (!res.ok) {
      throw data;
    }

    return data;
  });

  return (
    <div>
      <h1>Profile</h1>
      <div>{JSON.stringify(result)}</div>
      <Profile />
    </div>
  );
};

export default MeProfile;
