import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Rishika Cleaner Service | Premium Construction & Maintenance",
  description: "Rishika Cleaner Service provides high-quality construction services, PHED maintenance, and water facility redevelopment across Bihar and Jharkhand since 2019.",
  keywords: ["Construction", "Maintenance", "PHED", "Water Filters", "Bihar", "Jharkhand", "Rishika Cleaner Service", "RCC Overhead Tanks"],
  openGraph: {
    title: "Rishika Cleaner Service",
    description: "Quality Construction & Maintenance Services in Bihar and Jharkhand.",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Rishika Cleaner Service Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishika Cleaner Service",
    description: "Quality Construction & Maintenance Services in Bihar and Jharkhand.",
    images: ["/logo.png"],
  }
};

import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans scroll-smooth", geist.variable)}>
      <body className="antialiased min-h-screen bg-background text-foreground flex flex-col md:cursor-none">
        <CustomCursor />
        <Preloader />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
