/** @format */

'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  BookOpen,
  Search,
  Scale,
  ShieldAlert,
  ArrowRight,
  Gavel,
  FileText,
  Bookmark,
} from 'lucide-react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import WikiCard from '@/components/wiki/WikiCard'
import WikiHero from '@/components/wiki/WikiHero'
// ✅ แก้ไขการ Import ให้ตรงกับไฟล์ data/wiki/articles.ts
import { allWikiArticles } from '@/data/wiki/articles'
import { WikiArticle } from '@/types/wiki'

/**
 * [STRATEGY: SEO CONTENT HUB]
 * - Entity Linking: เชื่อมโยงหัวข้อ Wiki กับกฎหมาย PDPA และสิทธิ "Right to be Forgotten"
 * - User Intent: แบ่งหมวดหมู่ตามปัญหาที่คนมักจะค้นหา (ลบข่าว, กู้คืนชื่อเสียง, กฎหมาย)
 */

export default function WikiPage() {
  // ✅ ใช้ allWikiArticles แทน articles เดิม
  const articlesList: WikiArticle[] = allWikiArticles ?? []
  
  // ✅ แก้ไข Warning 'featuredArticles' is defined but never used
  const _featuredArticles = articlesList.slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans selection:bg-blue-100 dark:bg-black dark:selection:bg-blue-900">
      <Header />

      <main className="flex-grow pt-24">
        {/* 🏆 Section 1: Wiki Hero & Search */}
        <WikiHero
          title="ศูนย์ข้อมูลสิทธิและภาพลักษณ์ดิจิทัล"
          description="แหล่งรวมความรู้เกี่ยวกับการจัดการข้อมูลส่วนบุคคล การลบข่าวสารที่ไม่เป็นธรรม และสิทธิตามกฎหมาย PDPA เพื่อเริ่มต้นใหม่บนโลกออนไลน์อย่างสง่างาม"
        />

        <div className="mx-auto max-w-6xl px-6 pb-24">
          {/* 🧩 Section 2: Quick Access Categories */}
          <div className="relative z-10 -mt-12 mb-20 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              {
                icon: ShieldAlert,
                label: 'สิทธิในการลบข้อมูล',
                color: 'bg-red-500',
                href: '/wiki/category/legal', // ปรับให้ตรงกับ ID ใน wikiCategories
              },
              {
                icon: Scale,
                label: 'ความรู้ด้าน PDPA',
                color: 'bg-blue-600',
                href: '/wiki/category/pdpa',
              },
              {
                icon: Search,
                label: 'การจัดการ Google',
                color: 'bg-zinc-900',
                href: '/wiki/category/google-orm',
              },
              {
                icon: Gavel,
                label: 'ข้อพิพาททางดิจิทัล',
                color: 'bg-emerald-600',
                href: '/wiki/category/legal',
              },
            ].map((cat, i) => (
              <Link
                key={i}
                href={cat.href}
                className="group rounded-[2rem] border border-zinc-100 bg-white p-6 shadow-xl transition-all hover:scale-105 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div
                  className={`h-12 w-12 ${cat.color} mb-4 flex items-center justify-center rounded-2xl text-white shadow-lg transition-transform group-hover:rotate-6`}
                >
                  <cat.icon className="h-6 w-6" />
                </div>
                <p className="text-xs font-black tracking-tighter text-zinc-900 uppercase dark:text-zinc-100">
                  {cat.label}
                </p>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {/* 📝 Section 3: Main Articles Feed (2 Columns) */}
            <div className="space-y-12 lg:col-span-2">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-900">
                <h2 className="flex items-center gap-3 text-2xl font-black tracking-tighter uppercase">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                  บทความล่าสุด
                </h2>
                <Link
                  href="/wiki/all"
                  className="text-xs font-bold tracking-widest text-zinc-400 uppercase transition-colors hover:text-blue-600"
                >
                  ทั้งหมด
                </Link>
              </div>

              <div className="grid gap-8">
                {/* ✅ เปลี่ยนมาใช้ articlesList ที่ระบุ Type ชัดเจน */}
                {articlesList.map((article: WikiArticle) => (
                  <motion.div
                    key={article.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <WikiCard article={article} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 🛡️ Section 4: Sidebar Knowledge (1 Column) */}
            <aside className="space-y-12">
              <div className="rounded-[2.5rem] border border-zinc-100 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
                <h3 className="mb-6 flex items-center gap-2 text-lg font-black tracking-tight uppercase">
                  <Bookmark className="h-5 w-5 text-blue-600" />
                  สิ่งที่ควรรู้เบื้องต้น
                </h3>
                <nav className="space-y-4">
                  {[
                    'ลบชื่อจาก Google ใช้เวลานานเท่าไหร่?',
                    'ความแตกต่างระหว่างลบข้อมูลกับปิดกั้นการค้นหา',
                    'ขั้นตอนการร้องเรียนเว็บข่าวที่ไม่เป็นธรรม',
                    'สิทธิ PDPA สำหรับประชาชนทั่วไป',
                  ].map((text, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="group flex items-start gap-3 text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400"
                    >
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-300 group-hover:bg-blue-600" />
                      {text}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="group relative overflow-hidden rounded-[2.5rem] bg-blue-600 p-8 text-white">
                <div className="relative z-10 space-y-4">
                  <FileText className="h-10 w-10 opacity-50" />
                  <h3 className="text-xl leading-tight font-black">
                    ต้องการที่ปรึกษา <br />
                    เคสเร่งด่วน?
                  </h3>
                  <p className="text-sm font-medium text-blue-100">
                    เรามีทีมผู้เชี่ยวชาญด้านเทคนิคและกฎหมายพร้อมประเมินสถานการณ์ของท่าน
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-black text-blue-600 uppercase transition-all hover:bg-zinc-900 hover:text-white"
                  >
                    ติดต่อเจ้าหน้าที่ <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-transform group-hover:scale-110" />
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
