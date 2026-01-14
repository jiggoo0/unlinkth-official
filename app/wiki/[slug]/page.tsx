/** @format */

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { WikiService } from '@/lib/wiki'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import { WikiBreadcrumbs } from '@/components/wiki/WikiBreadcrumbs'
import { WikiTableOfContents } from '@/components/wiki/WikiTableOfContents'
import { WikiRelatedPosts } from '@/components/wiki/WikiRelatedPosts'

/**
 * [STRATEGY: SEMANTIC SEO & PERFORMANCE]
 * - Metadata: รองรับ Dynamic SEO โดยดึงจาก article.description ที่แก้ไข Type แล้ว
 * - Async Params: ใช้มาตรฐาน Next.js 15 ในการ await params ก่อนเข้าถึง slug
 * - Content Safety: ป้องกัน Error จาก dangerouslySetInnerHTML ด้วย null-coalescing
 */

interface Props {
  params: Promise<{ slug: string }>
}

// 🎯 1. Dynamic Metadata สำหรับ SEO รายบทความ
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = WikiService.getArticleBySlug(slug)

  if (!article) return { title: 'ไม่พบหน้าบทความ | UNLINK-TH' }

  return {
    title: `${article.title} | UNLINK-TH Wiki`,
    description: article.description, // ✅ แก้ไข TS2339 แล้ว
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
    },
  }
}

// 🎯 2. หน้า Page แสดงเนื้อหาบทความ
export default async function WikiArticlePage({ params }: Props) {
  const { slug } = await params
  const article = WikiService.getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-black">
      <Header />

      <main className="flex-grow px-6 pt-32 pb-24">
        <div className="mx-auto max-w-7xl">
          {/* 🧭 Breadcrumbs Component */}
          <div className="mb-8">
            <WikiBreadcrumbs
              category={article.category}
              title={article.title}
            />
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            {/* 📄 Main Content Area */}
            <article className="space-y-12">
              <header className="space-y-6 border-b border-zinc-100 pb-12 dark:border-zinc-800">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black tracking-widest text-blue-600 uppercase dark:bg-blue-950/30">
                  Wiki / {article.category}
                </div>
                <h1 className="text-4xl leading-[1.1] font-black tracking-tighter text-zinc-900 sm:text-6xl dark:text-zinc-50">
                  {article.title}
                </h1>
                <p className="font-thai text-xl leading-relaxed font-medium text-zinc-500 dark:text-zinc-400">
                  {article.description} {/* ✅ แก้ไข TS2339 แล้ว */}
                </p>
              </header>

              {/* 🧩 Render Content HTML */}
              <div
                className="prose prose-zinc dark:prose-invert prose-headings:font-black prose-headings:tracking-tighter prose-p:font-thai prose-p:text-lg prose-p:leading-relaxed prose-strong:text-blue-600 max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content ?? '' }} // ✅ ป้องกัน TS2322
              />

              {/* 🔄 Related Articles Section */}
              <div className="border-t border-zinc-100 pt-12 dark:border-zinc-800">
                <WikiRelatedPosts
                  currentSlug={article.slug}
                  category={article.category}
                />
              </div>
            </article>

            {/* 📍 Sidebar Area (Desktop Only) */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-8">
                <WikiTableOfContents />
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

// 🎯 3. Static Paths (Pre-rendering)
export async function generateStaticParams() {
  const articles = WikiService.getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}
