/** @format */

"use client";

import { motion } from "framer-motion";
import { Linkedin, ArrowRight, ShieldCheck, Search, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const fullName = "นายตัวอย่าง Unlinkth"; 
  const jobTitle = "ที่ปรึกษาด้านภาพลักษณ์และชื่อเสียงดิจิทัล";
  const linkedinUrl = "https://www.linkedin.com/in/นายตัวอย่าง-unlinkth-4936623a5";

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans selection:bg-blue-100 dark:bg-black dark:selection:bg-blue-900">
      <Header />
      
      <main className="flex flex-grow flex-col items-center justify-center px-6 py-24 sm:py-32">
        <div className="w-full max-w-4xl space-y-16">
          
          {/* 🏛️ Hero Section: Human-Centric Identity */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-10 sm:flex-row sm:items-start"
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-blue-600 to-emerald-400 opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative h-40 w-40 overflow-hidden rounded-[2.2rem] border-2 border-white dark:border-zinc-800 shadow-2xl bg-zinc-50">
                <img
                  src="/images/profile-photo.jpg"
                  alt={fullName}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/30 text-[10px] font-black tracking-widest text-blue-600 uppercase">
                <CheckCircle2 className="w-3 h-3" /> Professional Verified
              </div>
              <h1 className="text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 sm:text-7xl">
                {fullName}
              </h1>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 font-thai">
                {jobTitle}
              </p>
            </div>
          </motion.div>

          {/* 🛡️ Strategic Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight sm:text-4xl">
              "เพราะชื่อของคุณคือทรัพย์สิน <br className="hidden sm:block" /> 
              ที่มีค่าที่สุดบนโลกดิจิทัล"
            </h2>
            <p className="text-xl leading-relaxed text-zinc-500 dark:text-zinc-400 font-medium font-thai max-w-3xl">
              ผมช่วยให้คุณกลับมา <span className="text-zinc-900 dark:text-white underline decoration-blue-500/30">ควบคุม</span> สิ่งที่คนเห็นบน Google ได้อีกครั้ง 
              ผ่านการจัดระเบียบข้อมูลและดันพื้นที่ข่าวดีขึ้นสู่หน้าแรก เพื่อปกป้องชื่อเสียงที่คุณสร้างมาอย่างตั้งใจ
            </p>
          </motion.div>

          {/* ⚡ Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4 sm:flex-row pt-4"
          >
            <a
              href="/about"
              className="group flex h-16 items-center justify-center gap-3 rounded-2xl bg-zinc-950 px-12 text-lg font-black text-white transition-all hover:bg-blue-600 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200 shadow-xl shadow-blue-500/10"
            >
              ทำความรู้จักผม <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/case-study"
              className="flex h-16 items-center justify-center rounded-2xl border-2 border-zinc-200 px-12 text-lg font-black transition-all hover:border-zinc-950 dark:border-zinc-800 dark:hover:border-zinc-100"
            >
              ดูแผนการกู้คืนชื่อเสียง
            </a>
          </motion.div>

          {/* 🔍 Trust Infrastructure */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pt-16 border-t border-zinc-100 dark:border-zinc-900"
          >
            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-8">Official Identity Mapping</p>
            <div className="flex flex-wrap gap-10 items-center">
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-black text-zinc-400 hover:text-[#0A66C2] transition-colors group">
                <Linkedin className="w-4 h-4 opacity-40 group-hover:opacity-100" /> LinkedIn Profile
              </a>
              <div className="flex items-center gap-2 text-sm font-black text-zinc-400 cursor-default">
                <ShieldCheck className="w-4 h-4 opacity-40" /> Medium Expert
              </div>
              <div className="flex items-center gap-2 text-sm font-black text-zinc-400 cursor-default">
                <Search className="w-4 h-4 opacity-40" /> Google Verified Entity
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
