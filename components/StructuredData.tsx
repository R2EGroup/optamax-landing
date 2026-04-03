import {
  siteUrl,
  siteName,
  siteDescription,
  siteAddress,
  siteContact,
  siteSocial,
} from "@/lib/site";

/**
 * Server component — no "use client" — so it renders at build time and
 * is included verbatim in the HTML document for search engine crawlers.
 */
export default function StructuredData() {
  const orgId = `${siteUrl}/#organization`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/optamax-logo.png`,
        description:
          "Optamax is a global energy advisory firm founded in 2005. Advisors average 25+ years of experience in oil & gas operations, strategy, consulting, and executive management.",
        foundingDate: "2005",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteAddress.street,
          addressLocality: siteAddress.city,
          addressRegion: siteAddress.region,
          postalCode: siteAddress.postalCode,
          addressCountry: siteAddress.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteAddress.latitude,
          longitude: siteAddress.longitude,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteContact.telephone,
          email: siteContact.email,
          contactType: "sales",
        },
        areaServed: [
          { "@type": "Place", name: "Worldwide" },
          { "@type": "AdministrativeArea", name: "United States" },
        ],
        sameAs: [siteSocial.linkedin],
      },
      {
        "@type": "SoftwareApplication",
        name: siteName,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "AI-powered decision intelligence platform for downstream refinery operations. Converts 20+ years of elite energy advisory expertise into on-demand operational intelligence.",
        url: siteUrl,
        provider: { "@id": orgId },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Contact for enterprise pricing",
        },
      },
      {
        "@type": "WebSite",
        url: siteUrl,
        name: siteName,
        publisher: { "@id": orgId },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Optamax?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Optamax is the Refinery Operating System — an AI-powered decision intelligence platform that converts 20+ years of elite refinery advisory expertise into on-demand operational intelligence for downstream operations.",
            },
          },
          {
            "@type": "Question",
            name: "How does Optamax improve refinery operations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Optamax ingests unstructured refinery data, maps it to proven decision frameworks developed over decades, executes decisions with human-in-the-loop control, and continuously learns from live production outcomes.",
            },
          },
          {
            "@type": "Question",
            name: "What results has Optamax delivered?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Optamax has delivered billions in operational margin lift across clients, including $500M+/yr in manufacturing transformation, $300M+/yr in value chain transformation, and $200M+ in inventory optimization.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
