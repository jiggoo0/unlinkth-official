/** @format */

"use client";

import React from "react";
import Link from "next/link";
// 1. เพิ่มการนำเข้า Variants เพื่อแก้ปัญหา Type Error
import { motion, Variants } from "framer-motion";
import { ShieldCheck, MessageSquare, ArrowUpRight, Lock, Linkedin, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";

/**
 * [FIX: TYPE ASSIGNMENT FOR NEXT.JS BUILD]
 * ระบุ Type 'Variants' ให้กับตัวแปร เพื่อป้องกัน Error: 
 * "Type 'string' is not assignable to type 'AnimationGeneratorType'"
 */
const FADE_UP_ANIMATION: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", // กำหนดค่าให้ตรงกับ Literal Type ของ Framer Motion
      damping: 25, 
      stiffness: 100 
    } 
  }
};

const PROTOCOLS = [
  {
    step: "01",
    title: "สร้าง 'บ้านหลังหลัก' ให้ตัวตนของคุณ",
    description: "เราจะสร้างเว็บไซต์ที่เป็นเหมือนหน้าตาของคุณจริงๆ ขึ้นมาใหม่ โดยใช้เทคโนโลยีที่ทันสมัยที่สุด เพื่อให้ Google มั่นใจว่านี่คือ 'ข้อมูลที่ถูกต้องและเป็นปัจจุบันที่สุด' เมื่อคนกดเข้ามาดู เขาจะได้รับรู้เรื่องราวที่ถูกต้องจากคุณโดยตรงทันที",
    icon: <ShieldCheck className="w-6 h-6 text-white" />
  },
  {
    step: "02",
    title: "ยืนยันกับ Google ว่าคุณคือ 'ตัวจริง'",
    description: "เราทำหน้าที่เป็นล่ามคอยสื่อสารกับระบบหลังบ้านของ Google เพื่อบอกว่าคุณคือใครและทำอะไรอยู่ ผลที่ได้คือข้อมูลของคุณจะแสดงผลออกมาอย่างเป็นระเบียบและน่าเชื่อถือ ช่วยลดความสับสนเวลาคนไปเจอข่าวลือที่ไม่อยู่บนพื้นฐานความจริง",
    icon: <Lock className="w-6 h-6 text-white" />
  },
  {
    step: "03",
    title: "ดันเรื่องดีๆ ขึ้นมา... เบียดเรื่องไม่ดีออกไป",
    description: "ไม่ใช่แค่ทำเว็บเดียวแล้วจบ แต่เราจะช่วยสร้าง 'พื้นที่สีขาว' รอบๆ ตัวคุณ เพื่อช่วยเบียดลิงก์ที่สร้างความเสียหายให้ตกไปอยู่หน้าลึกๆ จนคนหาไม่เจอ เพื่อให้หน้าแรกของ Google เหลือแต่ข้อมูลที่ส่งเสริมภาพลักษณ์ของคุณจริงๆ",
    icon: <ArrowUpRight className="w-6 h-6 text-white" />
  }
];

export default function CaseStudy() {
  const linkedinUrl = "https://www.linkedin.com/in/นายตัวอย่าง-unlinkth-4936623a5";

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 dark:bg-black dark:selection:bg-blue-900 font-sans">
      <Schema type="HowTo" />
      
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-24 sm:py-32">
        
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={FADE_UP_ANIMATION}
          className="text-center mb-24 space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase dark:bg-blue-950/30">
            <Search className="w-3 h-3" /> Search Engine Restoration
          </div>
          <h1 className="text-4xl sm:text-7xl font-black text-zinc-900 dark:text-zinc-50 tracking-tighter">
            คืนความมั่นใจ... <br />
            ให้ <span className="text-blue-600 font-thai tracking-normal underline decoration-blue-500/20 underline-offset-8">"ชื่อ"</span> ของคุณ
          </h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed font-medium font-thai">
            เพราะเวลาคนค้นหาชื่อคุณบน Google เขาควรได้เจอ "ความจริง" ที่คุณอยากบอก 
            เราจึงช่วยจัดระเบียบข้อมูลใหม่ เพื่อปกป้องชื่อเสียงที่คุณสร้างมาทั้งชีวิต
          </p>
          
          <div className="flex justify-center pt-4">
            <a 
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-[#0A66C2] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              โดยผู้เชี่ยวชาญที่ได้รับการยืนยันประวัติ
            </a>
          </div>
        </motion.div>

        {/* Protocol Steps */}
        <div className="grid gap-10">
          {PROTOCOLS.map((item) => (
            <motion.section
              key={item.step}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={FADE_UP_ANIMATION}
              className="group relative p-8 sm:p-12 rounded-[3.5rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 transition-all duration-500 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-2xl hover:shadow-blue-500/5"
            >
              <div className="flex flex-col sm:flex-row items-start gap-10">
                <div className="flex items-center justify-center shrink-0 w-16 h-16 rounded-[2rem] bg-zinc-900 dark:bg-blue-600 shadow-xl text-white font-black text-2xl group-hover:scale-110 transition-transform duration-500">
                  {item.step}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-50 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium font-thai">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_UP_ANIMATION}
          className="mt-32 p-10 sm:p-16 bg-zinc-950 text-white rounded-[4.5rem] text-center shadow-3xl relative overflow-hidden dark:bg-zinc-900 border border-white/5"
        >
          <div className="relative z-10 space-y-10">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black tracking-widest uppercase">
                <Lock className="w-3 h-3 text-emerald-400" /> 
                Official Unlinkth Privacy Protocol
              </div>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter leading-tight">
              คืนความสบายใจ <br className="sm:hidden" /> ให้คุณวันนี้
            </h2>
            
            <p className="opacity-70 text-zinc-300 font-medium text-lg max-w-xl mx-auto leading-relaxed font-thai">
              ผมเข้าใจดีว่าชื่อเสียงสำคัญแค่ไหน ทุกอย่างที่คุยกันจะเป็นความลับสูงสุด 
              และผมจะดูแลงานนี้ให้ดีที่สุดจนกว่าคุณจะพอใจครับ
            </p>

            <div className="pt-6">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-4 bg-blue-600 text-white px-14 py-7 rounded-full font-black text-xl transition-all hover:bg-white hover:text-black hover:scale-105 active:scale-95 shadow-2xl shadow-blue-600/30"
              >
                <MessageSquare className="w-6 h-6" />
                เริ่มแผนการกู้คืนภาพลักษณ์
              </Link>
            </div>
          </div>
          
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}
