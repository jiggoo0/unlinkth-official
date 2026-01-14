/** @format */

import React from 'react'
import Link from 'next/link'
import { WikiArticle } from '@/types/wiki'

/**
 * [STRATEGY: REUSABLE UI]
 * - Named Export: เพื่อให้รองรับ { WikiCard }
 * - Default Export: เพื่อให้รองรับการ Import แบบปกติ
 */

export const WikiCard = ({ article }: { article: WikiArticle }) => {
  return (
    <Link href={`/wiki/${article.slug}`} className="group block">
      <div className="rounded-[2.5rem] border border-zinc-100 bg-white p-8 transition-all hover:border-blue-600 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black tracking-widest text-blue-600 uppercase dark:bg-blue-950/30">
          {article.category}
        </div>
        <h3 className="mb-3 text-2xl font-black tracking-tighter text-zinc-900 group-hover:text-blue-600 dark:text-zinc-50">
          {article.title}
        </h3>
        <p className="line-clamp-2 font-thai text-sm text-zinc-500 dark:text-zinc-400">
          {article.description}
        </p>
      </div>
    </Link>
  )
}

export default WikiCard
