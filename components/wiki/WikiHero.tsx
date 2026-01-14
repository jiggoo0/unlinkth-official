/** @format */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Search, Sparkles, BookOpen } from 'lucide-react'

interface WikiHeroProps {
  title: string
  description: string
}

/**
 * [STRATEGY: KNOWLEDGE HUB IDENTITY]
 * - Visual: ใช้ Background Gradient นุ่มนวลเพื่อลดความล้าของสายตา
 * - Typography: เน้นหัวข้อที่ใหญ่และอ่านง่าย (High Readability)
 * - Search UI: ออกแบบโครงสร้างที่พร้อมสำหรับระบบค้นหาในอนาคต
 */

export default function WikiHero({ title, description }: WikiHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-20 pb-16 dark:bg-black">
      {/* 🧩 Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-full w-full max-w-7xl -translate-x-1/2 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent dark:from-blue-950/10" />
      </div>

      <div className="relative mx-auto max-w-4xl space-y-8 text-center">
        {/* 🏷️ Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-[10px] font-black tracking-[0.2em] text-zinc-500 uppercase dark:bg-zinc-900 dark:text-zinc-400"
        >
          <BookOpen className="h-3 w-3 text-blue-600" />
          Unlink-TH Knowledge Base
        </motion.div>

        {/* ✍️ Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl leading-[0.9] font-black tracking-tighter text-zinc-900 sm:text-7xl dark:text-zinc-50">
            {title}
          </h1>
          <p className="font-thai mx-auto max-w-2xl text-lg leading-relaxed font-medium text-zinc-500 sm:text-xl dark:text-zinc-400">
            {description}
          </p>
        </motion.div>

        {/* 🔍 Search Bar Mockup (พร้อมสำหรับฟีเจอร์ค้นหา) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-2xl pt-4"
        >
          <div className="group relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-10 blur transition duration-1000 group-hover:opacity-20"></div>
            <div className="relative flex items-center overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="pl-6 text-zinc-400">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="text"
                placeholder="ค้นหาบทความ, ข้อกฎหมาย หรือวิธีลบข้อมูล..."
                className="font-thai w-full bg-transparent px-4 py-5 text-sm focus:outline-none dark:text-white"
              />
              <div className="pr-4">
                <kbd className="hidden h-6 items-center gap-1 rounded border border-zinc-200 bg-zinc-50 px-2 text-[10px] font-medium text-zinc-400 opacity-100 sm:inline-flex dark:border-zinc-700 dark:bg-zinc-800">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ⚡ Quick Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 pt-4"
        >
          {['วิธีลบข่าว', 'PDPA มาตรา 33', 'Right to be Forgotten'].map(
            (tag) => (
              <span
                key={tag}
                className="cursor-pointer text-[10px] font-black tracking-widest text-zinc-400 uppercase transition-colors hover:text-blue-600"
              >
                #{tag}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  )
}
