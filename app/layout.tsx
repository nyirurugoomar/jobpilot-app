import type { Metadata } from "next";

import "./globals.css";
import { Footer, Header } from "@/components";




export const metadata: Metadata = {
  title: "JobPilot ",
  description: "It application that advertise Job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
