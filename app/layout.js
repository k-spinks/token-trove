import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import NavBar from "../components/ui/nav-bar";

export const metadata = {
  title: "Token Trove",
  description: "Board game e-commerce site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}