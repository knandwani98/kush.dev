import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

//
import { ThemeProvider } from "@/lib/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kushal Nandwani",
  description: "Kushal's portfolio",
};

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(bricolage.className, "font-light")}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main className="my-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
