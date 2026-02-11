// SEO Configuration for Naha Solar Energy Solutions

export const siteConfig = {
    name: "Naha Solar Energy Solutions",
    url: "https://nahasolar.com", // Update with your actual domain
    description: "Leading solar energy solutions provider in Kerala. Expert solar panel installation in Malappuram, Kondotty, and across Kerala. Top-rated solar company for residential, commercial, and industrial solar power systems.",
    keywords: [
        // Primary Keywords - Company Related
        "best solar company in kerala",
        "best solar company in malappuram",
        "best solar company in kondotty",
        "best solar sellers in kerala",
        "best solar sellers in malappuram",
        "best solar sellers in kondotty",

        // Location-Specific Keywords
        "solar panel installation kerala",
        "solar panel installation malappuram",
        "solar panel installation kondotty",
        "solar energy kerala",
        "solar power kerala",
        "solar company malappuram",
        "solar company kondotty",

        // Service-Specific Keywords
        "residential solar panels kerala",
        "commercial solar installation kerala",
        "industrial solar solutions kerala",
        "rooftop solar installation kerala",
        "solar panel dealers kerala",
        "solar energy solutions malappuram",
        "solar power systems kondotty",

        // Product Keywords
        "solar panels kerala",
        "solar inverters kerala",
        "solar batteries kerala",
        "solar water heaters kerala",
        "on-grid solar system kerala",
        "off-grid solar system kerala",
        "hybrid solar system kerala",

        // Service Area Keywords
        "solar installation near me",
        "solar company near kondotty",
        "solar company near malappuram",
        "best solar installer kerala",
        "top solar company kerala",
        "trusted solar company malappuram",

        // Benefits Keywords
        "affordable solar panels kerala",
        "solar subsidy kerala",
        "solar financing kerala",
        "solar roi kerala",
        "save electricity bills kerala",

        // Technical Keywords
        "net metering kerala",
        "solar grid connection kerala",
        "solar maintenance kerala",
        "solar panel warranty kerala",

        // Brand Authority Keywords
        "top rated solar company kerala",
        "certified solar installer kerala",
        "solar experts kerala",
        "professional solar installation malappuram",
        "reliable solar company kondotty",

        // Long-tail Keywords
        "how much do solar panels cost in kerala",
        "solar panel installation cost malappuram",
        "best solar company for home kerala",
        "commercial solar installation malappuram",
        "solar panel installation government subsidy kerala",
        "best quality solar panels kerala",
        "solar energy for business kerala",

        // Nearby Areas
        "solar company kozhikode",
        "solar installation palakkad",
        "solar panels thrissur",
        "solar company kerala calicut",
        "solar installation tirur",
        "solar panels perinthalmanna",

        // Industry-Specific
        "solar for factories kerala",
        "solar for hospitals kerala",
        "solar for schools kerala",
        "solar for hotels kerala",
        "agricultural solar pumps kerala",
    ],
    structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Naha Solar Energy Solutions",
        "url": "https://nahasolar.com",
        "logo": "https://nahasolar.com/logo.png",
        "description": "Leading solar energy solutions provider in Kerala specializing in residential, commercial, and industrial solar installations",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kondotty",
            "addressRegion": "Kerala",
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
            },
            {
                "@type": "City",
                "name": "Kozhikode"
            },
            {
                "@type": "City",
                "name": "Palakkad"
            }
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "areaServed": "IN",
            "availableLanguage": ["en", "ml"]
        }
    }
};

