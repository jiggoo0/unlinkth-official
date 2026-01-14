/** @format */

export interface CaseStudy {
  id: string
  title: string
  category: 'social' | 'search' | 'legal'
  description: string
  outcome: string
  slug: string
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
]
