"use client";
import { createContext, useContext, useState, ReactNode } from "react";

const AppContext = createContext({
  sessionToken: "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSessionToken: (sessionToken: string) => {},
});

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};

const AppProvider = ({
  children,
  initialSessionToken = "",
}: {
  children: ReactNode;
  initialSessionToken: string;
}) => {
  const [sessionToken, setSessionToken] = useState(initialSessionToken);
  return (
    <AppContext.Provider value={{ sessionToken, setSessionToken }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
