import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppProvider from "@/app/AppProvider";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookiesStore = await cookies();
  const sessionToken = cookiesStore.get("sessionToken")?.value;

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={` ${inter.className} antialiased`}>
          <Toaster />

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AppProvider initialSessionToken={sessionToken || ""}>
              <Header />

              {children}
            </AppProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
