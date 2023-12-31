
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./componets/Navbar";
import { TodoContextProvider } from "../app/context/todoContext";
import { NextAuthProvider } from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Todo App",
  description: "This is the NextJs and TypeScript",
  icons: {
    icon: "/favion.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NextAuthProvider>
          <TodoContextProvider>
            <Navbar />
            {children}
          </TodoContextProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
