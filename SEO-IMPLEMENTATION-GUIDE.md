# SEO & AEO Implementation Guide - Naha Solar

## Overview
This document outlines the comprehensive SEO (Search Engine Optimization) and AEO (Answer Engine Optimization) implementation for Naha Solar Energy Solutions.

## 🎯 Target Keywords

### Primary Keywords (Must Rank)
1. **best solar company in kerala**
2. **best solar company in malappuram**
3. **best solar company in kondotty**
4. **best solar sellers in kerala**
5. **best solar sellers in malappuram**
6. **best solar sellers in kondotty**

### Location-Specific Keywords (70+ total)
- solar panel installation kerala
- solar panel installation malappuram
- solar panel installation kondotty
- solar energy kerala
- solar power kerala
- solar company near me
- And 60+ more in `/src/config/seo.ts`

## 📁 Files Created/Modified

### 1. Core Configuration Files
- **`/src/config/seo.ts`** - Main SEO configuration with 70+ keywords and structured data
- **`/src/config/metadata.ts`** - Page-specific metadata for all routes
- **`/src/app/layout.tsx`** - Enhanced with comprehensive metadata and structured data
- **`/src/app/sitemap.ts`** - XML sitemap for search engines
- **`/src/app/robots.ts`** - Robots.txt configuration

### 2. Components
- **`/src/components/SEO.tsx`** - Reusable SEO component (for client components)

## 🚀 What's Implemented

### 1. Meta Tags
✅ Title tags with location keywords
✅ Meta descriptions optimized for CTR
✅ Keywords meta tag (70+ keywords)
✅ Canonical URLs
✅ Author and publisher information

### 2. Open Graph Tags (Social Media)
✅ OG title, description, image
✅ OG type and locale
✅ Site name and URL
✅ Image dimensions (1200x630px)

### 3. Twitter Cards
✅ Summary large image card
✅ Title, description, images
✅ Optimized for Twitter sharing

### 4. Structured Data (Schema.org)
✅ Organization schema
✅ LocalBusiness schema with geo-coordinates
✅ Service areas (Kerala, Malappuram, Kondotty)
✅ FAQ schema template
✅ Opening hours
✅ Address information

### 5. Technical SEO
✅ Sitemap.xml generation
✅ Robots.txt configuration
✅ Canonical URLs
✅ Language tags (en-IN, ml-IN)
✅ Mobile-friendly meta tags
✅ Format detection for phone/email
✅ Geo-location meta tags

## 📊 SEO Best Practices Implemented

### On-Page SEO
1. **Title Optimization**
   - Primary keyword at the beginning
   - Location modifiers (Kerala, Malappuram, Kondotty)
   - Brand name at the end
   - Length: 50-60 characters

2. **Meta Description**
   - Compelling call-to-action
   - Includes primary keywords naturally
   - Location mentions
   - Length: 150-160 characters
   - Rich snippets indicators (✓ symbols)

3. **Keyword Strategy**
   - Primary keywords in title, description, H1
   - LSI keywords throughout content
   - Location-based keywords
   - Long-tail keyword variations

### Local SEO
1. **Geographic Targeting**
   - Multiple location keywords (Kerala, Malappuram, Kondotty)
   - Geo-coordinates in metadata
   - LocalBusiness schema with precise location
   - "Near me" keyword variations

2. **Service Area Coverage**
   - Primary: Malappuram, Kondotty
   - Secondary: Kozhikode, Palakkad, Thrissur
   - Regional: All of Kerala

### Answer Engine Optimization (AEO)
1. **FAQ Schema**
   - Common questions answered
   - Structured for featured snippets
   - Location-specific answers
   - File: `/src/config/seo.ts` (faqSchema)

2. **Question-Based Keywords**
   - "Which is the best solar company in Kerala?"
   - "How much do solar panels cost in Kerala?"
   - "Is there government subsidy for solar panels in Kerala?"

## 🔧 How to Use

### For Static Pages
Pages are already configured with metadata in `layout.tsx`.

### For Dynamic Pages (Future)
```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // ... other metadata
};
```

### For Client Components
Use the SEO component:
```typescript
import SEO from '@/components/SEO';

<SEO 
  title="Page Title"
  description="Page Description"
  keywords={['keyword1', 'keyword2']}
  canonical="https://nahasolar.com/page"
/>
```

