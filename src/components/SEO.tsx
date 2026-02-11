import Head from 'next/head';
import { siteConfig } from '@/config/seo';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string[];
    canonical?: string;
    ogImage?: string;
    ogType?: 'website' | 'article';
    noindex?: boolean;
    schema?: object | object[];
}

export default function SEO({
    title = siteConfig.name,
    description = siteConfig.description,
    keywords = siteConfig.keywords,
    canonical,
    ogImage = '/og-image.jpg',
    ogType = 'website',
    noindex = false,
    schema,
}: SEOProps) {
    const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;
    const url = canonical || siteConfig.url;
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteConfig.url}${ogImage}`;

    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(', ')} />

            {/* Canonical URL */}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Robots */}
            {noindex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            )}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullOgImage} />
            <meta property="og:site_name" content={siteConfig.name} />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullOgImage} />

            {/* Additional SEO Tags */}
            <meta name="author" content={siteConfig.name} />
            <meta name="geo.region" content="IN-KL" />
            <meta name="geo.placename" content="Kerala, Malappuram, Kondotty" />
            <meta name="geo.position" content="11.2916;75.9980" />
            <meta name="ICBM" content="11.2916, 75.9980" />

            {/* Language */}
            <meta httpEquiv="content-language" content="en-IN" />
            <link rel="alternate" hrefLang="en" href={url} />
            <link rel="alternate" hrefLang="ml" href={url} />

            {/* Mobile Meta Tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
            <meta name="format-detection" content="telephone=yes" />
            <meta name="HandheldFriendly" content="true" />

            {/* Structured Data / Schema.org */}
            {schema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(Array.isArray(schema) ? schema : [schema])
                    }}
                />
            )}

            {/* Organization Schema (Always Present) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(siteConfig.structuredData)
                }}
            />
        </Head>
    );
}
