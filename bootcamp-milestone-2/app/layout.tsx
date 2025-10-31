import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Bootcamp Project",
  description: "Created by Messiah A.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // somewhere above {children}
    <html lang="en">
      <body>
        {" "}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
