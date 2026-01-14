/** @format */

import { allWikiArticles, wikiCategories } from '@/data/wiki/articles'
import { wikiFAQs } from '@/data/wiki/faq-data'
import { glossary } from '@/data/wiki/glossary'
import { legalFramework } from '@/data/wiki/legal-framework'
import {
  WikiArticle,
  WikiCategory,
  WikiFAQ,
  GlossaryItem,
  LegalProvision,
} from '@/types/wiki'

// Indexing articles for performance
const articleMap = new Map<string, WikiArticle>(
  (allWikiArticles ?? []).map((a: WikiArticle) => [a.slug.toLowerCase().trim(), a])
)

// _ prefix variables to satisfy ESLint
const _categoryMap = new Map<string, WikiCategory>(
  (wikiCategories ?? []).map((c: WikiCategory) => [c.id.toLowerCase().trim(), c])
)
const _glossaryMap = new Map<string, GlossaryItem>(
  (glossary ?? []).map((g: GlossaryItem) => [g.term.toLowerCase().trim(), g])
)
const _faqData: WikiFAQ[] = wikiFAQs ?? []
const _legalData: LegalProvision[] = legalFramework ?? []

export const WikiService = {
  getArticleBySlug: (slug: string): WikiArticle | undefined => {
    if (!slug) return undefined
    return articleMap.get(decodeURIComponent(slug).toLowerCase().trim())
  },

  getAllArticles: (categoryId?: string): WikiArticle[] => {
    const articles = allWikiArticles ?? []
    if (!categoryId || categoryId === 'ทั้งหมด') return articles
    return articles.filter(
      (a: WikiArticle) => a.category.toLowerCase() === categoryId.toLowerCase()
    )
  },

  getRelatedArticles: (currentSlug: string, category: string): WikiArticle[] => {
    return (allWikiArticles ?? []).filter(
      (a: WikiArticle) =>
        a.category.toLowerCase() === category.toLowerCase() &&
        a.slug !== currentSlug
    )
  },

  getCategories: (): WikiCategory[] => {
    return wikiCategories ?? []
  },
}
