import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif, Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/lib/ThemeProvider";
import { EdgeFade } from "@/components/EdgeFade";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-bricolage",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-roboto-mono",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kushalnandwani.vercel.app"),

  title: {
    default: "Kushal Nandwani | Full-Stack Developer",
    template: "%s | Kushal Nandwani",
  },

  description:
    "Full-Stack Developer specialising in React, React Native, Next.js, and Node.js. Building fast, scalable web and mobile apps. Open to new opportunities.",

  keywords: [
    "Kushal Nandwani",
    "Full-Stack Developer",
    "React Developer",
    "React Native Developer",
    "Next.js",
    "Node.js",
    "Mobile App Developer",
    "Web Developer India",
    "Software Engineer",
  ],

  authors: [{ name: "Kushal Nandwani", url: "https://kushalnandwani.vercel.app" }],

  creator: "Kushal Nandwani",

  openGraph: {
    type: "website",
    url: "https://kushalnandwani.vercel.app",
    title: "Kushal Nandwani | Full-Stack Developer",
    description:
      "Full-Stack Developer specialising in React, React Native, Next.js, and Node.js. Building fast, scalable web and mobile apps.",
    siteName: "Kushal Nandwani",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kushal Nandwani — Full-Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kushal Nandwani | Full-Stack Developer",
    description:
      "Full-Stack Developer specialising in React, React Native, Next.js, and Node.js. Building fast, scalable web and mobile apps.",
    images: ["/og-image.png"],
    creator: "@knandwani98",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: "https://kushalnandwani.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(instrumentSerif.variable, bricolage.variable, robotoMono.variable, "font-light font-bricolage bg-[#]")}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kushal Nandwani",
              url: "https://kushalnandwani.vercel.app",
              jobTitle: "Full-Stack Developer",
              knowsAbout: [
                "React",
                "React Native",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Mobile Development",
              ],
              sameAs: [
                "https://github.com/knandwani98",
                "https://www.linkedin.com/in/kushal-nandwani-303003153/",
                "https://x.com/knandwani98",
                "https://kushalnandwani.vercel.app",
                "https://drive.google.com/file/d/1P-EOcJPzk4zzlm4Jmk7AsAKawy4KzDLu/view?usp=sharing",
                "mailto:knandwani27@gmail.com",
              ],
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={200}>
            <EdgeFade position="top" />
            <main className="min-h-screen">{children}</main>
            <EdgeFade position="bottom" />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
