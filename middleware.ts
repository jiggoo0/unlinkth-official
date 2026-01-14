/** @format */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // ✅ ดึงจาก request.nextUrl เพื่อแก้ TS2339
  // ✅ ใช้ _ นำหน้าเพื่อบอก ESLint ว่าตั้งใจประกาศไว้แต่ยังไม่ใช้
  const { pathname: _pathname } = request.nextUrl

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
