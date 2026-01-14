/** @format */

import { MetadataRoute } from 'next'
import { allWikiArticles } from '@/data/wiki/articles'
import { WikiArticle } from '@/types/wiki'

export default function sitemap(): MetadataRoute.Sitemap {
  // ✅ แก้ไขเป็นโดเมนใหม่ที่คุณตั้งค่าใน Vercel
  const baseUrl = 'https://www.wiki.unlink-th.com' 

  const wikiUrls = (allWikiArticles ?? []).map((article: WikiArticle) => ({
    url: `${baseUrl}/wiki/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const categoryUrls = Array.from(
    new Set((allWikiArticles ?? []).map((a: WikiArticle) => a.category))
  ).map((slug: string) => ({
    url: `${baseUrl}/wiki/category/${slug.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    ...wikiUrls,
    ...categoryUrls,
  ]
}
