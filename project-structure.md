# 📁 รายงานโครงสร้างโปรเจกต์
_สร้างเมื่อ: Wed Jan 14 10:23:44 +07 2026_

## 🌳 Folder Structure
📂 app
  📂 about
    📄 page.tsx
  📂 case-study
    📄 page.tsx
  📂 contact
    📄 page.tsx
  📄 favicon.ico
  📄 globals.css
  📄 layout.tsx
  📄 page.tsx
  📄 sitemap.ts
  📂 wiki
    📂 [slug]
      📄 page.tsx
    📂 category
      📂 [slug]
        📄 page.tsx
    📄 page.tsx
    📄 layout.tsx
📂 components
  📄 Schema.tsx
  📂 wiki
    📄 WikiLayout.tsx
    📄 WikiHero.tsx
    📄 WikiCard.tsx
    📄 WikiSidebar.tsx
    📄 WikiContent.tsx
    📄 WikiTableOfContents.tsx
    📄 WikiRelatedPosts.tsx
    📄 WikiBreadcrumbs.tsx
  📂 shared
    📄 Header.tsx
    📄 Footer.tsx
  📂 ui
    📄 button.tsx
    📄 input.tsx
    📄 label.tsx
    📄 breadcrumb.tsx
    📄 navigation-menu.tsx
    📄 separator.tsx
    📄 sheet.tsx
    📄 tooltip.tsx
    📄 skeleton.tsx
    📄 sidebar.tsx
    📄 badge.tsx
    📄 card.tsx
    📄 accordion.tsx
📂 lib
  📄 utils.ts
  📄 wiki.ts
📂 hooks
  📄 use-mobile.ts
📂 types
  📄 wiki.ts
📂 scripts
  📄 clean-project.sh
  📂 dev
    📄 backup-project.sh
    📄 project-summary.sh
    📄 tree-projects.sh
  📄 pre-deploy-check.sh
📂 public
  📄 file.svg
  📄 globe.svg
  📂 images
    📄 activity-1.jpg
    📄 profile-photo.jpg
    📄 og-main.jpg
    📄 logo.png
  📄 next.svg
  📄 robots.txt
  📄 vercel.svg
  📄 window.svg
  📄 apple-touch-icon.png
📂 data
  📂 wiki
    📄 articles.ts
    📄 faq-data.ts
    📄 glossary.ts
    📄 legal-framework.ts
  📂 case-study
    📄 cases.ts

## 📦 ตรวจหา package.json
```json
พบ package.json ที่ root ของโปรเจกต์

{
  "name": "unlinkth-official",
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-tooltip": "^1.2.8",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.25.0",
    "lucide-react": "^0.562.0",
    "next": "15.5.7",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "tailwind-merge": "^3.4.0"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.3.3",
    "@eslint/js": "^9.39.2",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.5.7",
    "prettier": "^3.7.4",
    "prettier-plugin-tailwindcss": "^0.7.2",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.4.0",
    "typescript": "^5"
  }
}
```

## 📝 ผลการวิเคราะห์และปัญหาที่พบ

✖ 19 problems (0 errors, 19 warnings)
                                                                                  /16.7s
❯ pcl

> unlinkth-official@0.1.0 type-check /data/data/com.termux/files/home/UnlinkTH/unlinkth-official
> tsc --noEmit

app/wiki/[slug]/page.tsx:89:19 - error TS2322: Type '{ currentSlug: string; category: string; }' is not assignable to type 'IntrinsicAttributes & WikiRelatedPostsProps'.
  Property 'currentSlug' does not exist on type 'IntrinsicAttributes & WikiRelatedPostsProps'.

89                   currentSlug={article.slug}
                     ~~~~~~~~~~~

app/wiki/category/[slug]/page.tsx:8:10 - error TS2614: Module '"@/components/wiki/WikiCard"' has no exported member 'WikiCard'. Did you mean to use 'import WikiCard from "@/components/wiki/WikiCard"' instead?

8 import { WikiCard } from '@/components/wiki/WikiCard'
           ~~~~~~~~

components/wiki/WikiSidebar.tsx:93:26 - error TS2339: Property 'title' does not exist on type 'WikiCategory'.

93                     {cat.title}
                            ~~~~~

data/wiki/articles.ts:19:5 - error TS2561: Object literal may only specify known properties, but 'categorySlug' does not exist in type 'WikiArticle'. Did you mean to write 'category'?

19     categorySlug: 'right-to-be-forgotten',
       ~~~~~~~~~~~~

data/wiki/articles.ts:49:5 - error TS2561: Object literal may only specify known properties, but 'categorySlug' does not exist in type 'WikiArticle'. Did you mean to write 'category'?

49     categorySlug: 'google-orm',
       ~~~~~~~~~~~~

