"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const fullName = "นายตัวอย่าง Unlinkth"; 
  const jobTitle = "ที่ปรึกษาด้านภาพลักษณ์และชื่อเสียงดิจิทัล";
  const bio = "ผมช่วยให้คุณกลับมา 'ควบคุม' สิ่งที่คนเห็นบน Google ได้อีกครั้ง ด้วยการจัดระเบียบข้อมูลใหม่และดันพื้นที่ข่าวดีขึ้นสู่หน้าแรก เพื่อปกป้องชื่อเสียงที่คุณสร้างมาอย่างตั้งใจ";

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-black">
      <Header />
      
      <main className="flex flex-grow flex-col items-center justify-center px-6 py-20 sm:py-32">
        <div className="w-full max-w-3xl space-y-12">
          
          {/* ส่วนรูปและชื่อ - ให้ความรู้สึกเหมือนแนะนำตัวกันจริงๆ */}
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            <div className="relative h-32 w-32 overflow-hidden rounded-3xl border-2 border-zinc-100 dark:border-zinc-800 shadow-xl bg-zinc-50">
              <img
                src="/images/profile-photo.jpg"
                alt={fullName}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/150?text=Consultant";
                }}
              />
            </div>
            
            <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                {fullName}
              </h1>
              <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                {jobTitle}
              </p>
            </div>
          </div>

          {/* สโลแกนหลัก - เน้นผลลัพธ์ที่ลูกค้าอยากได้ (ความสบายใจ) */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 border-l-4 border-blue-600 pl-5">
              เพราะชื่อของคุณคือ "ทรัพย์สิน" ที่สำคัญที่สุด
            </h2>
            <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
              {bio}
            </p>
          </div>

          {/* ปุ่มกด - ใช้คำที่เข้าใจง่าย ไม่ใช้คำเทคนิค */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-zinc-950 px-10 text-base font-bold text-white transition-all hover:bg-zinc-800 hover:shadow-xl active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              href="/about"
            >
              ทำความรู้จักผม
            </a>
            <a
              className="flex h-14 items-center justify-center rounded-2xl border-2 border-zinc-200 px-10 text-base font-bold transition-all hover:bg-zinc-50 hover:border-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-900 dark:hover:border-zinc-700"
              href="/case-study"
            >
              ดูวิธีที่ผมช่วยคุณได้
            </a>
          </div>

          {/* แถบการยืนยัน - เน้นความมั่นใจว่านี่คือของจริง */}
          <div className="pt-10 border-t border-zinc-100 dark:border-zinc-900">
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-5">Verified Platforms</p>
            <div className="flex flex-wrap gap-8 items-center opacity-70">
              <span className="text-zinc-900 dark:text-zinc-50 font-bold hover:opacity-100 transition-opacity cursor-default">LinkedIn Official</span>
              <span className="text-zinc-900 dark:text-zinc-50 font-bold hover:opacity-100 transition-opacity cursor-default">Medium Expert</span>
              <span className="text-zinc-900 dark:text-zinc-50 font-bold hover:opacity-100 transition-opacity cursor-default">Google Knowledge Panel</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
