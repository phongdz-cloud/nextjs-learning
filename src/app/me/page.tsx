import accountApiRequest from "@/app/apiRequests/account";
import { cookies } from "next/headers";

const MeProfile = async () => {
  const cookieStore = cookies();
  const sessionToken = (await cookieStore).get("sessionToken");
  const result = await accountApiRequest.me(sessionToken?.value ?? "");

  return (
    <div>
      <h1>Profile</h1>
      <div>{JSON.stringify(result)}</div>
      {/* <Profile /> */}
    </div>
  );
};

export default MeProfile;
