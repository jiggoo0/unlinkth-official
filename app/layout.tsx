/** @format */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Schema from "@/components/Schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unlinkth-official.vercel.app"),
  title: {
    default: "นายตัวอย่าง Unlinkth | Digital Reputation Architect",
    template: "%s | นายตัวอย่าง Unlinkth"
  },
  description: "ที่ปรึกษาด้านภาพลักษณ์ดิจิทัลและการจัดการชื่อเสียงออนไลน์ (ORM) กู้คืนความเชื่อมั่นบนระบบการค้นหา Google ด้วยกลยุทธ์ SEO ระดับสูง",
  keywords: [
    "นายตัวอย่าง Unlinkth", 
    "Unlinkth Thailand", 
    "ที่ปรึกษา ORM", 
    "จัดการชื่อเสียงดิจิทัล", 
    "กู้คืนภาพลักษณ์ Google",
    "SEO Displacement"
  ],
  authors: [{ name: "นายตัวอย่าง Unlinkth" }],
  openGraph: {
    title: "นายตัวอย่าง Unlinkth | Official Identity",
    description: "คืนความมั่นใจให้ชื่อของคุณบนโลกออนไลน์",
    url: "https://unlinkth-official.vercel.app",
    siteName: "Unlinkth Official",
    images: [
      {
        url: "/images/profile-photo.jpg",
        width: 1200,
        height: 630,
        alt: "นายตัวอย่าง Unlinkth Professional Profile",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black`}>
        {/* 🛠️ ยืนยันตัวตนระดับ Global Entity */}
        <Schema type="Person" />
        {children}
      </body>
    </html>
  );
}
