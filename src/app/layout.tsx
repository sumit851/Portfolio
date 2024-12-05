"use client";

import Navbar from "./components/navbar/page";
import Responsive from "./components/navbar/Responsive";
import { useWindowSize } from "../hooks/widthcheck";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDesktop = useWindowSize();
  return (
    <html lang="en">
      <body className="bg-neutral-800">
        {isDesktop ? <Navbar /> : <Responsive />}
        {children}
      </body>
    </html>
  );
}
