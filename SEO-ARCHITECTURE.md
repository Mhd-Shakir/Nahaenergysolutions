# SEO Architecture Diagram - Naha Solar

## 📐 System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     Naha Solar Website                          │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐   │
│  │             /src/app/layout.tsx                        │   │
│  │         (Root Layout - Applied to ALL pages)          │   │
│  │                                                        │   │
│  │  ✅ 70+ Keywords                                       │   │
│  │  ✅ Open Graph Tags                                    │   │
│  │  ✅ Twitter Cards                                      │   │
│  │  ✅ Structured Data (Organization + LocalBusiness)     │   │
│  │  ✅ Geo-location Tags                                  │   │
│  │  ✅ Mobile Optimization                                │   │
│  └────────────────────────────────────────────────────────┘   │
│                          ↓                                      │
│  ┌────────────────────────────────────────────────────────┐   │
│  │              Individual Pages                           │   │
│  │                                                        │   │
│  │  /              → Home (auto-inherits SEO)            │   │
│  │  /services      → Services + specific metadata         │   │
│  │  /about         → About + specific metadata            │   │
│  │  /contact       → Contact + specific metadata          │   │
│  │  /projects      → Projects + specific metadata         │   │
│  │  /blog          → Blog + specific metadata             │   │
│  │  /testimonials  → Testimonials + specific metadata     │   │
│  │  /careers       → Careers + specific metadata          │   │
│  │  /resources     → Resources + specific metadata        │   │
│  └────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
                    ┌──────────────────┐
                    │  Search Engines  │
                    └──────────────────┘
                              ↓
        ┌─────────────────────┼─────────────────────┐
        ↓                     ↓                     ↓
   ┌─────────┐         ┌──────────┐         ┌──────────┐
   │ Google  │         │   Bing   │         │  Voice   │
   │ Search  │         │  Search  │         │ Assistants│
   └─────────┘         └──────────┘         └──────────┘
        ↓                     ↓                     ↓
   ┌─────────┐         ┌──────────┐         ┌──────────┐
   │Featured │         │  Local   │         │   FAQ    │
   │Snippets │         │  Pack    │         │ Answers  │
   └─────────┘         └──────────┘         └──────────┘
```

## 🗂️ File Structure

```
nahasolar-energy-connect-main/
│
├── 📁 src/
│   │
│   ├── 📁 app/
│   │   ├── 📄 layout.tsx         ← 🎯 MAIN SEO FILE
│   │   │                            • 70+ keywords
│   │   │                            • Open Graph tags
│   │   │                            • Structured data
│   │   │                            • Applied to ALL pages
│   │   │
│   │   ├── 📄 sitemap.ts         ← XML Sitemap Generator
│   │   │                            • All pages listed
│   │   │                            • Priority & frequency
│   │   │                            • Auto-generated
│   │   │
│   │   └── 📄 robots.ts          ← Robots.txt
│   │                                • Crawler instructions
│   │                                • Sitemap location
│   │
│   ├── 📁 components/
│   │   └── 📄 SEO.tsx            ← Reusable SEO Component
│   │                                • For client components
│   │                                • Custom metadata
│   │
│   └── 📁 config/
│       ├── 📄 seo.ts             ← SEO Configuration
│       │                            • 70+ keywords list
│       │                            • Structured data schemas
│       │                            • FAQ schema for AEO
│       │                            • Site-wide settings
│       │
│       └── 📄 metadata.ts        ← Page-Specific Metadata
│                                    • Home metadata
│                                    • Services metadata
│                                    • About metadata
│                                    • Contact metadata
│                                    • ... (all pages)
│
├── 📁 Documentation/
│   ├── 📄 SEO-README.md          ← ⭐ START HERE
│   ├── 📄 SEO-SUMMARY.md         ← Executive Summary
│   ├── 📄 SEO-IMPLEMENTATION-GUIDE.md  ← Technical Guide
│   ├── 📄 SEO-KEYWORDS-REFERENCE.md    ← 200+ Keywords
│   ├── 📄 AEO-GUIDE.md           ← Voice Search & Snippets
│   └── 📄 SEO-CHECKLIST.md       ← Action Items
│
└── 📁 public/
    ├── 🖼️ og-image.jpg           ← TO CREATE (1200x630px)
    └── 🖼️ logo.png               ← TO CREATE (512x512px)
```

## 🔄 Data Flow

```
┌─────────────────┐
│  Search Engine  │
│   (Google, etc) │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  Crawls Website │
│  via sitemap.xml│
└────────┬────────┘
         │
         ↓
┌──────────────────────────────────────┐
│ Reads Meta Tags from layout.tsx:     │
│                                      │
│ • Title: "Best Solar Company..."    │
│ • Description: "Kerala's #1..."     │
│ • Keywords: [70+ keywords]          │
│ • Geo-location: Kerala, Malappuram  │
└────────┬─────────────────────────────┘
         │
         ↓