export const pageMetadata = {
    home: {
        title: "Best Solar Company in Kerala | Top Solar Panel Installation in Malappuram & Kondotty",
        description: "Naha Solar - Kerala's #1 solar energy company. Expert solar panel installation in Malappuram, Kondotty & across Kerala. ✓ Best prices ✓ 25-year warranty ✓ Government subsidy assistance. Get free quote today!",
        keywords: "best solar company in kerala, solar panel installation malappuram, solar company kondotty, solar sellers kerala"
    },
    services: {
        title: "Solar Installation Services Kerala | Residential & Commercial Solar Solutions",
        description: "Comprehensive solar solutions in Kerala - Residential solar panels, commercial installations, industrial solar systems. Best solar sellers in Malappuram & Kondotty. Expert installation, maintenance & support.",
        keywords: "solar services kerala, residential solar panels malappuram, commercial solar kondotty, industrial solar kerala"
    },
    about: {
        title: "About Naha Solar | Leading Solar Company in Kerala Since [Year]",
        description: "Naha Solar - Your trusted solar energy partner in Kerala. Serving Malappuram, Kondotty & surrounding areas with premium solar solutions. Learn about our mission, values, and commitment to sustainable energy.",
        keywords: "solar company kerala, trusted solar sellers malappuram, professional solar kondotty"
    },
    contact: {
        title: "Contact Naha Solar | Get Free Solar Quote Kerala, Malappuram, Kondotty",
        description: "Contact the best solar company in Kerala for free consultation. Serving Malappuram, Kondotty and all districts. Call now for expert solar panel installation guidance and competitive pricing.",
        keywords: "solar quote kerala, contact solar company malappuram, solar consultation kondotty"
    },
    projects: {
        title: "Solar Projects Gallery Kerala | Completed Installations Malappuram & Kondotty",
        description: "View our successful solar installations across Kerala. Residential, commercial & industrial projects in Malappuram, Kondotty & beyond. Best solar company with proven track record.",
        keywords: "solar projects kerala, solar installations malappuram, solar portfolio kondotty"
    },
    blog: {
        title: "Solar Energy Blog Kerala | Tips, News & Updates from Best Solar Company",
        description: "Latest solar energy news, tips & insights from Kerala's leading solar company. Learn about solar technology, government policies, subsidies & more from Naha Solar experts.",
        keywords: "solar blog kerala, solar news malappuram, solar energy tips kondotty"
    },
    careers: {
        title: "Careers at Naha Solar | Join Kerala's Best Solar Company",
        description: "Join the leading solar company in Kerala. Explore career opportunities at Naha Solar. We're hiring in Malappuram, Kondotty & across Kerala.",
        keywords: "solar jobs kerala, careers malappuram, solar company jobs kondotty"
    }
};

// FAQ Schema for AEO (Answer Engine Optimization)
export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Which is the best solar company in Kerala?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Naha Solar Energy Solutions is one of the leading solar companies in Kerala, serving Malappuram, Kondotty, and surrounding areas with high-quality solar panel installations, excellent customer service, and competitive pricing."
            }
        },
        {
            "@type": "Question",
            "name": "How much does solar panel installation cost in Kerala?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Solar panel installation costs in Kerala typically range from ₹50,000 to ₹3,00,000 depending on system size, panel quality, and installation complexity. Contact Naha Solar for a customized quote with government subsidy information."
            }
        },
        {
            "@type": "Question",
            "name": "Is there government subsidy for solar panels in Kerala?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, the Government of India offers subsidies up to 40% for residential solar installations under the PM Surya Ghar Yojana. Naha Solar provides complete assistance with subsidy applications in Kerala."
            }
        },
        {
            "@type": "Question",
            "name": "Which areas does Naha Solar serve in Kerala?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Naha Solar serves Malappuram, Kondotty, Kozhikode, Palakkad, Thrissur, Tirur, Perinthalmanna, and all districts across Kerala with professional solar installation services."
            }
        },
        {
            "@type": "Question",
            "name": "What is the warranty on solar panels in Kerala?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Naha Solar offers comprehensive warranties: 25 years on solar panels, 5-10 years on inverters, and 1-year installation warranty. We provide ongoing maintenance support across Kerala."
            }
        }
    ]
};

export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://nahasolar.com",
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
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        }
    ],
    "sameAs": [
        "https://www.facebook.com/nahasolar",
        "https://www.instagram.com/nahasolar",
        "https://www.linkedin.com/company/nahasolar"
    ]
};
