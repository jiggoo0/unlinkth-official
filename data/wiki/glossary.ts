/** @format */

/**
 * [STRATEGY: EDUCATIONAL AUTHORITY]
 * - Objective: อธิบายคำศัพท์เทคนิคและกฎหมายให้กลายเป็นภาษาที่ประชาชนเข้าใจง่าย
 * - SEO: เพิ่ม Internal Linking Potential โดยการใช้คำศัพท์เหล่านี้ในบทความ Wiki
 */

export interface GlossaryItem {
  term: string
  definition: string
  category: 'Legal' | 'Technical' | 'Digital Marketing'
  alphabet: string
}

export const glossary: GlossaryItem[] = [
  {
    term: 'Right to be Forgotten',
    definition:
      'สิทธิในการถูกลืม: สิทธิของเจ้าของข้อมูลส่วนบุคคลในการขอให้ผู้ควบคุมข้อมูลลบ หรือระงับการเผยแพร่ข้อมูลที่ล้าสมัย ไม่ถูกต้อง หรือไม่จำเป็นต่อสาธารณะ',
    category: 'Legal',
    alphabet: 'R',
  },
  {
    term: 'PDPA',
    definition:
      'Personal Data Protection Act: พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 ของประเทศไทย ซึ่งเป็นกฎหมายหลักที่คุ้มครองสิทธิในข้อมูลของประชาชน',
    category: 'Legal',
    alphabet: 'P',
  },
  {
    term: 'De-indexing',
    definition:
      'การถอนดัชนี: กระบวนการที่ Search Engine (เช่น Google) นำ URL หรือหน้าเว็บหนึ่งๆ ออกจากผลการค้นหา ทำให้ผู้คนไม่สามารถค้นหาหน้าเว็บนั้นเจอผ่านคีย์เวิร์ด',
    category: 'Technical',
    alphabet: 'D',
  },
  {
    term: 'ORM',
    definition:
      'Online Reputation Management: การบริหารจัดการชื่อเสียงบนโลกออนไลน์ผ่านกลยุทธ์ต่างๆ เพื่อให้ข้อมูลที่ปรากฏต่อสาธารณะมีความถูกต้องและเป็นบวก',
    category: 'Digital Marketing',
    alphabet: 'O',
  },
  {
    term: 'Data Controller',
    definition:
      'ผู้ควบคุมข้อมูลส่วนบุคคล: บุคคลหรือนิติบุคคลที่มีอำนาจหน้าที่ตัดสินใจเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล',
    category: 'Legal',
    alphabet: 'D',
  },
  {
    term: 'SERP',
    definition:
      'Search Engine Results Page: หน้าแสดงผลการค้นหาของ Search Engine ซึ่งเป็นพื้นที่เป้าหมายหลักในการจัดการข้อมูลภาพลักษณ์',
    category: 'Technical',
    alphabet: 'S',
  },
  {
    term: 'Cache',
    definition:
      'ข้อมูลที่ถูกจัดเก็บชั่วคราว: บางครั้งแม้ลิงก์จะถูกลบไปแล้ว แต่ Google ยังจำภาพหน้าเว็บเก่าไว้ (Cached Page) ซึ่งต้องใช้เทคนิคการ Clear Cache เพื่อให้ข้อมูลหายไปถาวร',
    category: 'Technical',
    alphabet: 'C',
  },
]

// Helper function สำหรับจัดกลุ่มตามตัวอักษร (เผื่อใช้ในหน้า UI)
export const getGlossaryByAlphabet = () => {
  return glossary.reduce(
    (acc, item) => {
      const char = item.alphabet.toUpperCase()
      if (!acc[char]) acc[char] = []
      acc[char].push(item)
      return acc
    },
    {} as Record<string, GlossaryItem[]>
  )
}
