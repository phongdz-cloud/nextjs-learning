"use client";
import { useAppContext } from "@/app/AppProvider";
import envConfig from "@/config";
import React, { useEffect } from "react";
const Profile = () => {
  const { sessionToken } = useAppContext();

  useEffect(() => {
    const fetchRequest = async () => {
      await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/account/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
      }).then(async (res) => {
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
    };

    fetchRequest();
  }, [sessionToken]);
  return <div>Profile</div>;
};

export default Profile;
