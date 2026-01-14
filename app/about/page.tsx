/** @format */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  UserCheck,
  MessageSquare,
  ArrowRight,
  Globe,
  Scale,
  Heart,
  EyeOff,
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

/**
 * [STRATEGY: EMOTIONAL BRANDING]
 * - Storytelling: เน้นย้ำว่าเราคือ "ผู้ช่วย" ไม่ใช่แค่ "ผู้ให้บริการ"
 * - Credibility: แสดงวิสัยทัศน์ที่ยึดหลักจริยธรรมและกฎหมาย
 * - Visual: ใช้โทนสีขาว-ดำ และน้ำเงิน เพื่อสื่อถึงความสะอาดโปร่งใสและความมั่นคง
 */

export default function AboutPage() {
  const brandName = 'UNLINK-TH'

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-black">
      <Header />

      <main className="flex-grow pt-32 pb-24">
        {/* 🏛️ Mission Section */}
        <section className="px-6 py-12 sm:py-24">
          <div className="mx-auto max-w-4xl space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6 text-center sm:text-left"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black tracking-widest text-blue-600 uppercase dark:bg-blue-950/30">
                <ShieldCheck className="h-3 w-3" /> Our Philosophy
              </div>
              <h1 className="text-5xl leading-[0.9] font-black tracking-tighter text-zinc-900 sm:text-7xl dark:text-zinc-50">
                เราเชื่อใน <br />
                <span className="text-blue-600">โอกาสครั้งที่สอง</span>
              </h1>
              <p className="font-thai text-xl leading-relaxed font-medium text-zinc-500 sm:text-2xl dark:text-zinc-400">
                ในยุคที่ข้อมูลดิจิทัลคงอยู่ตลอดไป {brandName}{' '}
                ก่อตั้งขึ้นเพื่อเป็นเกราะป้องกันทางชื่อเสียงและสิทธิส่วนบุคคลให้กับประชาชนที่ได้รับผลกระทบจากข้อมูลที่ไม่เป็นธรรมในอดีต
              </p>
            </motion.div>

            {/* 🛡️ Core Values Grid */}
            <div className="grid gap-6 pt-12 sm:grid-cols-2">
              {[
                {
                  icon: EyeOff,
                  title: 'ความเป็นส่วนตัว',
                  desc: 'เราให้ความสำคัญกับความลับของลูกค้าเป็นอันดับหนึ่ง ข้อมูลทุกอย่างจะถูกปกป้องและทำลายตามมาตรฐาน NDA',
                },
                {
                  icon: Scale,
                  title: 'ความถูกต้องตามกฎหมาย',
                  desc: 'ทุกกระบวนการดำเนินการภายใต้สิทธิ Right to be Forgotten และ พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA)',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-[2rem] border border-zinc-100 bg-zinc-50/50 p-8 dark:border-zinc-800 dark:bg-zinc-900/30"
                >
                  <item.icon className="mb-6 h-8 w-8 text-blue-600" />
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

        {/* 🤝 Humanity Section */}
        <section className="relative overflow-hidden bg-zinc-900 px-6 py-24 text-white">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-blue-600/20 blur-[100px]" />
          <div className="relative z-10 mx-auto grid max-w-4xl items-center gap-16 sm:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-4xl leading-none font-black tracking-tighter">
                มากกว่าการลบข้อมูล <br />
                <span className="text-blue-500">คือการคืนชีวิตปกติสุข</span>
              </h2>
              <p className="font-thai leading-relaxed font-medium text-zinc-400">
                เพราะความผิดพลาดในอดีตไม่ควรเป็นตราบาปไปชั่วชีวิต
                เราจึงมุ่งมั่นที่จะใช้ความเชี่ยวชาญด้านเทคนิคและกฎหมายดิจิทัล
                เพื่อให้คุณกลับมาเดินได้อย่างภาคภูมิใจอีกครั้ง
              </p>
              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-black">100%</div>
                  <div className="text-[10px] tracking-widest text-zinc-500 uppercase">
                    Confidentiality
                  </div>
                </div>
                <div className="h-10 w-[1px] bg-zinc-800" />
                <div className="text-center">
                  <div className="text-3xl font-black">24/7</div>
                  <div className="text-[10px] tracking-widest text-zinc-500 uppercase">
                    Expert Support
                  </div>
                </div>
              </div>
            </div>
            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[3rem] border border-zinc-700 bg-zinc-800 p-12">
              <Heart className="h-full w-full animate-pulse text-blue-600/20" />
            </div>
          </div>
        </section>

        {/* 📞 Call to Action */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <h2 className="text-3xl font-black tracking-tighter sm:text-5xl">
              พร้อมที่จะเริ่มต้นใหม่หรือยัง?
            </h2>
            <p className="font-thai text-lg font-medium text-zinc-500 dark:text-zinc-400">
              ทีมงานผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาเบื้องต้นโดยไม่มีค่าใช้จ่าย
            </p>
            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <Link
                href="/contact"
                className="group flex h-16 items-center justify-center gap-3 rounded-2xl bg-blue-600 px-12 text-lg font-black text-white shadow-xl shadow-blue-500/20 transition-all hover:bg-zinc-900 active:scale-95 dark:hover:bg-white dark:hover:text-black"
              >
                คุยกับผู้เชี่ยวชาญ{' '}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
