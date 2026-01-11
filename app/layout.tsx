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

// ข้อมูลสำหรับ Demo ในชื่อ นายตัวอย่าง Unlinkth
export const metadata: Metadata = {
  title: "นายตัวอย่าง Unlinkth | Official Website",
  description: "เว็บไซต์อย่างเป็นทางการของ นายตัวอย่าง Unlinkth ผู้เชี่ยวชาญด้านการจัดการชื่อเสียงดิจิทัล (ORM) และกลยุทธ์ SEO ชั้นสูง",
  keywords: [
    "นายตัวอย่าง Unlinkth", 
    "Unlinkth", 
    "Unlinkth Thailand", 
    "การจัดการชื่อเสียงออนไลน์", 
    "ลบข้อมูลเสียจาก Google"
  ],
  authors: [{ name: "นายตัวอย่าง Unlinkth" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://unlinkth-official.vercel.app", // เปลี่ยนเป็น URL จริงหลัง Deploy
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        <Schema />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
