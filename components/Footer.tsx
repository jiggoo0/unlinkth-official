export default function Footer() {
  const currentYear = new Date().getFullYear();
  const fullName = "นายตัวอย่าง Unlinkth"; // ชื่อ Demo สำหรับปิดการขาย

  return (
    <footer className="border-t border-zinc-100 bg-white dark:border-zinc-900 dark:bg-black">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-black dark:text-white uppercase tracking-widest">
              {fullName}
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              © {currentYear} Official Website. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col items-center sm:items-end gap-2">
            <div className="flex items-center gap-2 text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tighter border border-blue-600/20 px-2 py-1 rounded bg-blue-50/50 dark:bg-blue-900/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Identity Verified by Google Index
            </div>
            <p className="text-[11px] text-zinc-400 max-w-[250px] text-center sm:text-right leading-relaxed">
              แหล่งข้อมูลอย่างเป็นทางการเพื่อการตรวจสอบข้อเท็จจริงและความถูกต้องของข้อมูลส่วนบุคคล
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
