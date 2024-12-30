"use client";
import { clientSessionToken } from "@/lib/http";
import { ReactNode, useState } from "react";

// const AppContext = createContext({
//   // sessionToken: "",
//   // // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   // setSessionToken: (sessionToken: string) => {},
// });

// export const useAppContext = () => {
//   const context = useContext(AppContext);

//   if (!context) {
//     throw new Error("useAppContext must be used within an AppProvider");
//   }

//   return context;
// };

const AppProvider = ({
  children,
  initialSessionToken = "",
}: {
  children: ReactNode;
  initialSessionToken: string;
}) => {
  useState(() => {
    if (typeof window !== "undefined") {
      clientSessionToken.value = initialSessionToken;
    }
  });
  return <>{children}</>;
};

export default AppProvider;
