/** @format */

"use client";

import React from "react";
// 1. เพิ่มการ Import 'Variants' และ 'Easing' เพื่อระบุ Type ให้ชัดเจน
import { motion, Variants } from "framer-motion";
import { Mail, Globe, ShieldCheck, Lock, ExternalLink, Linkedin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * [FIX: TYPE ASSIGNMENT FOR NEXT.JS BUILD]
 * ปรับปรุงการประกาศ FADE_UP ให้เป็น Type 'Variants' และใช้ Cubic Bezier สำหรับ ease
 * เพื่อป้องกัน Error: Type 'string' is not assignable to type 'Easing'
 */
const FADE_UP: Variants = {
  hidden: { 
    opacity: 0, 
    y: 15 
  },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      // ใช้ Cubic Bezier แทนคำว่า "easeOut" เพื่อความปลอดภัยระดับ Type ใน TS
      ease: [0.33, 1, 0.68, 1] 
    } 
  }
};

export default function ContactPage() {
  const fullName = "นายตัวอย่าง Unlinkth";
  const contactEmail = "unlinkth.example@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/นายตัวอย่าง-unlinkth-4936623a5";

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans selection:bg-blue-100 dark:bg-black dark:selection:bg-blue-900">
      <Header />
      
      <main className="flex-grow flex flex-col items-center px-6 py-20 sm:py-32">
        <div className="w-full max-w-2xl space-y-16">
          
          {/* 🏛️ Section 1: Strategic Header */}
          <motion.header 
            initial="hidden"
            animate="show"
            variants={FADE_UP}
            className="space-y-6 text-center sm:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-emerald-700 uppercase dark:bg-emerald-950/30 dark:text-emerald-400">
              <Lock className="w-3 h-3" /> Secure Consult Channel
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-black dark:text-zinc-50 sm:text-5xl">
              ปรึกษาด้านภาพลักษณ์ดิจิทัล
            </h1>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium font-thai">
              หากท่านต้องการสอบถามข้อมูล หรือต้องการยืนยันข้อเท็จจริงเกี่ยวกับ <span className="text-zinc-900 dark:text-zinc-200">{fullName}</span> โปรดติดต่อผ่านช่องทางอย่างเป็นทางการ
            </p>
          </motion.header>

          {/* 🛡️ Section 2: Contact Channels */}
          <motion.section 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="grid gap-6 sm:grid-cols-2"
          >
            <div className="group rounded-3xl border border-zinc-100 p-8 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 transition-all hover:border-blue-600/30 hover:shadow-2xl hover:shadow-blue-500/5">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/20">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Direct Protocol</h3>
              <p className="mt-4 text-lg font-black text-black dark:text-white truncate">
                <a href={`mailto:${contactEmail}`} className="hover:underline decoration-blue-500/50 underline-offset-4">
                  {contactEmail}
                </a>
              </p>
              <p className="mt-2 text-xs font-bold text-zinc-400 uppercase tracking-widest italic font-thai">ตอบกลับภายใน 24 ชม.</p>
            </div>

            <div className="group rounded-3xl border border-zinc-100 p-8 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 transition-all hover:border-zinc-900/30">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Consultation Hours</h3>
              <p className="mt-4 text-lg font-black text-black dark:text-white font-thai">
                จันทร์ - ศุกร์, 09:00 - 18:00
              </p>
              <p className="mt-2 text-xs font-bold text-zinc-400 uppercase tracking-widest italic">GMT+7 (Bangkok)</p>
            </div>
          </motion.section>

          {/* 🔍 Section 3: Identity Infrastructure (LinkedIn Verification) */}
          <motion.section 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
               <h2 className="text-2xl font-black tracking-tight text-black dark:text-zinc-50 uppercase">Verified Infrastructure</h2>
               <div className="h-px flex-grow bg-zinc-100 dark:bg-zinc-900" />
            </div>
            
            <div className="grid gap-4">
              <a 
                href={linkedinUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl bg-zinc-100/30 p-6 transition-all hover:bg-[#0A66C2] hover:text-white dark:bg-zinc-900/30 group border border-transparent hover:border-[#0A66C2]/30 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                    <Linkedin className="w-5 h-5 text-[#0A66C2] group-hover:text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-sm uppercase tracking-wider">LinkedIn Official Profile</span>
                    <span className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Professional Identity Verified</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a 
                href="https://medium.com/@unlinkth.example" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl bg-zinc-100/30 p-6 transition-all hover:bg-zinc-950 hover:text-white dark:bg-zinc-900/30 dark:hover:bg-white dark:hover:text-black group border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <ShieldCheck className="w-5 h-5 text-zinc-400 group-hover:text-blue-400" />
                  <div className="flex flex-col">
                    <span className="font-black text-sm uppercase tracking-wider">Medium Portfolio</span>
                    <span className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Strategy & Case Studies</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </motion.section>

          {/* ⚡ Strategic Commitment Badge */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="rounded-[2.5rem] bg-zinc-950 p-10 dark:bg-zinc-50 shadow-3xl overflow-hidden relative"
          >
            <p className="relative z-10 text-base sm:text-lg text-center font-bold leading-relaxed text-zinc-300 dark:text-zinc-600 font-thai">
              <span className="text-white dark:text-black italic">"ความโปร่งใสคือหัวใจของความเชื่อมั่น"</span> <br />
              เราพร้อมให้ข้อมูลที่ถูกต้องที่สุดแก่ท่านภายใต้มาตรการ <br className="hidden sm:block" /> 
              การรักษาความลับ (NDA) ระดับสูงสุด
            </p>
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
