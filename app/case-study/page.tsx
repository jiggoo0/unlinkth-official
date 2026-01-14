/** @format */

'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ShieldCheck, Search, Scale, Filter } from 'lucide-react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import { cases, CaseStudy } from '@/data/case-study/cases'

/**
 * [STRATEGY: SOCIAL PROOF & AUTHORITY]
 * - Inclusive Content: แสดงผลลัพธ์ที่เป็นรูปธรรมเพื่อให้ทุกฐานะเข้าถึงความปลอดภัย
 * - Dynamic Filtering: ช่วยให้ผู้ใช้หาเคสที่ตรงกับปัญหาของตนเองได้เร็วที่สุด
 * - Clean UI: ใช้การออกแบบที่โปร่งใส เน้นความไว้วางใจ (Trust)
 */

export default function CaseStudyPage() {
  const [filter, setFilter] = useState<CaseStudy['category'] | 'all'>('all')

  const filteredCases =
    filter === 'all' ? cases : cases.filter((c) => c.category === filter)

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans selection:bg-blue-100 dark:bg-black dark:selection:bg-blue-900">
      <Header />

      <main className="flex-grow px-6 pt-32 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* 🏛️ Header Section */}
          <header className="mb-16 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase dark:bg-blue-950/30">
              <ShieldCheck className="h-3 w-3" /> Proven Results
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-zinc-900 sm:text-6xl dark:text-zinc-50">
              กรณีศึกษา <br className="sm:hidden" />
              <span className="font-thai tracking-normal text-blue-600">
                ความสำเร็จ
              </span>
            </h1>
            <p className="text-xl leading-relaxed font-medium text-zinc-500 dark:text-zinc-400">
              ตัวอย่างผลลัพธ์การจัดการข้อมูลและกู้คืนชื่อเสียงที่เราทำให้กับลูกค้าภายใต้กรอบกฎหมายและความเป็นส่วนตัวสูงสุด
            </p>
          </header>

          {/* 🔍 Filter Bar */}
          <div className="mb-12 flex flex-wrap items-center gap-3 border-b border-zinc-100 pb-8 dark:border-zinc-900">
            <div className="mr-4 flex items-center gap-2 text-xs font-black tracking-widest text-zinc-400 uppercase">
              <Filter className="h-3 w-3" /> Filter by:
            </div>
            {(['all', 'search', 'social', 'legal'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-6 py-2 text-xs font-black tracking-tighter uppercase transition-all ${
                  filter === cat
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-black'
                    : 'bg-zinc-50 text-zinc-400 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800'
                }`}
              >
                {cat === 'all'
                  ? 'ทั้งหมด'
                  : cat === 'search'
                    ? 'Google Search'
                    : cat === 'social'
                      ? 'Social Media'
                      : 'Legal Case'}
              </button>
            ))}
          </div>

          {/* 🗂️ Case Studies Grid */}
          <motion.div layout className="grid gap-8 sm:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredCases.map((item) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-white p-8 shadow-sm transition-all hover:border-blue-200 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-blue-900/50"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/30">
                        {item.category === 'search' && (
                          <Search className="h-5 w-5" />
                        )}
                        {item.category === 'social' && (
                          <ShieldCheck className="h-5 w-5" />
                        )}
                        {item.category === 'legal' && (
                          <Scale className="h-5 w-5" />
                        )}
                      </div>
                      <span className="text-[10px] font-black tracking-widest text-zinc-400 uppercase">
                        Case ID: {item.id.padStart(3, '0')}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-50">
                      {item.title}
                    </h3>
                    <p className="line-clamp-2 leading-relaxed font-medium text-zinc-500 dark:text-zinc-400">
                      {item.description}
                    </p>

                    <div className="rounded-2xl bg-emerald-50/50 p-4 dark:bg-emerald-950/10">
                      <p className="mb-1 text-[10px] font-black tracking-widest text-emerald-600 uppercase">
                        Outcome
                      </p>
                      <p className="text-sm font-bold text-zinc-700 dark:text-emerald-400">
                        {item.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-zinc-50 pt-6 dark:border-zinc-800/50">
                    <a
                      href={`/case-study/${item.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-black text-zinc-900 transition-colors hover:text-blue-600 dark:text-zinc-50 dark:hover:text-blue-400"
                    >
                      อ่านรายละเอียดฉบับเต็ม{' '}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* ⚡ CTA Section */}
          <div className="relative mt-24 overflow-hidden rounded-[3rem] bg-zinc-950 p-12 text-center text-white dark:bg-zinc-900">
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl font-black">
                กรณีของคุณคล้ายกับเหตุการณ์เหล่านี้หรือไม่?
              </h2>
              <p className="mx-auto max-w-xl font-medium text-zinc-400">
                อย่าปล่อยให้ข้อมูลที่ผิดพลาดทำลายโอกาสในอนาคตของคุณ
                ปรึกษาทีมงานเพื่อประเมินแนวทางการจัดการเบื้องต้นโดยไม่มีค่าใช้จ่าย
              </p>
              <div className="pt-4">
                <a
                  href="/contact"
                  className="inline-flex h-14 items-center rounded-2xl bg-white px-10 font-black text-black shadow-lg transition-all hover:bg-blue-500 hover:text-white active:scale-95"
                >
                  เริ่มปรึกษาตอนนี้
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
