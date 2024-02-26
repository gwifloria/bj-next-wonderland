import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageHeader from "@/components/PageHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gwiflora's Echo",
  description: "Personal Blog Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className={inter.className}>
        <div className="main-background bg-mint-100 font-sans mx-auto min-h-screen p-12 md:p-24 lg:p-36 ">
        <PageHeader></PageHeader>
           {children}
        </div>
      </body>
    </html>
  );
}
