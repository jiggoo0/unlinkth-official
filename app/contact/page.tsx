/** @format */

'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  MessageSquare,
  ShieldCheck,
  Clock,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react'

import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

/**
 * [STRATEGY: TRUST-BASED CONVERSION]
 * - Clarity: บอกขั้นตอนการทำงานที่ชัดเจน (Process Transparency)
 * - Safety: เน้นย้ำเรื่องการรักษาความลับ (Confidentiality)
 * - UI: ใช้ Shadcn UI Components เพื่อความสม่ำเสมอของ Design System
 */

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logic สำหรับส่งข้อมูล (เช่นผ่าน API Route หรือ Email Service)
    setIsSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-black">
      <Header />

      <main className="flex-grow px-6 pt-32 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* 🏛️ Left: Brand Message & Trust Points */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black tracking-widest text-blue-600 uppercase dark:bg-blue-950/30">
                  <MessageSquare className="h-3 w-3" /> Get in Touch
                </div>
                <h1 className="text-5xl leading-[0.9] font-black tracking-tighter text-zinc-900 sm:text-7xl dark:text-zinc-50">
                  ปรึกษาเรา <br />
                  <span className="text-blue-600">อย่างเป็นส่วนตัว</span>
                </h1>
                <p className="font-thai text-xl leading-relaxed font-medium text-zinc-500 dark:text-zinc-400">
                  ทีมผู้เชี่ยวชาญของ {`UNLINK-TH`}{' '}
                  พร้อมรับฟังและประเมินแนวทางการจัดการชื่อเสียงและสิทธิทางดิจิทัลของคุณ
                  โดยยึดถือความเป็นส่วนตัวสูงสุด
                </p>
              </motion.div>

              {/* Trust Indicators */}
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    icon: ShieldCheck,
                    title: 'รักษาความลับ 100%',
                    desc: 'ข้อมูลของคุณจะถูกจัดเก็บเป็นความลับภายใต้มาตรฐาน NDA',
                  },
                  {
                    icon: Clock,
                    title: 'ตอบกลับใน 24 ชม.',
                    desc: 'เราให้ความสำคัญกับทุกปัญหาและจะติดต่อกลับโดยเร็วที่สุด',
                  },
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <item.icon className="h-6 w-6 text-blue-600" />
                    <h3 className="font-black tracking-tighter text-zinc-900 uppercase dark:text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="font-thai text-sm text-zinc-500 dark:text-zinc-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 📩 Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-[2.5rem] border border-zinc-100 bg-zinc-50/50 p-8 sm:p-12 dark:border-zinc-800 dark:bg-zinc-900/30"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-[10px] font-black tracking-widest text-zinc-400 uppercase"
                      >
                        ชื่อ-นามสกุล
                      </Label>
                      <Input
                        id="name"
                        placeholder="สมชาย รักดี"
                        required
                        className="font-thai rounded-xl border-zinc-200 bg-white py-6 focus:ring-blue-600 dark:border-zinc-700 dark:bg-zinc-950"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-[10px] font-black tracking-widest text-zinc-400 uppercase"
                      >
                        อีเมลติดต่อ
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="somchai@example.com"
                        required
                        className="font-thai rounded-xl border-zinc-200 bg-white py-6 focus:ring-blue-600 dark:border-zinc-700 dark:bg-zinc-950"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-[10px] font-black tracking-widest text-zinc-400 uppercase"
                    >
                      หัวข้อที่ต้องการปรึกษา
                    </Label>
                    <Input
                      id="subject"
                      placeholder="เช่น ขอให้ลบข้อมูลจาก Google หรือ ปรึกษาเรื่อง PDPA"
                      required
                      className="font-thai rounded-xl border-zinc-200 bg-white py-6 focus:ring-blue-600 dark:border-zinc-700 dark:bg-zinc-950"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-[10px] font-black tracking-widest text-zinc-400 uppercase"
                    >
                      รายละเอียดเบื้องต้น
                    </Label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="อธิบายสถานการณ์ของคุณโดยสังเขป..."
                      className="font-thai flex w-full rounded-xl border border-zinc-200 bg-white px-3 py-4 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950"
                      required
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="group h-16 w-full rounded-2xl bg-blue-600 text-lg font-black text-white transition-all hover:bg-zinc-900 dark:hover:bg-white dark:hover:text-black"
                  >
                    ส่งคำขอรับคำปรึกษา{' '}
                    <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>

                  <p className="text-center text-[10px] font-medium tracking-tight text-zinc-400 uppercase">
                    By clicking submit, you agree to our privacy policy and data
                    protection terms.
                  </p>
                </form>
              ) : (
                /* Success State */
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center space-y-6 py-12 text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <CheckCircle2 className="h-10 w-10 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-black tracking-tighter uppercase">
                      ส่งข้อมูลสำเร็จ
                    </h2>
                    <p className="font-thai text-zinc-500 dark:text-zinc-400">
                      เราได้รับข้อมูลของคุณแล้ว ทีมผู้เชี่ยวชาญจะทำการวิเคราะห์{' '}
                      <br />
                      และติดต่อกลับทางอีเมลที่คุณระบุไว้ภายใน 24 ชั่วโมง
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                    className="rounded-xl font-black tracking-widest uppercase"
                  >
                    ส่งข้อความอื่นเพิ่ม
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
