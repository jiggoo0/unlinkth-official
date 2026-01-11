"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-20">
        
        {/* หัวข้อหลัก: เน้นความรู้สึกที่ลูกค้าจะได้รับ */}
        <div className="text-center mb-20 space-y-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            คืนความมั่นใจ... ให้ "ชื่อ" ของคุณ
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            เพราะเวลาคนค้นหาชื่อคุณบน Google เขาควรได้เจอ "ความจริง" ที่คุณอยากบอก 
            เราจึงช่วยจัดระเบียบข้อมูลใหม่ เพื่อปกป้องชื่อเสียงที่คุณสร้างมาทั้งชีวิต
          </p>
        </div>

        <div className="grid gap-12">
          {/* ขั้นตอนที่ 1: เปลี่ยนจาก Technical เป็นเรื่องของ "ความน่าเชื่อถือ" */}
          <div className="group relative p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 transition-all hover:shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg">1</span>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">สร้าง "บ้านหลังหลัก" ให้ตัวตนของคุณ</h3>
            </div>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              เราจะสร้างเว็บไซต์ที่เป็นเหมือนหน้าตาของคุณจริงๆ ขึ้นมาใหม่ครับ โดยใช้เทคโนโลยีที่ทันสมัยที่สุด 
              เพื่อให้ Google มั่นใจว่านี่คือ **"ข้อมูลที่ถูกต้องและเป็นปัจจุบันที่สุด"** เมื่อคนกดเข้ามาดู เขาจะได้รับรู้เรื่องราวที่ถูกต้องจากคุณโดยตรงทันที
            </p>
          </div>

          {/* ขั้นตอนที่ 2: เปลี่ยนจาก Schema เป็นเรื่องของ "การบอกทาง" */}
          <div className="group relative p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 transition-all hover:shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg">2</span>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">ยืนยันกับ Google ว่าคุณคือ "ตัวจริง"</h3>
            </div>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              เราทำหน้าที่เป็นล่ามคอยสื่อสารกับระบบหลังบ้านของ Google เพื่อบอกว่าคุณคือใครและทำอะไรอยู่ 
              ผลที่ได้คือข้อมูลของคุณจะแสดงผลออกมาอย่างเป็นระเบียบและน่าเชื่อถือ 
              ช่วยลดความสับสนเวลาคนไปเจอข่าวลือหรือข้อมูลเก่าๆ ที่ไม่เป็นความจริง
            </p>
          </div>

          {/* ขั้นตอนที่ 3: เปลี่ยนจาก Displacement เป็นเรื่องของ "พื้นที่สะอาด" */}
          <div className="group relative p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 transition-all hover:shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg">3</span>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">ดันเรื่องดีๆ ขึ้นมา... เบียดเรื่องไม่ดีออกไป</h3>
            </div>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              ไม่ใช่แค่ทำเว็บเดียวแล้วจบครับ แต่เราจะช่วยสร้าง "พื้นที่สีขาว" รอบๆ ตัวคุณ 
              เพื่อช่วย **"เบียด"** ลิงก์ที่สร้างความเสียหายให้ตกไปอยู่หน้าลึกๆ จนคนหาไม่เจอ 
              เพื่อให้หน้าแรกของ Google เหลือแต่ข้อมูลที่ส่งเสริมภาพลักษณ์และธุรกิจของคุณจริงๆ
            </p>
          </div>
        </div>

        {/* ส่วนท้าย: เน้นความสบายใจและความลับ */}
        <div className="mt-24 p-12 bg-zinc-950 text-white rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">คืนความสบายใจให้คุณวันนี้</h2>
            <p className="mb-10 opacity-80 text-zinc-300 font-light text-lg max-w-xl mx-auto leading-relaxed">
              ผมเข้าใจดีว่าชื่อเสียงสำคัญแค่ไหน ทุกอย่างที่คุยกันจะเป็นความลับสูงสุด 
              และผมจะดูแลงานนี้ให้ดีที่สุดจนกว่าคุณจะพอใจครับ
            </p>
            <a href="/contact" className="inline-flex items-center justify-center bg-white text-black px-12 py-5 rounded-full font-extrabold text-lg transition-all hover:bg-blue-50 hover:scale-105 active:scale-95 shadow-xl">
              ทักมาปรึกษาผมเป็นการส่วนตัว
            </a>
          </div>
          {/* ตกแต่งพื้นหลังนิดหน่อยให้ดูไม่จืด */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