┌──────────────────────────────────────┐
│ Reads Structured Data (JSON-LD):    │
│                                      │
│ • Organization info                  │
│ • LocalBusiness details             │
│ • Service areas                      │
│ • Business hours                     │
│ • Geographic coordinates             │
└────────┬─────────────────────────────┘
         │
         ↓
┌──────────────────────────────────────┐
│ Indexes Content with Context:       │
│                                      │
│ • "Best solar company in Kerala"    │
│ • Service area: Malappuram, Kondotty│
│ • Type: LocalBusiness               │
│ • Category: Solar Installation      │
└────────┬─────────────────────────────┘
         │
         ↓
┌──────────────────────────────────────┐
│ User Searches:                       │
│ "best solar company in kerala"      │
└────────┬─────────────────────────────┘
         │
         ↓
┌──────────────────────────────────────┐
│ Your Website Appears:                │
│                                      │
│ 🎯 In Search Results                 │
│ 📍 In Local Pack                     │
│ 🗣️ In Voice Search                  │
│ 📌 In Featured Snippets              │
└──────────────────────────────────────┘
```

## 🎯 Keyword Distribution

```
┌─────────────────────────────────────────────┐
│        Primary Keywords (Tier 1)            │
│        Used in: Title, H1, First Para       │
├─────────────────────────────────────────────┤
│ • best solar company in kerala             │
│ • best solar company in malappuram         │
│ • best solar company in kondotty           │
│ • best solar sellers in kerala             │
│ • best solar sellers in malappuram         │
│ • best solar sellers in kondotty           │
└─────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────┐
│     Location Keywords (Tier 2)              │
│     Used in: H2, Meta Description, Body     │
├─────────────────────────────────────────────┤
│ • solar panel installation kerala          │
│ • solar energy solutions malappuram        │
│ • solar company near me                     │
│ • solar panels kondotty                     │
│ • solar installation [city]                 │
└─────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────┐
│      Service Keywords (Tier 3)              │
│      Used in: H3, Content, Alt Text         │
├─────────────────────────────────────────────┤
│ • residential solar panels                  │
│ • commercial solar installation             │
│ • industrial solar solutions                │
│ • rooftop solar                             │
│ • solar maintenance                         │
└─────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────┐
│     Long-tail Keywords (Tier 4)             │
│     Used in: Blog Posts, FAQs               │
├─────────────────────────────────────────────┤
│ • how much do solar panels cost in kerala  │
│ • solar panel installation with subsidy    │
│ • best quality solar panels malappuram     │
│ • solar company comparison kerala           │
└─────────────────────────────────────────────┘
```

## 🗺️ Geographic Targeting

```
                    ┌──────────┐
                    │  Kerala  │
                    │  (State) │
                    └────┬─────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
    ┌────▼────┐    ┌────▼─────┐   ┌────▼────┐
    │Malappuram│    │Kozhikode │   │Palakkad │
    │(District)│    │(District)│   │(District)│
    └────┬────┘    └──────────┘   └─────────┘
         │
    ┌────▼─────┐
    │ Kondotty │
    │  (City)  │
    └──────────┘

Primary Focus:
├── 🎯 Kondotty (City)             ← HIGHEST PRIORITY
├── 🎯 Malappuram (District)       ← HIGH PRIORITY
├── 🎯 Kerala (State)              ← MEDIUM PRIORITY
└── 🎯 Nearby Cities               ← SUPPORTING
    ├── Kozhikode
    ├── Palakkad
    ├── Thrissur
    ├── Tirur
    └── Perinthalmanna
```

## 📊 SEO Components Hierarchy

```
┌─────────────────────────────────────────────────────────┐
│                   Website Ranking Factors               │
└─────────────────────────────────────────────────────────┘
                          │
         ┌────────────────┼────────────────┐
         │                │                │
    ┌────▼─────┐    ┌────▼────┐    ┌────▼─────┐
    │Technical │    │ Content │    │ Off-Page │
    │   SEO    │    │   SEO   │    │   SEO    │
    └────┬─────┘    └────┬────┘    └────┬─────┘
         │               │               │
         │               │               │
    ✅ Implemented   ✅ Implemented   ⏳ To Do
         │               │               │
    ┌────▼────┐     ┌────▼────┐     ┌────▼────┐
    │• Sitemap│     │•Keywords│     │•Backlinks│
    │•Robots  │     │• Meta   │     │• Reviews│
    │• Schema │     │• H1-H6  │     │•Listings│
    │• Mobile │     │• Content│     │• Social │
    │• Speed  │     │• FAQs   │     │• Citations│
    └─────────┘     └─────────┘     └─────────┘
```

## 🔍 Search Result Preview

```
┌──────────────────────────────────────────────────────────┐
│  Google Search: "best solar company in kerala"           │
└──────────────────────────────────────────────────────────┘

