"use client";
import authApiRequest from "@/app/apiRequests/auth";
import { clientSessionToken } from "@/lib/http";
import { differenceInHours } from "date-fns";
import { useEffect } from "react";
import { clearInterval } from "timers";
const SlideSession = () => {
  useEffect(() => {
    // Slide session
    const interval = setInterval(async () => {
      const now = new Date();
      const expiresAt = new Date(clientSessionToken.expiresAt);
      if (differenceInHours(expiresAt, now) < 1) {
        const res =
          await authApiRequest.slideSessionFromNextClientToNextServer();
        clientSessionToken.expiresAt = res.payload.data.expiresAt;
      }
    }, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, []);
  return null;
};

export default SlideSession;
