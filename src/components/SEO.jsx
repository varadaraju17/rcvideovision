import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, image }) => {
    const { pathname } = useLocation();
    const siteUrl = 'https://www.rcvideovision.in';
    const canonicalUrl = `${siteUrl}${pathname === '/' ? '' : pathname}`;

    const defaultTitle = 'RC Video Vision — World-Class Corporate Event Production & AV Solutions';
    const defaultDescription = 'RC Video Vision represents the pinnacle of corporate event production. We deliver global-standard audiovisual experiences, from immersive LED stages to cinematic live streaming for the world\'s leading brands.';
    const defaultImage = `${siteUrl}/assets/images/hero-poster.png`;
    const defaultKeywords = 'RC Video Vision, Corporate Event Production, AV Services, Live Streaming, LED Walls, Event Technology, Bangalore';

    const metaTitle = title ? `${title} | RC Video Vision` : defaultTitle;
    const metaDescription = description || defaultDescription;
    const metaImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://rcvideovision.in/#organization",
                "name": "RC Video Vision",
                "url": "https://www.rcvideovision.in/",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.rcvideovision.in/assets/images/logo.png",
                    "width": 500,
                    "height": 500
                },
                "sameAs": [
                    "https://www.instagram.com/rc_video_vision",
                    "https://wa.me/919902264513"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-9902264513",
                    "contactType": "customer service",
                    "areaServed": "IN",
                    "availableLanguage": "en"
                },
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Bangalore",
                    "addressRegion": "Karnataka",
                    "addressCountry": "IN"
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://rcvideovision.in/#website",
                "url": "https://www.rcvideovision.in/",
                "name": "RC Video Vision",
                "description": "Premium Corporate Event Production & AV Services",
                "publisher": {
                    "@id": "https://rcvideovision.in/#organization"
                }
            },
            {
                "@type": "LocalBusiness",
                "@id": "https://rcvideovision.in/#localbusiness",
                "name": "RC Video Vision",
                "image": "https://www.rcvideovision.in/assets/images/hero-poster.png",
                "url": "https://www.rcvideovision.in/",
                "telephone": "+919902264513",
                "priceRange": "$$",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Bangalore",
                    "addressRegion": "Karnataka",
                    "addressCountry": "IN"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 12.9716,
                    "longitude": 77.5946
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "09:00",
                    "closes": "18:00"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Event Production Services",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LED Video Wall Rental", "description": "High-resolution indoor and outdoor LED screens for corporate events." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Live Streaming Services", "description": "Professional multi-camera live streaming for global summits and town halls." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "3D Projection Mapping", "description": "Immersive visual storytelling using advanced projection technology." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Audio Visual", "description": "Complete AV solutions including sound systems, lighting, and stage design." } }
                    ]
                }
            }
        ]
    };

    return (
        <Helmet>
            {/* Basic Metadata */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <link rel="canonical" href={canonicalUrl} />
            <meta name="robots" content="index, follow" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />

            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

export default SEO;
