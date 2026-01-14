/** @format */

import { LegalProvision } from '@/types/wiki'

/**
 * [STRATEGY: LEGAL AUTHORITY & COMPLIANCE]
 * - Objective: รวบรวมข้อกฎหมายหลักที่ใช้ในการสนับสนุนการยื่นคำร้องลบข้อมูล
 * - Structure: ปรับ Property ให้ตรงกับ Interface ใน types/wiki.ts (id, title, content, category)
 */

export const legalFramework: LegalProvision[] = [
  {
    id: 'legal-01',
    title: 'รัฐธรรมนูญ พ.ศ. 2560 มาตรา 32', // ✅ เปลี่ยนจาก source/article เป็น title
    content:
      'บุคคลย่อมมีสิทธิในความเป็นอยู่ส่วนตัว เกียรติยศ ชื่อเสียง และครอบครัว การกระทำอันเป็นการละเมิดหรือกระทบต่อสิทธิของบุคคล หรือการนำข้อมูลส่วนบุคคลไปใช้ประโยชน์ไม่ว่าในทางใดๆ จะกระทำมิได้', // ✅ เปลี่ยนจาก description เป็น content
    category: 'Constitution', // ✅ เพิ่ม category
    sourceUrl: '', // Optional
  },
  {
    id: 'legal-02',
    title: 'PDPA มาตรา 33: สิทธิในการขอให้ลบข้อมูล',
    content:
      'สิทธิในการขอให้ลบหรือทำลายข้อมูลส่วนบุคคล (Right to Erasure) เมื่อข้อมูลนั้นหมดความจำเป็น หรือเจ้าของข้อมูลถอนความยินยอม หรือเป็นการเก็บรวบรวมโดยไม่ชอบด้วยกฎหมาย',
    category: 'PDPA',
  },
  {
    id: 'legal-03',
    title: 'PDPA มาตรา 34: สิทธิในการขอให้ระงับการใช้ข้อมูล',
    content:
      'สิทธิในการขอให้ระงับการใช้ข้อมูลส่วนบุคคล (Right to Restrict Processing) ในระหว่างที่มีการตรวจสอบความถูกต้องหรือความจำเป็นของข้อมูล',
    category: 'PDPA',
  },
  {
    id: 'legal-04',
    title: 'Google Standard - EU Right to be Forgotten',
    content:
      'ผู้ให้บริการ Search Engine มีหน้าที่ต้องลบลิงก์ที่เชื่อมโยงไปยังข้อมูลส่วนบุคคลหากข้อมูลนั้นไม่ถูกต้อง ล้าสมัย หรือไม่เกี่ยวข้องอีกต่อไป (อ้างอิง C-131/12)',
    category: 'International',
  },
]

/**
 * Helper สำหรับดึงข้อมูลไปแสดงผล
 * ปรับปรุงให้ค้นหาจาก title แทน source
 */
export const getLegalByCategory = (category: string) => {
  return legalFramework.filter((item) => item.category === category)
}
