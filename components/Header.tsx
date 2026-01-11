import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        <Link 
          href="/" 
          className="flex items-center gap-2 group"
        >
          <div className="bg-black dark:bg-white text-white dark:text-black px-2 py-0.5 rounded font-black text-sm transition-transform group-hover:scale-105">
            UNLINK
          </div>
          <span className="text-sm font-bold tracking-widest text-black dark:text-white uppercase">
            Official
          </span>
        </Link>
        
        <nav className="flex items-center gap-5 sm:gap-8">
          <Link 
            href="/about" 
            className="text-xs sm:text-sm font-semibold text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            ประวัติ
          </Link>
          <Link 
            href="/case-study" 
            className="text-xs sm:text-sm font-semibold text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            กรณีศึกษา
          </Link>
          <Link 
            href="/contact" 
            className="text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
          >
            ปรึกษาด่วน
          </Link>
        </nav>
      </div>
    </header>
  );
}
