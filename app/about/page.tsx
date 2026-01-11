"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const fullName = "นายตัวอย่าง Unlinkth";

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-black">
      <Header />
      
      <main className="flex-grow flex flex-col items-center px-6 py-16 sm:py-24">
        <article className="w-full max-w-2xl space-y-12">
          
          <header className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              เรื่องราวของ {fullName}
            </h1>
            <p className="text-xl text-blue-600 font-medium italic">
              "เพราะผมเชื่อว่า ทุกคนควรได้รับโอกาสในการเริ่มต้นใหม่บนโลกออนไลน์"
            </p>
          </header>

          <section className="space-y-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              หลายคนมักเจอปัญหาเดียวกัน คือเวลาใครเอาชื่อเราไปค้นหาใน Google แล้วดันไปเจอเรื่องราวเก่าๆ หรือข้อมูลที่ไม่ได้อัปเดต 
              ซึ่งบางทีมันก็ไม่ได้บอกตัวตนจริงๆ ของเราในวันนี้เลย
            </p>

            <div className="relative h-72 w-full overflow-hidden rounded-3xl my-10 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
              <img
                src="/images/activity-1.jpg"
                alt="บรรยากาศการทำงานที่เป็นกันเอง"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x400?text=Friendly+Consultant";
                }}
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">สิ่งที่ผมตั้งใจทำให้คุณ</h2>
              <p>
                งานของผมไม่ใช่แค่การทำเว็บไซต์ครับ แต่คือการเข้าไปช่วยดูแล **"ภาพลักษณ์"** ของคุณให้กลับมาดูดีอีกครั้ง 
                ผมจะช่วยดันหน้าเว็บทางการของคุณขึ้นไปให้คนเห็นเป็นอันดับแรกๆ เพื่อให้ข้อมูลที่ถูกต้องเป็นสิ่งแรกที่ผู้คนจดจำ 
                และค่อยๆ ลดความสำคัญของสิ่งที่ไม่อยากให้คนเห็นให้จางลงไปเองตามธรรมชาติ
              </p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-2xl border-l-4 border-blue-600">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">สัญญาจากผม</h2>
              <p>
                ผมไม่ได้มาเพื่อขายระบบซับซ้อน แต่มาเพื่อช่วยแก้ปัญหาให้คุณสบายใจขึ้น 
                ทุกงานที่ผมทำ ผมถือว่าความลับของลูกค้าสำคัญที่สุด และผลลัพธ์ที่จับต้องได้คือเป้าหมายเดียวของผมครับ
              </p>
            </div>
          </section>

          <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <a 
              href="/case-study" 
              className="text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              มาดูวิธีการทำงานของผมกันครับ →
            </a>
            <a 
              href="/contact" 
              className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              ทักมาปรึกษาได้ตลอดนะครับ
            </a>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
