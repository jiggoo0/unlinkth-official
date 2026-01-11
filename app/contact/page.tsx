import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const fullName = "นายตัวอย่าง Unlinkth";
  const contactEmail = "contact@unlinkth.com"; // อีเมลสมมติสำหรับ Demo

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-black">
      <Header />
      
      <main className="flex-grow flex flex-col items-center px-6 py-16 sm:py-24">
        <div className="w-full max-w-2xl space-y-12">
          
          <header className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-4xl">
              ปรึกษาด้านภาพลักษณ์ดิจิทัล
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              หากท่านต้องการสอบถามข้อมูลเพิ่มเติมเกี่ยวกับบริการ ORM หรือต้องการยืนยันข้อเท็จจริงเกี่ยวกับ {fullName} โปรดติดต่อผ่านช่องทางที่เป็นทางการด้านล่างนี้
            </p>
          </header>

          <section className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-100 p-8 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/30">
              <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Direct Contact</h3>
              <p className="mt-3 text-lg font-semibold text-black dark:text-white">
                <a href={`mailto:${contactEmail}`} className="hover:text-blue-600 transition-colors">
                  {contactEmail}
                </a>
              </p>
              <p className="mt-1 text-sm text-zinc-500 italic">ตอบกลับภายใน 24 ชม.</p>
            </div>

            <div className="rounded-2xl border border-zinc-100 p-8 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/30">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Availability</h3>
              <p className="mt-3 text-lg font-semibold text-black dark:text-white">
                Mon - Fri, 09:00 - 18:00
              </p>
              <p className="mt-1 text-sm text-zinc-500 italic">GMT+7 (Bangkok Time)</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-black dark:text-zinc-50">Identity Verification</h2>
            <div className="grid gap-3">
              <a href="#" className="flex items-center justify-between rounded-xl bg-zinc-100/50 p-5 transition-all hover:bg-zinc-100 dark:bg-zinc-900/50 dark:hover:bg-zinc-800 group">
                <div className="flex flex-col">
                  <span className="font-bold text-black dark:text-white">LinkedIn Official</span>
                  <span className="text-xs text-zinc-500 font-medium">Professional Network Verified</span>
                </div>
                <span className="text-zinc-400 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              
              <a href="#" className="flex items-center justify-between rounded-xl bg-zinc-100/50 p-5 transition-all hover:bg-zinc-100 dark:bg-zinc-900/50 dark:hover:bg-zinc-800 group">
                <div className="flex flex-col">
                  <span className="font-bold text-black dark:text-white">Medium Portfolio</span>
                  <span className="text-xs text-zinc-500 font-medium">Strategy & Case Studies</span>
                </div>
                <span className="text-zinc-400 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </section>

          {/* ป้ายประกาศเพื่อความน่าเชื่อถือ */}
          <div className="rounded-2xl bg-black p-8 dark:bg-white">
            <p className="text-sm text-center font-medium text-white dark:text-black">
              "ความโปร่งใสคือหัวใจของความเชื่อมั่น เราพร้อมให้ข้อมูลที่ถูกต้องที่สุดแก่ท่านเสมอ"
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