data/wiki/articles.ts:73:5 - error TS2561: Object literal may only specify known properties, but 'categorySlug' does not exist in type 'WikiArticle'. Did you mean to write 'category'?

73     categorySlug: 'pdpa',
       ~~~~~~~~~~~~

lib/wiki.ts:3:10 - error TS2305: Module '"@/data/wiki/articles"' has no exported member 'allWikiArticles'.

3 import { allWikiArticles, wikiCategories } from '@/data/wiki/articles'
           ~~~~~~~~~~~~~~~

lib/wiki.ts:3:27 - error TS2305: Module '"@/data/wiki/articles"' has no exported member 'wikiCategories'.

3 import { allWikiArticles, wikiCategories } from '@/data/wiki/articles'
                            ~~~~~~~~~~~~~~

lib/wiki.ts:4:10 - error TS2305: Module '"@/data/wiki/faq-data"' has no exported member 'wikiFAQs'.

4 import { wikiFAQs } from '@/data/wiki/faq-data'
           ~~~~~~~~

lib/wiki.ts:37:7 - error TS2322: Type 'import("/data/data/com.termux/files/home/UnlinkTH/unlinkth-official/data/wiki/legal-framework").LegalProvision[]' is not assignable to type 'import("/data/data/com.termux/files/home/UnlinkTH/unlinkth-official/types/wiki").LegalProvision[]'.
  Type 'LegalProvision' is missing the following properties from type 'LegalProvision': title, content, category

37 const _legalData: LegalProvision[] = legalFramework ?? []
         ~~~~~~~~~~

middleware.ts:14:11 - error TS2339: Property 'pathname' does not exist on type 'NextRequest'.

14   const { pathname, nextUrl } = request
             ~~~~~~~~


Found 11 errors in 6 files.

Errors  Files
     1  app/wiki/[slug]/page.tsx:89
     1  app/wiki/category/[slug]/page.tsx:8
     1  components/wiki/WikiSidebar.tsx:93
     3  data/wiki/articles.ts:19
     4  lib/wiki.ts:3
     1  middleware.ts:14
 ELIFECYCLE  Command failed with exit code 2.                                     /19.5s
❯ pl


> unlinkth-official@0.1.0 lint /data/data/com.termux/files/home/UnlinkTH/unlinkth-official
> eslint .


/data/data/com.termux/files/home/UnlinkTH/unlinkth-official/app/about/page.tsx
   9:3  warning  'UserCheck' is defined but never used      @typescript-eslint/no-unused-vars
  10:3  warning  'MessageSquare' is defined but never used  @typescript-eslint/no-unused-vars
  12:3  warning  'Globe' is defined but never used          @typescript-eslint/no-unused-vars

/data/data/com.termux/files/home/UnlinkTH/unlinkth-official/app/contact/page.tsx
  12:3  warning  'ChevronRight' is defined but never used  @typescript-eslint/no-unused-vars

/data/data/com.termux/files/home/UnlinkTH/unlinkth-official/app/page.tsx
  10:3  warning  'Heart' is defined but never used  @typescript-eslint/no-unused-vars
  11:3  warning  'Scale' is defined but never used  @typescript-eslint/no-unused-vars

/data/data/com.termux/files/home/UnlinkTH/unlinkth-official/app/wiki/page.tsx
   7:10  warning  'motion' is defined but never used                     @typescript-eslint/no-unused-vars
  33:9   warning  'featuredArticles' is assigned a value but never used  @typescript-eslint/no-unused-vars

/data/data/com.termux/files/home/UnlinkTH/unlinkth-official/components/shared/Footer.tsx
  7:23  warning  'Lock' is defined but never used  @typescript-eslint/no-unused-vars

/data/data/com.termux/files/home/UnlinkTH/unlinkth-official/components/wiki/WikiHero.tsx
  7:18  warning  'Sparkles' is defined but never used  @typescript-eslint/no-unused-vars

/data/data/com.termux/files/home/UnlinkTH/unlinkth-official/lib/wiki.ts
  27:7  warning  '_categoryMap' is assigned a value but never used  @typescript-eslint/no-unused-vars
  31:7  warning  '_glossaryMap' is assigned a value but never used  @typescript-eslint/no-unused-vars
  36:7  warning  '_faqData' is assigned a value but never used      @typescript-eslint/no-unused-vars
  37:7  warning  '_legalData' is assigned a value but never used    @typescript-eslint/no-unused-vars

/data/data/com.termux/files/home/UnlinkTH/unlinkth-official/middleware.ts
  14:11  warning  'pathname' is assigned a value but never used  @typescript-eslint/no-unused-vars
  14:21  warning  'nextUrl' is assigned a value but never used   @typescript-eslint/no-unused-vars

✖ 16 problems (0 errors, 16 warnings)
________

---
. Format code in