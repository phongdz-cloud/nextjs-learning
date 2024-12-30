"use client";
import accountApiRequest from "@/app/apiRequests/account";
import { useEffect } from "react";
const Profile = () => {
  useEffect(() => {
    const fetchRequest = async () => {
      const result = await accountApiRequest.meClient();

      console.log("me client", result);
    };

    fetchRequest();
  }, []);
  return <div>Profile</div>;
};

export default Profile;
