/** @format */

/**
 * [STRATEGY: DATA INTEGRITY]
 * - มั่นใจว่าทุกฟิลด์ใน data/wiki/*.ts มี Type รองรับ
 * - แก้ไขปัญหา Property 'description' does not exist (TS2339)
 * - รองรับโครงสร้างบทความ, หมวดหมู่, คำศัพท์ และกฎหมาย
 */

export interface WikiArticle {
  slug: string
  title: string
  category: string
  date: string
  description: string // ✅ เพิ่มเพื่อแก้ TS2339 และใช้ใน SEO Meta
  content: string
  excerpt?: string
  tags?: string[]
}

export interface WikiCategory {
  id: string
  label: string
  description?: string
  icon?: string
}

export interface WikiFAQ {
  question: string
  answer: string
  category: string
}

export interface GlossaryItem {
  term: string
  definition: string
}

export interface LegalProvision {
  id: string
  title: string
  content: string
  category: string
  sourceUrl?: string
}

// ✅ เพิ่มเติมสำหรับ Props ของ Components ที่เกี่ยวข้อง
export interface WikiRelatedPostsProps {
  currentSlug: string
  category: string
}
