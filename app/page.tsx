/** @format */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ShieldCheck,
  Heart,
  Scale,
  Users,
  Sparkles,
  Lock,
  ArrowUpRight,
  Gavel,
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

/**
 * [STRATEGY: CONVERSION & EMOTIONAL TRUST]
 * - Empathy-Driven Copy: ใช้ภาษาที่เข้าถึงง่ายและให้กำลังใจ
 * - Strategic Linking: เชื่อมโยงไปยัง Wiki และ Case Study เพื่อสร้าง Authority
 * - High-Contrast UI: ใช้จุดเด่นของ Tailwind v4 และ CSS Variables ที่เราตั้งค่าไว้
 */

export default function Home() {
  const brandName = 'UNLINK-TH'
  const brandTagline = 'ศูนย์ช่วยเหลือและจัดการข้อมูลดิจิทัลเพื่อประชาชน'

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans selection:bg-blue-100 dark:bg-black dark:selection:bg-blue-900">
      <Header />

      <main className="flex flex-grow flex-col items-center">
        {/* 🚀 Hero Section: The "New Beginning" Message */}
        <section className="relative w-full overflow-hidden px-6 pt-32 pb-24 sm:pt-48 sm:pb-32">
          <div className="relative z-10 mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase dark:bg-blue-950/30">
                <Sparkles className="h-3 w-3" /> ยินดีต้อนรับสู่โอกาสครั้งที่สอง
              </div>

              <div className="space-y-4">
                <h1 className="text-6xl leading-[0.85] font-black tracking-tighter text-zinc-900 sm:text-8xl lg:text-9xl dark:text-zinc-50">
                  {brandName}
                  <span className="text-blue-600">.</span>
                </h1>
                <p className="font-thai max-w-2xl text-2xl font-bold text-zinc-500 sm:text-3xl dark:text-zinc-400">
                  {brandTagline}
                </p>
              </div>

              <p className="font-thai max-w-3xl text-xl leading-relaxed font-medium text-zinc-400 sm:text-2xl">
                เราเชื่อว่า{' '}
                <span className="font-black text-zinc-900 italic underline decoration-blue-500/30 dark:text-white">
                  อดีตไม่ควรเป็นกรงขังในอนาคต
                </span>
                เราช่วยคุณจัดการข้อมูลที่ไม่เป็นธรรมและลบข่าวที่ทำลายชื่อเสียง
                ภายใต้กรอบกฎหมาย PDPA อย่างถูกต้อง
              </p>

              <div className="flex flex-col gap-4 pt-6 sm:flex-row">
                <Link
                  href="/contact"
                  className="group flex h-16 items-center justify-center gap-3 rounded-2xl bg-blue-600 px-10 text-lg font-black text-white shadow-2xl shadow-blue-500/20 transition-all hover:bg-zinc-900 active:scale-95 dark:hover:bg-white dark:hover:text-black"
                >
                  เริ่มปรึกษาฟรี{' '}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/wiki"
                  className="flex h-16 items-center justify-center rounded-2xl border-2 border-zinc-100 px-10 text-lg font-black transition-all hover:border-zinc-900 dark:border-zinc-800 dark:hover:border-zinc-100"
                >
                  ศึกษาข้อกฎหมาย
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Background Decoration */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-blue-50/50 to-transparent dark:from-blue-950/10" />
        </section>

        {/* 🛡️ Value Pillar Section */}
        <section className="w-full bg-zinc-50 px-6 py-24 dark:bg-zinc-900/30">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 sm:grid-cols-3">
              {[
                {
                  icon: Lock,
                  title: 'รักษาความลับสูงสุด',
                  desc: 'ข้อมูลของท่านจะถูกเข้ารหัสและทำลายทิ้งทันทีหลังจบภารกิจ ภายใต้สัญญา NDA',
                },
                {
                  icon: Gavel,
                  title: 'ยึดหลักกฎหมาย',
                  desc: 'ดำเนินการตามสิทธิ Right to be Forgotten และ PDPA อย่างขาวสะอาด 100%',
                },
                {
                  icon: Users,
                  title: 'เข้าถึงได้ทุกคน',
                  desc: 'ไม่ว่าคุณจะเป็นใคร เราให้ความสำคัญกับความเท่าเทียมและสิทธิมนุษยชนดิจิทัล',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="rounded-[2.5rem] border border-zinc-100 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/50">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-4 text-xl font-black tracking-tighter uppercase">
                    {item.title}
                  </h3>
                  <p className="font-thai leading-relaxed font-medium text-zinc-500 dark:text-zinc-400">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 🔍 Content Preview Section (SEO Boost) */}
        <section className="w-full px-6 py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <h2 className="text-4xl leading-tight font-black tracking-tighter sm:text-5xl">
                ศูนย์ข้อมูลสิทธิ <br />
                <span className="text-blue-600">และความเป็นธรรม</span>
              </h2>
              <p className="font-thai text-lg leading-relaxed font-medium text-zinc-500 dark:text-zinc-400">
                เราไม่ได้แค่รับลบข้อมูล
                แต่เราสร้างฐานความรู้เพื่อให้ประชาชนคนไทยเข้าใจสิทธิในข้อมูลส่วนบุคคลของตนเองอย่างแท้จริง
              </p>
              <div className="space-y-4">
                {[
                  'สิทธิในการลบข่าวเก่าออกจาก Google',
                  'การจัดการ Cyberbullying',
                  'การบังคับใช้กฎหมาย PDPA',
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex cursor-default items-center gap-3 text-sm font-black tracking-widest text-zinc-400 uppercase transition-colors hover:text-blue-600"
                  >
                    <ArrowUpRight className="h-4 w-4" /> {text}
                  </div>
                ))}
              </div>
              <Link
                href="/wiki"
                className="inline-flex items-center gap-2 border-b-2 border-blue-500 pb-1 text-xs font-black tracking-[0.2em] text-zinc-900 uppercase dark:text-white"
              >
                เข้าสู่คลังความรู้ทั้งหมด
              </Link>
            </div>

            <div className="group relative">
              <div className="absolute -inset-4 rounded-[3rem] bg-blue-500/5 blur-2xl transition-all group-hover:bg-blue-500/10" />
              <div className="relative overflow-hidden rounded-[3rem] border border-zinc-100 bg-white p-1 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex aspect-video items-center justify-center bg-zinc-100 dark:bg-zinc-900">
                  <ShieldCheck className="h-24 w-24 text-blue-500/20" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
