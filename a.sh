#!/bin/bash

# 1. สร้างโฟลเดอร์โครงสร้างใหม่ที่จำเป็น
echo "📁 Creating new directory structure..."
mkdir -p components/shared
mkdir -p components/ui
mkdir -p data/case-study

# 2. ย้ายคอมโพเนนต์ส่วนกลางไปที่ shared
echo "🚚 Moving shared components..."
[ -f components/Header.tsx ] && mv components/Header.tsx components/shared/
[ -f components/Footer.tsx ] && mv components/Footer.tsx components/shared/

# 3. สร้างไฟล์ข้อมูลเริ่มต้นสำหรับ Case Study (ถ้ายังไม่มี)
if [ ! -f data/case-study/cases.ts ]; then
echo "📝 Creating initial case-study data..."
cat <<EOF > data/case-study/cases.ts
/** @format */

export interface CaseStudy {
  id: string;
  title: string;
  category: 'social' | 'search' | 'legal';
  description: string;
  outcome: string;
  slug: string;
}

export const cases: CaseStudy[] = [
  {
    id: '1',
    title: 'กู้คืนชื่อเสียงจากข้อมูลเก่าบน Google',
    category: 'search',
    description: 'จัดการข่าวเก่าที่ไม่เป็นธรรมซึ่งส่งผลต่อการสมัครงาน',
    outcome: 'ลิงก์ถูกลบออกจากระบบการค้นหาภายใน 14 วัน',
    slug: 'google-reputation-recovery',
  },
];
EOF
fi

# 4. ย้ายไฟล์ภาพให้ไปรวมที่เดียวเพื่อความเบา
echo "🖼️ Organizing public assets..."
mkdir -p public/images
[ -f public/og-main.jpg ] && mv public/og-main.jpg public/images/
[ -f public/logo.png ] && mv public/logo.png public/images/

# 5. สร้างไฟล์ Middleware พื้นฐาน (เพื่อความปลอดภัยและรองรับ Subdomain)
if [ ! -f middleware.ts ]; then
echo "🛡️ Creating basic middleware..."
cat <<EOF > middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // รองรับการจัดการ Header ความปลอดภัยพื้นฐาน
  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  return response;
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
EOF
fi

echo "✅ Reorganization Complete!"
echo "⚠️ อย่าลืมอัปเดต Path การ Import ในไฟล์ page.tsx ต่างๆ ให้ชี้ไปที่ components/shared ด้วยครับ"

