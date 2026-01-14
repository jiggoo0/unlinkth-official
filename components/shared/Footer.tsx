/** @format */

'use client'

import React from 'react'
import Link from 'next/link'
import { ShieldCheck, Lock, Globe, Scale } from 'lucide-react'

/**
 * [STRATEGY: INSTITUTIONAL TRUST & ACCESSIBILITY]
 * - Inclusive Branding: เปลี่ยนจากชื่อบุคคลเป็นศูนย์ช่วยเหลือประชาชน UNLINK-TH
 * - SEO Hierarchy: เพิ่มช่องทางลัดสู่ Wiki และ Case Study เพื่อเพิ่มพลัง Internal Link
 * - Social Responsibility: ยืนยันมาตรฐานการจัดการข้อมูลที่ปลอดภัยสำหรับทุกคน
 */

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const brandName = 'UNLINK-TH Official'

  return (
    <footer className="border-t border-zinc-100 bg-zinc-50/50 py-16 dark:border-zinc-900 dark:bg-black/50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
          {/* 🏛️ Section 1: Brand Identity */}
          <div className="space-y-6 text-center sm:text-left">
            <div>
              <p className="text-lg font-black tracking-tighter text-zinc-900 uppercase dark:text-zinc-50">
                {brandName}
              </p>
              <p className="mt-2 text-[12px] leading-relaxed font-medium text-zinc-500 dark:text-zinc-400">
                สถาบันจัดการข้อมูลดิจิทัลเพื่อสิทธิและความเป็นส่วนตัว <br />
                เราช่วยคุณแก้ไขอดีต เพื่อเริ่มต้นอนาคตที่สะอาดกว่า
              </p>
            </div>
            <p className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
              © {currentYear} UNLINK-TH Ecosystem. All Rights Reserved.
            </p>
          </div>

          {/* 🔗 Section 2: Quick Links (SEO Power) */}
          <div className="flex flex-col items-center space-y-4 sm:items-start">
            <p className="text-[11px] font-black tracking-[0.2em] text-zinc-400 uppercase">
              Resources
            </p>
            <nav className="flex flex-col items-center space-y-3 sm:items-start">
              <Link
                href="/wiki"
                className="text-xs font-bold text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
              >
                ศูนย์ข้อมูลกฎหมาย (Wiki)
              </Link>
              <Link
                href="/case-study"
                className="text-xs font-bold text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
              >
                กรณีศึกษาความสำเร็จ
              </Link>
              <Link
                href="/privacy"
                className="text-xs font-bold text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
              >
                นโยบายความเป็นส่วนตัว
              </Link>
            </nav>
          </div>

          {/* 🛡️ Section 3: Trust & Compliance */}
          <div className="flex flex-col items-center space-y-6 sm:items-end">
            <div className="flex items-center gap-3 rounded-full border border-emerald-100 bg-emerald-50/50 px-4 py-2 dark:border-emerald-900/30 dark:bg-emerald-950/20">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
              </div>
              <span className="text-[10px] font-black tracking-[0.1em] text-emerald-700 uppercase dark:text-emerald-400">
                Data Protection Service Active
              </span>
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            </div>

            <div className="space-y-3 text-center sm:text-right">
              <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
                <div className="flex items-center gap-1 text-[10px] font-black text-zinc-400 uppercase">
                  <Scale className="h-3 w-3" /> PDPA Compliant
                </div>
                <div className="flex items-center gap-1 text-[10px] font-black text-zinc-400 uppercase">
                  <Globe className="h-3 w-3" /> Global Standard
                </div>
              </div>
              <p className="text-[9px] leading-relaxed font-medium text-zinc-400">
                เราดำเนินการภายใต้กรอบกฎหมายสิทธิในการถูกลืม (Right to be
                Forgotten) <br />
                และพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล (PDPA)
              </p>
            </div>
          </div>
        </div>

        {/* 🧩 Bottom: Contact Short-cut */}
        <div className="mt-16 border-t border-zinc-100 pt-8 dark:border-zinc-900">
          <p className="text-center text-[10px] font-bold tracking-[0.5em] text-zinc-300 uppercase dark:text-zinc-700">
            Digital Integrity Hub for Every Citizen
          </p>
        </div>
      </div>
    </footer>
  )
}
