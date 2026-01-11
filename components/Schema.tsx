/** @format */

import React from 'react';

/**
 * [STRATEGY: SEARCH ENGINE AUTHORITY - VERIFIED]
 * - Type Safety: เปลี่ยนจาก 'any' เป็นการระบุโครงสร้างที่แน่นอนเพื่อแก้ปัญหา ESLint Build Error
 * - Entity Linking: เชื่อมโยงตัวตนผ่าน Schema.org เพื่อทำ Google Knowledge Graph
 */

interface SchemaProps {
  type?: 'Person' | 'HowTo';
  // 🏛️ แก้ไขจาก any เป็น Record<string, unknown> เพื่อให้ผ่านกฎ ESLint
  data?: Record<string, unknown>; 
}

export default function Schema({ type = 'Person' }: SchemaProps) {
  const siteUrl = "https://unlinkth-official.vercel.app";
  const fullName = "นายตัวอย่าง Unlinkth";
  const linkedinUrl = "https://www.linkedin.com/in/นายตัวอย่าง-unlinkth-4936623a5";
  const mediumUrl = "https://medium.com/@unlinkth.example";

  // 1. Base Person & Professional Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        "name": fullName,
        "url": siteUrl,
        "image": {
          "@type": "ImageObject",
          "url": `${siteUrl}/images/profile-photo.jpg`,
          "width": "600",
          "height": "600"
        },
        "description": "ที่ปรึกษาด้านสถาปัตยกรรมทางเทคนิคและกลยุทธ์ SEO เชี่ยวชาญการจัดการชื่อเสียงออนไลน์และกู้คืนภาพลักษณ์ดิจิทัล",
        "jobTitle": "Technical Architect & SEO Strategist",
        "worksFor": {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          "name": "Unlinkth Thailand",
          "url": "https://unlinkth.com"
        },
        "sameAs": [
          linkedinUrl,
          mediumUrl,
          "https://www.blockdit.com/unlinkth.example"
        ],
        "knowsAbout": [
          "SEO Displacement",
          "Online Reputation Management",
          "Technical SEO Architecture",
          "Digital Privacy",
          "Identity Management"
        ]
      },
      {
        "@type": "ProfessionalService",
        "name": "Unlinkth Reputation Consulting",
        "image": `${siteUrl}/images/profile-photo.jpg`,
        "@id": `${siteUrl}/#service`,
        "url": siteUrl,
        "telephone": "",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bangkok",
          "addressLocality": "Bangkok",
          "addressRegion": "BKK",
          "postalCode": "10000",
          "addressCountry": "TH"
        },
        "priceRange": "$$$",
        "serviceType": "Technical SEO & Reputation Management"
      }
    ]
  };

  // 2. HowTo Schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "3 ขั้นตอนการจัดการชื่อเสียงและ SEO Displacement โดย Unlinkth",
    "description": "กระบวนการสร้างตัวตนดิจิทัลใหม่เพื่อเบียดแทนที่ผลการค้นหาที่ไม่ต้องการอย่างเป็นระบบ",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Digital Identity Construction",
        "text": "สร้างโครงสร้างเว็บไซต์และ Technical Foundation ที่แข็งแรงเพื่อให้ระบบค้นหาเชื่อถือข้อมูลใหม่",
        "url": `${siteUrl}/case-study`
      },
      {
        "@type": "HowToStep",
        "name": "Entity Verification",
        "text": "เชื่อมโยงตัวตนผ่าน Schema Markup, LinkedIn และ Medium Official เพื่อยืนยันว่าเป็นผู้เชี่ยวชาญตัวจริง",
        "url": `${siteUrl}/case-study`
      },
      {
        "@type": "HowToStep",
        "name": "Search Engine Displacement",
        "text": "เร่งการทำ Indexing และสร้างกระแส Traffic เพื่อดันข้อมูลบวกขึ้นแทนที่ข้อมูลด้านลบ",
        "url": `${siteUrl}/case-study`
      }
    ]
  };

  const finalSchema = type === 'HowTo' ? howToSchema : personSchema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
    />
  );
}
