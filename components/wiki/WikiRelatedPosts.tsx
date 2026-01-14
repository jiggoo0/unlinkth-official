/** @format */

import React from 'react'
import { WikiService } from '@/lib/wiki'
import { WikiCard } from './WikiCard'

// ✅ กำหนด Interface ให้ตรงกับที่ Page ส่งมา
interface WikiRelatedPostsProps {
  currentSlug: string
  category: string
}

export const WikiRelatedPosts = ({
  currentSlug,
  category,
}: WikiRelatedPostsProps) => {
  const relatedArticles = WikiService.getRelatedArticles(currentSlug, category)

  if (relatedArticles.length === 0) return null

  return (
    <section className="space-y-8">
      <h3 className="text-2xl font-black tracking-tighter uppercase">บทความที่เกี่ยวข้อง</h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {relatedArticles.map((article) => (
          <WikiCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  )
}
