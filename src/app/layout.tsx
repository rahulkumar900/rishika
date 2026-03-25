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
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans scroll-smooth", geist.variable)}>
      <body className="antialiased min-h-screen bg-background text-foreground flex flex-col">
        {children}
      </body>
    </html>
  );
}
