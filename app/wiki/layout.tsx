/** @format */

import React from 'react'
import { Metadata } from 'next'
import Schema from '@/components/Schema'

/**
 * [STRATEGY: KNOWLEDGE AUTHORITY]
 * - Contextual SEO: กำหนด Metadata พื้นฐานสำหรับส่วน Wiki ทั้งหมด
 * - Schema Integration: ใส่ FAQ และ HowTo Schema ในระดับ Layout เพื่อช่วยให้ Google ดึงข้อมูลไปทำ Snippets
 * - Reading UX: ออกแบบโครงสร้างรองรับการอ่านเนื้อหาที่ยาวและซับซ้อน (Long-form content)
 */

export const metadata: Metadata = {
  title: {
    default: 'คลังความรู้การจัดการข้อมูลและสิทธิดิจิทัล',
    template: '%s | UNLINK-TH Wiki',
  },
  description:
    'คู่มือจัดการชื่อเสียงออนไลน์ การใช้สิทธิตามกฎหมาย PDPA และเทคนิคการลบข้อมูลที่ไม่พึงประสงค์จากระบบการค้นหา',
}

export default function WikiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
      {/* 🛠️ ยืนยันว่านี่คือหน้า FAQ และศูนย์ข้อมูลสำหรับ Google */}
      <Schema type="FAQ" />

      {/* 🧩 ส่วนตกแต่งพื้นหลังเพื่อสร้างความรู้สึก "คลังความรู้" (Library Feel) */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[500px] w-full max-w-7xl -translate-x-1/2 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/10" />
      </div>

      <div className="relative">
        {/* 📚 ส่วนหัวเฉพาะของ Wiki (ถ้าต้องการแสดงเฉพาะในส่วนนี้) */}
        <div className="sticky top-0 z-40 border-b border-zinc-100 bg-white/80 backdrop-blur-md dark:border-zinc-900 dark:bg-black/80">
          <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-6">
            <nav className="flex items-center gap-2 text-[10px] font-black tracking-widest text-zinc-400 uppercase">
              <span className="transition-colors hover:text-blue-600">
                UNLINK-TH
              </span>
              <span>/</span>
              <span className="text-zinc-900 dark:text-zinc-100">
                KNOWLEDGE BASE
              </span>
            </nav>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-600 uppercase dark:text-emerald-500">
                <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-500" />
                Verified Content
              </span>
            </div>
          </div>
        </div>

        {/* 📖 เนื้อหาหลัก */}
        <div className="mx-auto w-full">{children}</div>
      </div>

      {/* 🧩 ตกแต่งส่วนล่างก่อน Footer */}
      <div className="h-24 w-full bg-gradient-to-t from-zinc-50 to-transparent dark:from-zinc-900/20" />
    </div>
  )
}
