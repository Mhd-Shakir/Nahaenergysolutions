import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: {
        default: "Best Solar Company in Kerala | Top Solar Panel Installation Malappuram & Kondotty",
        template: "%s | Naha Solar Energy Solutions"
    },
    description: "Naha Solar - Kerala's #1 solar energy company. Expert solar panel installation in Malappuram, Kondotty & across Kerala. Best solar sellers with 25-year warranty, government subsidy assistance. Get free quote today!",
    keywords: [
        // Primary Keywords
        "best solar company in kerala",
        "best solar company in malappuram",
        "best solar company in kondotty",
        "best solar sellers in kerala",
        "best solar sellers in malappuram",
        "best solar sellers in kondotty",
        // Location-Specific
        "solar panel installation kerala",
        "solar panel installation malappuram",
        "solar panel installation kondotty",
        "solar energy kerala",
        "solar power kerala",
        "solar company near me",
        // Service Keywords
        "residential solar panels kerala",
        "commercial solar installation kerala",
        "industrial solar solutions kerala",
        "rooftop solar installation",
        "solar panel dealers kerala",
        // Additional Cities
        "solar company kozhikode",
        "solar panels thrissur",
        "solar installation palakkad",
        "affordable solar panels kerala",
        "top rated solar company kerala"
    ],
    authors: [{ name: "Naha Solar Energy Solutions" }],
    creator: "Naha Solar Energy Solutions",
    publisher: "Naha Solar Energy Solutions",
    formatDetection: {
        telephone: true,
        email: true,
        address: true,
    },
    metadataBase: new URL('https://nahasolar.com'), // Update with your actual domain
    alternates: {
        canonical: '/',
        languages: {
            'en-IN': '/',
            'ml-IN': '/',
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://nahasolar.com',
        siteName: 'Naha Solar Energy Solutions',
        title: 'Best Solar Company in Kerala | Top Solar Panel Installation Malappuram & Kondotty',
        description: "Kerala's #1 solar energy company. Expert installation in Malappuram, Kondotty & across Kerala. Best solar sellers with 25-year warranty.",
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Naha Solar - Best Solar Company in Kerala',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Best Solar Company in Kerala | Naha Solar',
        description: "Kerala's #1 solar energy company. Expert installation in Malappuram, Kondotty & across Kerala.",
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code', // Add your Google Search Console verification
        // yandex: 'your-yandex-verification',
        // bing: 'your-bing-verification',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://nahasolar.com/#organization",
                "name": "Naha Solar Energy Solutions",
                "url": "https://nahasolar.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://nahasolar.com/logo.png"
                },
                "description": "Best solar company in Kerala providing expert solar panel installation in Malappuram, Kondotty and across Kerala",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Kondotty",
                    "addressRegion": "Kerala",
                    "postalCode": "673638",
                    "addressCountry": "IN"
                },
                "areaServed": [
                    {
                        "@type": "State",
                        "name": "Kerala"
                    },
                    {
                        "@type": "City",
                        "name": "Malappuram"
                    },
                    {
                        "@type": "City",
                        "name": "Kondotty"
                    }
                ]
            },
            {
                "@type": "LocalBusiness",
                "@id": "https://nahasolar.com/#localbusiness",
                "name": "Naha Solar Energy Solutions",
                "image": "https://nahasolar.com/logo.png",
                "priceRange": "₹₹",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Kondotty",
                    "addressRegion": "Kerala",
                    "postalCode": "673638",
                    "addressCountry": "IN"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 11.2916,
                    "longitude": 75.9980
                },
                "description": "Best solar sellers in Kerala specializing in residential, commercial, and industrial solar panel installations",
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        "opens": "09:00",
                        "closes": "18:00"
                    }
                ]
            }
        ]
    };

    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </head>
            <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
