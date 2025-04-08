import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import NavBar from "../components/ui/nav-bar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Token Trove",
  description: "Board game e-commerce site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}