## 📈 Next Steps for Full SEO

### 1. Create OG Image
Create an Open Graph image at:
- **Path**: `/public/og-image.jpg`
- **Size**: 1200x630px
- **Content**: Naha Solar branding, "Best Solar Company in Kerala"

### 2. Add Logo
- **Path**: `/public/logo.png`
- **Use**: For structured data and social sharing

### 3. Google Search Console
1. Verify ownership using the code in `layout.tsx`
2. Replace: `'your-google-verification-code'`
3. Submit sitemap: `https://nahasolar.com/sitemap.xml`

### 4. Update Domain
Replace all instances of `https://nahasolar.com` with your actual domain:
- `/src/config/seo.ts`
- `/src/app/layout.tsx`
- `/src/app/sitemap.ts`
- `/src/app/robots.ts`

### 5. Add Social Media Links
Update in `/src/config/seo.ts`:
```typescript
"sameAs": [
  "https://www.facebook.com/your-page",
  "https://www.instagram.com/your-profile",
  "https://www.linkedin.com/company/your-company"
]
```

### 6. Content Optimization
For each page, ensure:
- H1 tag includes primary keyword
- First paragraph includes location keywords
- Alt text on images includes keywords
- Internal linking between pages
- Mobile-responsive design

### 7. Performance Optimization
- Compress images (WebP format)
- Enable lazy loading
- Minimize CSS/JS
- Use CDN for static assets
- Implement caching

### 8. Local Business Listings
Register on:
- Google Business Profile (critical!)
- Bing Places
- Apple Maps
- Local Kerala directories

### 9. Backlink Building
- Create valuable blog content
- Guest posting on solar/renewable energy sites
- Local Kerala business directories
- Industry associations
- Case studies and testimonials

### 10. Analytics Setup
```typescript
// Add to layout.tsx in <head>
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `,
  }}
/>
```

## 📊 Tracking Results

### Key Metrics to Monitor
1. **Rankings**
   - Track positions for primary keywords
   - Use Google Search Console
   - Monitor local pack rankings

2. **Traffic**
   - Organic search traffic growth
   - Pages per session
   - Bounce rate
   - Conversion rate

3. **Local SEO**
   - Google Business Profile insights
   - Local keyword rankings
   - "Near me" search visibility

4. **Technical Health**
   - Core Web Vitals
   - Mobile usability
   - Index coverage
   - Crawl errors

## 🎯 Expected Impact

### Short-term (1-3 months)
- Improved meta tags indexing
- Better social media sharing
- Featured in local search results
- Sitemap indexed by Google

### Medium-term (3-6 months)
- Ranking for long-tail keywords
- Increased organic traffic
- Better CTR from search results
- Local pack appearances

### Long-term (6-12 months)
- Top 3 rankings for primary keywords
- Consistent organic lead generation
- Strong local presence in Kerala
- Authority in solar energy sector

## 📝 Maintenance Checklist

### Weekly
- [ ] Check Google Search Console for errors
- [ ] Monitor keyword rankings
- [ ] Review organic traffic trends

### Monthly
- [ ] Update blog content with keywords
- [ ] Refresh meta descriptions if needed
- [ ] Check for broken links
- [ ] Review competitor rankings

### Quarterly
- [ ] Audit all meta tags
- [ ] Update structured data
- [ ] Refresh OG images
- [ ] Review and update keywords list
- [ ] Analyze conversion funnel

## 🔗 Additional Resources

### Tools to Use
1. **Google Search Console** - Search performance
2. **Google Analytics** - Traffic analysis
3. **Google Business Profile** - Local presence
4. **Semrush/Ahrefs** - Keyword research
5. **Schema.org Validator** - Test structured data
6. **PageSpeed Insights** - Performance metrics

### Important URLs
- Sitemap: `https://nahasolar.com/sitemap.xml`
- Robots: `https://nahasolar.com/robots.txt`
- Schema Validator: https://validator.schema.org/
- Rich Results Test: https://search.google.com/test/rich-results

## 📞 Support

For questions about this SEO implementation, refer to:
- `/src/config/seo.ts` - Main configuration
- `/src/config/metadata.ts` - Page metadata
- This guide for setup instructions

---

**Last Updated**: February 2026
**Version**: 1.0
**Status**: ✅ Implemented and Ready for Deployment
