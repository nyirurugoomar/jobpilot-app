'use client';

import { usePathname } from "next/navigation";
import "./globals.css";
import { Footer, Header, SubHeader } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const noLayoutRoutes = ['/Login', '/SignUp'];

  const showLayout = !noLayoutRoutes.includes(pathname);

  return (
    <html lang="en">
      <body>
        {showLayout && <SubHeader />}
        {showLayout && <Header />} 
        {children}
        {showLayout && <Footer />}
      </body>
    </html>
  );
}
