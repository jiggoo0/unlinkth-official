/** @format */
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* ลบ basePath ออกเพื่อให้หน้า Home (app/page.tsx) 
     แสดงผลที่ URL หลัก (/) ได้ตามปกติ 
  */

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
      // เพิ่มเติม: เผื่อมีการใช้รูปจากแหล่งอื่นในอนาคต
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  compiler: {
    // ลบ console.log เฉพาะใน Production เพื่อความปลอดภัยและความเร็ว
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // เพิ่มการตั้งค่าเพื่อรองรับ Tailwind v4 และฟีเจอร์ใหม่ๆ
  experimental: {
    // เพิ่มเติมได้หากต้องการใช้ฟีเจอร์ใหม่
  },
}

export default nextConfig
