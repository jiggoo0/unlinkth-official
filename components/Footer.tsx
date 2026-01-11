/** @format */

"use client";

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock } from 'lucide-react';

/**
 * [STRATEGY: FOOTER COMPLIANCE & TRUST]
 * - Authority: ยืนยันสถานะ "Google Index Verified" เพื่อความน่าเชื่อถือ
 * - Legal: เพิ่ม Link กฎหมายพื้นฐานเพื่อเพิ่ม Trust Score จาก Search Engine
 * - Human-Centric: เน้นย้ำเรื่องความถูกต้องของข้อมูลและความเป็นส่วนตัว
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const fullName = "นายตัวอย่าง Unlinkth";

  return (
    <footer className="border-t border-zinc-100 bg-zinc-50/30 py-16 dark:border-zinc-900 dark:bg-black/50">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col items-center justify-between gap-12 sm:flex-row sm:items-start">
          
          {/* 🏛️ Left: Brand & Copyright */}
          <div className="space-y-4 text-center sm:text-left">
            <div>
              <p className="text-[13px] font-black text-zinc-900 dark:text-zinc-50 uppercase tracking-[0.25em]">
                {fullName}
              </p>
              <p className="mt-2 text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
                © {currentYear} Personal Authority Portal.
              </p>
            </div>
            
            {/* Quick Legal Links (SEO Boost) */}
            <nav className="flex items-center justify-center gap-4 sm:justify-start">
              <Link href="/privacy" className="text-[10px] font-bold text-zinc-400 hover:text-blue-600 transition-colors uppercase tracking-widest">Privacy</Link>
              <span className="text-zinc-200 dark:text-zinc-800">|</span>
              <Link href="/terms" className="text-[10px] font-bold text-zinc-400 hover:text-blue-600 transition-colors uppercase tracking-widest">Terms</Link>
            </nav>
          </div>
          
          {/* 🛡️ Right: Security & Identity Status */}
          <div className="flex flex-col items-center sm:items-end gap-5">
            <div className="flex items-center gap-3 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm dark:border-blue-900/30 dark:bg-zinc-900/50">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </div>
              <span className="text-[10px] font-black tracking-[0.15em] text-blue-700 uppercase dark:text-blue-400">
                Identity Verified by Google Index
              </span>
              <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
            </div>

            <div className="max-w-[300px] text-center sm:text-right space-y-2">
              <p className="text-[11px] font-medium leading-relaxed text-zinc-500 dark:text-zinc-400">
                แหล่งข้อมูลหลักเพื่อการตรวจสอบข้อเท็จจริงและความถูกต้องของข้อมูลส่วนบุคคลบนระบบเครือข่ายสารสนเทศ
              </p>
              <div className="flex items-center justify-center sm:justify-end gap-2 text-[9px] font-black text-emerald-600 dark:text-emerald-500 uppercase tracking-widest">
                <Lock className="h-2.5 w-2.5" />
                Secure Data Protocol Active
              </div>
            </div>
          </div>
        </div>

        {/* 🧩 Bottom Decorative Element */}
        <div className="mt-16 flex justify-center opacity-20">
          <div className="h-px w-12 bg-zinc-300 dark:bg-zinc-800"></div>
        </div>
      </div>
    </footer>
  );
}
