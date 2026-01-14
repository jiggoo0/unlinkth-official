/** @format */

import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Sarabun } from 'next/font/google'
import './globals.css'
import Schema from '@/components/Schema'

/**
 * [STRATEGY: INSTITUTIONAL AUTHORITY & SEO]
 * - Font Strategy: ใช้ Geist สำหรับตัวเลข/อังกฤษ และ Sarabun สำหรับเนื้อหาไทย
 * - Meta Optimization: ตั้งค่า Metadata เพื่อดึงดูด CTR จาก Search Engine
 * - Trust Infrastructure: ใช้ Schema "Organization" เพื่อยืนยันตัวตนแบรนด์กับ Google
 */

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const sarabun = Sarabun({
  weight: ['400', '500', '700', '800'],
  subsets: ['thai', 'latin'],
  variable: '--font-sarabun',
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.unlink-th.com'),
  title: {
    default: 'UNLINK-TH | ศูนย์ช่วยเหลือและจัดการข้อมูลดิจิทัลเพื่อประชาชน',
    template: '%s | UNLINK-TH',
  },
  description:
    'บริการลบข้อมูลส่วนตัว ลบข่าวเก่า และจัดการชื่อเสียงออนไลน์อย่างถูกกฎหมาย ช่วยเหลือผู้เดือดร้อนจากข้อมูลที่ไม่เป็นธรรมบนโลกดิจิทัลทุกรูปแบบภายใต้มาตรฐาน PDPA',
  keywords: [
    'UNLINK-TH',
    'รับลบข้อมูล Google',
    'ลบข่าวออนไลน์',
    'จัดการชื่อเสียงดิจิทัล',
    'ลบประวัติเสีย',
    'สิทธิในการถูกลืม',
    'PDPA Thailand',
  ],
  authors: [{ name: 'UNLINK-TH Team' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'UNLINK-TH | ปกป้องสิทธิและตัวตนออนไลน์ของคุณ',
    description:
      'ลบอดีตที่ผิดพลาด เพื่อเริ่มต้นใหม่ได้อย่างมั่นใจ ศูนย์จัดการข้อมูลเพื่อประชาชน',
    url: 'https://www.unlink-th.com',
    siteName: 'UNLINK-TH Official',
    images: [
      {
        url: '/images/og-brand.jpg',
        width: 1200,
        height: 630,
        alt: 'UNLINK-TH - Digital Integrity Hub',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="th"
      className={`scroll-smooth ${sarabun.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-zinc-900 antialiased dark:bg-black dark:text-zinc-50`}
      >
        {/* 🏛️ เสริมโครงสร้างข้อมูลให้ Google เข้าใจว่าเป็นองค์กรช่วยเหลือประชาชน */}
        <Schema type="Organization" />

        {/* Main Content */}
        {children}
      </body>
    </html>
  )
}
