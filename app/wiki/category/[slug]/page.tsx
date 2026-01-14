/** @format */

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { WikiService } from '@/lib/wiki'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import { WikiCard } from '@/components/wiki/WikiCard'
import { WikiBreadcrumbs } from '@/components/wiki/WikiBreadcrumbs'

/**
 * [STRATEGY: DYNAMIC CATEGORY FILTERING]
 * - Data Mapping: ใช้ฟิลด์ category แทน categorySlug เพื่อความสอดคล้องกับ Types
 * - UX: แสดงรายการบทความทั้งหมดภายใต้หมวดหมู่ที่เลือกในรูปแบบ Grid
 * - Performance: ใช้ generateStaticParams เพื่อทำ Static Site Generation (SSG)
 */

interface Props {
  params: Promise<{ slug: string }>
}

// 🎯 1. สร้าง Dynamic Metadata สำหรับหน้าหมวดหมู่
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const categoryId = decodeURIComponent(slug)

  // ค้นหาข้อมูลหมวดหมู่จาก Service
  const articles = WikiService.getAllArticles(categoryId)

  if (articles.length === 0) {
    return { title: 'ไม่พบหมวดหมู่ | UNLINK-TH' }
  }

  // ดึงชื่อหมวดหมู่ที่สวยงาม (Capitalized หรือจาก Mapping)
  const categoryName = categoryId.charAt(0).toUpperCase() + categoryId.slice(1)

  return {
    title: `หมวดหมู่: ${categoryName} | UNLINK-TH Wiki`,
    description: `รวมบทความเกี่ยวกับ ${categoryName} และแนวทางการจัดการสิทธิทางดิจิทัล`,
  }
}

// 🎯 2. หน้า Page แสดงรายการบทความตามหมวดหมู่
export default async function WikiCategoryPage({ params }: Props) {
  const { slug } = await params
  const categoryId = decodeURIComponent(slug)

  // ดึงบทความตามหมวดหมู่
  const articles = WikiService.getAllArticles(categoryId)

  // ถ้าไม่มีบทความในหมวดหมู่นี้เลย ให้ไปหน้า 404
  if (articles.length === 0) {
    notFound()
  }

  const categoryName = categoryId.charAt(0).toUpperCase() + categoryId.slice(1)

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-black">
      <Header />

      <main className="flex-grow px-6 pt-32 pb-24">
        <div className="mx-auto max-w-7xl space-y-12">
          {/* 🧭 Navigation & Header */}
          <div className="space-y-6">
            <WikiBreadcrumbs category={categoryId} />
            <div className="space-y-2">
              <h1 className="text-4xl font-black tracking-tighter text-zinc-900 sm:text-6xl dark:text-zinc-50">
                Category: <span className="text-blue-600">{categoryName}</span>
              </h1>
              <p className="font-thai text-xl text-zinc-500 dark:text-zinc-400">
                พบ {articles.length} บทความในหมวดหมู่นี้
              </p>
            </div>
          </div>

          {/* 🗂️ Articles Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <WikiCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

// 🎯 3. สร้าง Static Paths สำหรับทุกหมวดหมู่ที่มีบทความ
export async function generateStaticParams() {
  const allArticles = WikiService.getAllArticles()

  // ดึง Unique Categories ทั้งหมด
  const categories = Array.from(
    new Set(allArticles.map((a) => a.category.toLowerCase()))
  )

  return categories.map((slug) => ({
    slug: slug,
  }))
}
