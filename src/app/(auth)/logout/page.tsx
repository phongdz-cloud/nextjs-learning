"use client";

import authApiRequest from "@/app/apiRequests/auth";
import { clientSessionToken } from "@/lib/http";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const LogoutPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sessionToken = searchParams.get("sessionToken");
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (sessionToken === clientSessionToken.value) {
      authApiRequest.logoutFromNextClientToNextServer(true, signal).then(() => {
        router.push(`/login?redirectFrom=${pathname}`);
      });
    }
    // clean up function
    return () => {
      controller.abort();
    };
  }, [sessionToken, router, pathname]);
  return <div>page</div>;
};

export default LogoutPage;