Result #1 (Your Goal):
╔══════════════════════════════════════════════════════════╗
║ 👤 Naha Solar Energy Solutions                          ║
║                                                          ║
║ Best Solar Company in Kerala | Top Solar Panel...       ║
║ https://nahasolar.com                                   ║
║                                                          ║
║ Naha Solar - Kerala's #1 solar energy company. Expert   ║
║ solar panel installation in Malappuram, Kondotty &      ║
║ across Kerala. ✓ Best prices ✓ 25-year warranty...     ║
║                                                          ║
║ ⭐⭐⭐⭐⭐ 4.9 · 127 reviews · Solar Installation       ║
║                                                          ║
║ 📍 Kondotty, Malappuram, Kerala                         ║
║ ⏰ Open · Closes 6 PM                                    ║
║ 📞 Call · Website · Directions                           ║
╚══════════════════════════════════════════════════════════╝

Featured Snippet:
╔══════════════════════════════════════════════════════════╗
║ Which is the best solar company in Kerala?              ║
║ ──────────────────────────────────────────────────      ║
║ Naha Solar Energy Solutions is one of the leading       ║
║ solar companies in Kerala, serving Malappuram,          ║
║ Kondotty, and surrounding areas with high-quality       ║
║ solar panel installations...                            ║
║                                                          ║
║ nahasolar.com › about                                   ║
╚══════════════════════════════════════════════════════════╝

Local Pack:
╔══════════════════════════════════════════════════════════╗
║ Solar Companies Near You                                ║
║ ──────────────────────────────────────────────────      ║
║ A  Naha Solar Energy Solutions  ⭐ 4.9 (127)           ║
║    Solar Installation · Kondotty                        ║
║    "Best solar company in Kerala..."                    ║
║                                                          ║
║ [Map showing location pin at Kondotty]                  ║
╚══════════════════════════════════════════════════════════╝
```

## 🎙️ Voice Search Flow

```
User asks Alexa/Siri/Google:
"Which is the best solar company in Kerala?"
                │
                ↓
┌───────────────────────────────────────┐
│ AI looks for FAQ Schema               │
│ Finds: /src/config/seo.ts → faqSchema│
└───────────────┬───────────────────────┘
                │
                ↓
┌───────────────────────────────────────┐
│ Reads Structured Answer:              │
│ "Naha Solar Energy Solutions is one   │
│  of the leading solar companies in    │
│  Kerala, serving Malappuram,          │
│  Kondotty, and surrounding areas..."  │
└───────────────┬───────────────────────┘
                │
                ↓
┌───────────────────────────────────────┐
│ Voice Assistant Responds:             │
│ "According to Naha Solar, they are    │
│  one of the leading solar companies   │
│  in Kerala..."                        │
└───────────────────────────────────────┘
```

## 🌐 Social Media Sharing

```
User shares your website on Facebook:
                │
                ↓
┌───────────────────────────────────────┐
│ Facebook reads Open Graph tags from:  │
│ /src/app/layout.tsx (lines 59-72)    │
└───────────────┬───────────────────────┘
                │
                ↓
Facebook Post Preview:
╔══════════════════════════════════════════╗
║ [OG Image: 1200x630px]                   ║
║ ┌────────────────────────────────────┐  ║
║ │ Naha Solar - Best Solar Company    │  ║
║ │ in Kerala branding image           │  ║
║ └────────────────────────────────────┘  ║
║                                          ║
║ Best Solar Company in Kerala | Top...   ║
║ nahasolar.com                           ║
║                                          ║
║ Kerala's #1 solar energy company.       ║
║ Expert installation in Malappuram...    ║
╚══════════════════════════════════════════╝
```

## 📱 Mobile "Near Me" Search

```
User on phone in Kondotty searches:
"solar company near me"
                │
                ↓
┌───────────────────────────────────────┐
│ Google uses:                          │
│ • User's GPS location (Kondotty)     │
│ • LocalBusiness schema                │
│ • Geo-coordinates (11.2916, 75.9980) │
│ • Service area (Kerala, Malappuram)  │
└───────────────┬───────────────────────┘
                │
                ↓
Local Results:
╔══════════════════════════════════════════╗
║ 📍 Naha Solar Energy Solutions           ║
║ ⭐⭐⭐⭐⭐ 4.9  · Solar Installation    ║
║ 📍 0.5 km away · Kondotty               ║
║                                          ║
║ [Call] [Directions] [Website]            ║
╚══════════════════════════════════════════╝
```

---

## 💡 Quick Reference Legend

```
✅ = Implemented and ready
🎯 = High priority target
📍 = Location-based
⭐ = Featured/Premium
🗣️ = Voice search optimized
📊 = Analytics/Tracking
⏳ = To be completed
🎙️ = Voice assistant
📱 = Mobile optimized
```

---

**This diagram shows how all the SEO components work together to get your website ranking in search engines!**

Refer to this when you need to understand:
- How files are connected
- Where keywords are used
- How search engines see your site
- What users will see in search results
