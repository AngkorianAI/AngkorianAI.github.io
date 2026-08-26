import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.startsWith("localhost") || host.startsWith("127.0.0.1")
    ? "http"
    : "https";
  const metadataBase = new URL(`${protocol}://${host}`);
  const title = "Angkorian–AI | Khmer Heritage Intelligence";
  const description =
    "Deep learning and computer vision research for Khmer stone inscription analysis and visual heritage condition assessment.";

  return {
    metadataBase,
    title,
    description,
    applicationName: "Angkorian–AI",
    authors: [{ name: "Angkorian–AI Research Team" }],
    keywords: [
      "Khmer stone inscriptions",
      "cultural heritage AI",
      "computer vision",
      "document analysis",
      "Angkor",
      "Angkorian-KSI",
      "Angkorian-HeritageObj",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1792,
          height: 927,
          alt: "Angkorian–AI — Reading stone. Preserving knowledge.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
