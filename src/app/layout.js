import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import { profile, siteMeta } from "@data/content";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteMeta.siteUrl),
  title: siteMeta.title,
  description: siteMeta.description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.siteUrl,
    siteName: profile.name,
    images: [
      {
        url: siteMeta.ogImage,
        width: 1200,
        height: 630,
        alt: `${profile.name} - Portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: [siteMeta.ogImage],
  },
};

export default function RootLayout({ children }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.intro,
    url: siteMeta.siteUrl,
    image: `${siteMeta.siteUrl}${profile.photoPath}`,
    sameAs: [
      profile.github,
      profile.linkedin,
    ].filter((link) => !link.includes("[")),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Visakhapatnam",
      addressRegion: "Andhra Pradesh",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Anil Neerukonda Institute of Technology & Sciences (ANITS)",
    },
  };

  return (
    <html lang="en" className={`${bricolageGrotesque.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-body bg-cream text-ink min-h-screen antialiased selection:bg-sunny selection:text-ink">
        {children}
      </body>
    </html>
  );
}
