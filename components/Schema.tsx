/** @format */

import React from 'react'

/**
 * [STRATEGY: INSTITUTIONAL AUTHORITY - UNLINK-TH]
 * - Entity Shift: เปลี่ยนจากตัวบุคคลเป็น Organization เพื่อสร้างความน่าเชื่อถือระดับสถาบัน
 * - Inclusive Support: เพิ่ม Schema ที่เน้นการช่วยเหลือประชาชนและการให้ความรู้
 */

interface SchemaProps {
  type?: 'Organization' | 'HowTo' | 'FAQ'
  data?: Record<string, unknown>
}

export default function Schema({ type = 'Organization' }: SchemaProps) {
  const siteUrl = 'https://www.unlink-th.com'
  const brandName = 'UNLINK-TH'

  // 1. Organization Schema (สร้างความเชื่อมั่นระดับบริษัท)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: brandName,
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/images/logo.png`, // อย่าลืมใส่ไฟล์โลโก้
          width: '512',
          height: '512',
        },
        description:
          'สถาบันการจัดการชื่อเสียงและข้อมูลดิจิทัลเพื่อประชาชน ช่วยเหลือผู้เดือดร้อนจากการถูกละเมิดสิทธิข้อมูลส่วนบุคคล',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          areaServed: 'TH',
          availableLanguage: ['Thai', 'English'],
        },
        sameAs: [
          'https://www.linkedin.com/company/unlink-th',
          'https://www.facebook.com/unlinkth',
        ],
      },
      {
        '@type': 'LegalService', // ใช้ประเภทบริการทางกฎหมาย/จัดการสิทธิ
        name: `${brandName} Data Removal Services`,
        image: `${siteUrl}/images/brand-cover.jpg`,
        '@id': `${siteUrl}/#service`,
        url: siteUrl,
        priceRange: '$$', // ปรับให้ดูเข้าถึงง่ายขึ้น (Affordable)
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bangkok',
          addressCountry: 'TH',
        },
      },
    ],
  }

  // 2. HowTo Schema (สำหรับคนทั่วไปที่อยากรู้วิธีแก้ปัญหา)
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'ขั้นตอนการขอสิทธิให้ลบข้อมูลออกจากระบบ (Right to be Forgotten)',
    description:
      'คู่มือพื้นฐานสำหรับประชาชนที่ต้องการลบข้อมูลส่วนตัวหรือข่าวที่ส่งผลกระทบต่อชีวิต',
    step: [
      {
        '@type': 'HowToStep',
        name: 'ตรวจสอบสิทธิ',
        text: 'วิเคราะห์ข้อมูลที่ปรากฏว่าเข้าข่ายการละเมิดสิทธิ PDPA หรือไม่',
        url: `${siteUrl}/wiki`,
      },
      {
        '@type': 'HowToStep',
        name: 'เตรียมเอกสาร',
        text: 'รวบรวมหลักฐานและลิงก์ที่ต้องการให้ดำเนินการจัดการ',
        url: `${siteUrl}/wiki`,
      },
      {
        '@type': 'HowToStep',
        name: 'ยื่นคำร้อง',
        text: 'ดำเนินการผ่านช่องทางเทคนิคและข้อกฎหมายเพื่อยืนยันการลบถาวร',
        url: `${siteUrl}/contact`,
      },
    ],
  }

  // 3. FAQ Schema (สำคัญมากสำหรับหน้า Wiki)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'ลบข่าวเก่าใน Google ได้จริงไหม?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ได้จริง หากข้อมูลนั้นไม่เป็นธรรม ล้าสมัย หรือละเมิดสิทธิส่วนบุคคลตามกฎหมาย PDPA',
        },
      },
    ],
  }

  const getFinalSchema = () => {
    switch (type) {
      case 'HowTo':
        return howToSchema
      case 'FAQ':
        return faqSchema
      default:
        return organizationSchema
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getFinalSchema()) }}
    />
  )
}
