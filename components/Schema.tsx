export default function Schema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "นายตัวอย่าง Unlinkth",
    "url": "https://unlinkth-official.vercel.app",
    "image": "https://unlinkth-official.vercel.app/images/profile-photo.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/unlinkth", 
      "https://medium.com/@unlinkth",
      "https://www.blockdit.com/unlinkth"
    ],
    "jobTitle": "Online Reputation Management Specialist",
    "worksFor": {
      "@type": "Organization",
      "name": "Unlinkth Thailand"
    },
    "description": "ผู้เชี่ยวชาญด้านการจัดการชื่อเสียงออนไลน์และกลยุทธ์การแก้ไขข้อมูลส่วนบุคคลบนระบบการค้นหา (Search Engine)",
    "knowsAbout": [
      "SEO Displacement",
      "Online Reputation Management",
      "Digital Branding",
      "Search Engine Optimization"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
