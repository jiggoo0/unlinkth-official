/** @format */

"use client";

import React from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// 🏛️ เรียกใช้จากศูนย์กลางเพียงที่เดียวตามโครงสร้าง Standard
import { cn } from '@/lib/utils'; 

/**
 * [STRATEGY: ADAPTIVE NAVIGATION]
 * - Authority: ใช้ Branding ที่ชัดเจนและจดจำง่าย
 * - UX: รองรับ Sticky Navigation พร้อมระบบตรวจจับหน้าปัจจุบัน (Active State)
 * - Clean Code: ลบการประกาศฟังก์ชันซ้ำซ้อนออกเพื่อให้ Build ผ่าน
 */

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'หน้าหลัก', href: '/' },
    { name: 'ประวัติ', href: '/about' },
    { name: 'กรณีศึกษา', href: '/case-study' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md transition-all dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        
        {/* 🏛️ Logo & Brand Identity */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group transition-transform active:scale-95"
          aria-label="Unlinkth Home"
        >
          <div className="bg-zinc-950 dark:bg-white text-white dark:text-black px-2 py-0.5 rounded font-black text-[12px] tracking-tighter transition-colors group-hover:bg-blue-600 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
            UNLINK
          </div>
          <span className="text-[12px] font-black tracking-[0.2em] text-zinc-900 dark:text-zinc-50 uppercase">
            Official
          </span>
        </Link>
        
        {/* 💻 Navigation Menu */}
        <nav className="flex items-center gap-6 sm:gap-10">
          <ul className="flex items-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className={cn(
                    "text-xs sm:text-[13px] font-bold tracking-wide transition-colors",
                    pathname === link.href 
                      ? "text-blue-600 dark:text-blue-400" 
                      : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* ⚡ Primary CTA */}
          <Link 
            href="/contact" 
            className="hidden sm:inline-flex text-[11px] font-black uppercase tracking-widest text-white bg-blue-600 hover:bg-zinc-900 dark:hover:bg-blue-500 px-6 py-2.5 rounded-full transition-all hover:shadow-xl hover:shadow-blue-500/20 active:scale-95 shadow-lg shadow-blue-500/20 font-thai"
          >
            ปรึกษาด่วน
          </Link>

          {/* Mobile CTA */}
          <Link 
            href="/contact" 
            className="sm:hidden text-[10px] font-black uppercase tracking-widest text-white bg-blue-600 px-4 py-2 rounded-full"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
