/** @format */
import { FlatCompat } from '@eslint/eslintrc'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('next/typescript'),
  {
    // 🛡️ ปิดกฎที่เข้มงวดเกินไปสำหรับไฟล์ Auto-generated และตัวแปรที่ไม่ได้ใช้
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn', // เปลี่ยนจาก Error เป็น Warn
      '@typescript-eslint/triple-slash-reference': 'off', // ปิด Error ใน next-env.d.ts
      'react/no-unescaped-entities': 'off', // สำหรับภาษาไทยที่มีเครื่องหมายพิเศษ
    },
  },
  {
    // ยกเว้นการตรวจสอบไฟล์ที่ Next.js สร้างเอง
    ignores: ['.next/*', 'out/*', 'public/*'],
  },
]

export default eslintConfig
