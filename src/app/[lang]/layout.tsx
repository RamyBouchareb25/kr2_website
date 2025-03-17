import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { i18n, Locale } from "@/i18n-config";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.k2print.com"),
  title: {
    default: "K2 Printing Services - Professional On-Demand Printing Solutions",
    template: "%s | K2 Printing Services",
  },
  description:
    "Professional printing services including roll-ups, stickers, t-shirts, and more. Quality on-demand printing for all your needs in Algeria.",
  keywords: [
    "printing",
    "roll-ups",
    "stickers",
    "t-shirts",
    "banners",
    "Algeria",
    "custom printing",
  ],
  authors: [{ name: "K2 Printing Team" }],
  creator: "K2 Printing",
  publisher: "K2 Printing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.k2print.com",
    siteName: "K2 Printing Services",
    title: "K2 Printing Services - Professional On-Demand Printing Solutions",
    description:
      "Quality printing solutions for all your needs. From roll-ups to custom t-shirts, we bring your ideas to life.",
    images: [
      {
        url: "https://www.k2print.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "K2 Printing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "K2 Printing Services - Professional On-Demand Printing Solutions",
    description:
      "Quality printing solutions for all your needs. From roll-ups to custom t-shirts, we bring your ideas to life.",
    images: ["https://www.k2print.com/twitter-image.jpg"],
    creator: "@k2printing",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.k2print.com",
    languages: {
      "en-US": "https://www.k2print.com/en",
      "fr-FR": "https://www.k2print.com/fr",
      "ar-DZ": "https://www.k2print.com/ar",
    },
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html
      lang={params.lang}
      dir={params.lang === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <SiteHeader lang={params.lang} />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
              {children}
              <GoogleAnalytics gaId="G-03Q37DDLVE" />

            </main>
          </div>
          <div className="flex flex-col">
            <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col">
                <Footer lang={params.lang} />
              </div>
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "K2 Printing Services",
              image: "https://www.k2print.com/logo.jpg",
              "@id": "https://www.k2print.com",
              url: "https://www.k2print.com",
              telephone: "+213783111071",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Birkhadem, les vergers",
                addressLocality: "Alger",
                postalCode: "16000",
                addressCountry: "DZ",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.7214,
                longitude: 3.0433,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: [
                "https://www.facebook.com/k2printing",
                "https://www.instagram.com/k2printing",
                "https://twitter.com/k2printing",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
