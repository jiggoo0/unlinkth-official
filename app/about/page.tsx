/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, UserCheck, MessageSquare, ArrowRight, Linkedin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * [STRATEGY: CONSULTANT AUTHORITY & EMPATHY]
 * - Storytelling: เปลี่ยนปัญหาของลูกค้าให้เป็นโอกาสในการกู้คืนชื่อเสียง
 * - Social Proof: เชื่อมโยง LinkedIn Official เพื่อยืนยันตัวตนระดับมืออาชีพ
 * - Identity Linking: ใช้ Anchor Link เพื่อให้ Google จับคู่ Entity ระหว่างเว็บและโซเชียล
 */

export default function AboutPage() {
  const fullName = "นายตัวอย่าง Unlinkth";
  const linkedinUrl = "https://www.linkedin.com/in/นายตัวอย่าง-unlinkth-4936623a5";

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans selection:bg-blue-100 dark:bg-black dark:selection:bg-blue-900">
      <Header />
      
      <main className="flex-grow flex flex-col items-center px-6 py-16 sm:py-32">
        <article className="w-full max-w-3xl space-y-16">
          
          {/* 🏛️ Header Identity */}
          <header className="space-y-6 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase dark:bg-blue-950/30">
              Personal Reputation Architect
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 sm:text-6xl">
              เรื่องราวของ <br className="sm:hidden" />
              <span className="text-blue-600 font-thai tracking-normal">{fullName}</span>
            </h1>
            
            {/* LinkedIn Quick Link Badge */}
            <div className="flex justify-center sm:justify-start">
              <a 
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-[#0A66C2] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Verified Professional Profile
              </a>
            </div>

            <p className="text-xl sm:text-2xl text-zinc-500 font-medium leading-relaxed dark:text-zinc-400 pt-2">
              "เพราะผมเชื่อว่า ทุกคนควรได้รับโอกาสในการ <span className="text-zinc-900 dark:text-zinc-50 underline decoration-blue-500/30">เริ่มต้นใหม่</span> บนโลกออนไลน์"
            </p>
          </header>

          {/* 🛡️ Core Vision Section */}
          <section className="space-y-12 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            <div className="space-y-6 font-medium">
              <p>
                หลายคนมักเจอปัญหาเดียวกัน คือเวลาใครเอาชื่อเราไปค้นหาใน Google แล้วดันไปเจอเรื่องราวเก่าๆ หรือข้อมูลที่ไม่ได้อัปเดต 
                ซึ่งบางทีมันก็ไม่ได้บอกตัวตนจริงๆ ของเราในปัจจุบัน
              </p>
              <p>
                ในยุคที่ <span className="text-zinc-900 dark:text-zinc-50 italic">"ชื่อเสียงดิจิทัล"</span> คือใบเบิกทางที่สำคัญที่สุด ผมจึงอาสาเข้ามาทำหน้าที่จัดการพื้นที่เหล่านี้ให้คุณ
              </p>
            </div>

            {/* Featured Image with Glassmorphism Effect */}
            <div className="relative aspect-video w-full overflow-hidden rounded-[2.5rem] my-12 border-2 border-zinc-100 dark:border-zinc-800 shadow-2xl">
              <Image
                src="/images/activity-1.jpg"
                alt="บรรยากาศการทำงานปรึกษาที่เน้นความเข้าใจลูกค้า"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* 🛠️ Strategic Mission Grid */}
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="space-y-4 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <UserCheck className="text-white w-5 h-5" />
                </div>
                <h2 className="text-xl font-black text-zinc-900 dark:text-zinc-50 uppercase tracking-tight">คืนภาพลักษณ์</h2>
                <p className="text-base font-medium">ผมช่วยดันหน้าเว็บทางการของคุณขึ้นไป เพื่อให้ข้อมูลที่ถูกต้องเป็นสิ่งแรกที่ผู้คนจดจำเมื่อค้นหาชื่อคุณ</p>
              </div>

              <div className="space-y-4 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 dark:bg-white flex items-center justify-center">
                  <ShieldCheck className="text-white dark:text-black w-5 h-5" />
                </div>
                <h2 className="text-xl font-black text-zinc-900 dark:text-zinc-50 uppercase tracking-tight">การปกป้อง</h2>
                <p className="text-base font-medium">ค่อยๆ ลดความสำคัญของสิ่งที่ไม่อยากให้คนเห็นให้จางลงตามธรรมชาติของระบบ Search Engine</p>
              </div>
            </div>

            {/* 📝 Professional Commitment */}
            <div className="relative overflow-hidden bg-zinc-950 dark:bg-zinc-900 p-10 rounded-[3rem] shadow-xl">
              <div className="relative z-10 space-y-4 text-white">
                <h2 className="text-2xl font-black flex items-center gap-3">
                  <MessageSquare className="text-blue-500 w-6 h-6" />
                  สัญญาจากผม
                </h2>
                <p className="text-zinc-300 font-medium leading-relaxed">
                  ผมไม่ได้มาเพื่อขายระบบที่ซับซ้อน แต่มาเพื่อช่วยแก้ปัญหาให้คุณสบายใจขึ้น 
                  ทุกงานที่ผมทำ ผมถือว่า <span className="text-white underline decoration-blue-500 underline-offset-4">ความลับของลูกค้าคือความสำคัญอันดับหนึ่ง</span> และผลลัพธ์ที่จับต้องได้คือเป้าหมายเดียวของผมครับ
                </p>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl" />
            </div>
          </section>

          {/* ⚡ Call to Action Footer */}
          <footer className="pt-10 space-y-8 border-t border-zinc-100 dark:border-zinc-900">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <Link 
                href="/case-study" 
                className="group flex items-center gap-2 text-xl font-black text-blue-600 hover:text-zinc-950 dark:hover:text-white transition-all"
              >
                ดูวิธีการที่ผมช่วยคุณได้ 
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Link>
              
              <div className="flex items-center gap-6">
                <a 
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-[#0A66C2] transition-colors"
                >
                  LinkedIn Profile
                </a>
                <Link 
                  href="/contact" 
                  className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  Contact Private
                </Link>
              </div>
            </div>
            
            <p className="text-center sm:text-left text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em]">
              Data Verified & Linked with Official Identity Infrastructure
            </p>
          </footer>

        </article>
      </main>

      <Footer />
    </div>
  );
}
