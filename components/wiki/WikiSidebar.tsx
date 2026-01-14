/** @format */

import React from 'react'
import Link from 'next/link'
import { WikiService } from '@/lib/wiki'

export const WikiSidebar = () => {
  const categories = WikiService.getCategories()

  return (
    <nav className="space-y-4">
      <h3 className="text-xs font-black tracking-widest text-zinc-400 uppercase">Categories</h3>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link 
              href={`/wiki/category/${cat.id}`}
              className="font-thai text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors"
            >
              {/* ✅ เปลี่ยนจาก cat.title เป็น cat.label ตาม Interface */}
              {cat.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
