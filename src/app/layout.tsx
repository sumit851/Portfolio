"use client";
import Footer from "./components/footer/page";
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
      <body className="">
        {isDesktop ? <Navbar /> : <Responsive />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
