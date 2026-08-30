import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://diginorth.org"),
  title: "DigiNorth | Northern Nigeria Innovation Ecosystem",
  description:
    "Connecting Northern Nigeria to the global tech frontier. A regional technology collective pioneering decentralized innovation, software craftsmanship, and venture building anchored in Kaduna.",
  keywords: [
    "DigiNorth",
    "Northern Nigeria Tech",
    "Kaduna Tech Hub",
    "DigiNorth Hackathon",
    "Digi02",
    "Nethawk Solutions",
    "African Tech Ecosystem",
    "Software Engineering",
    "AI",
  ],
  openGraph: {
    title: "DigiNorth | Northern Nigeria Innovation Ecosystem",
    description:
      "Connecting Northern Nigeria to the global tech frontier. Decentralized innovation, talent progression, and venture building anchored in Kaduna.",
    images: [
      {
        url: "/images/diginorth-poster.jpg",
        width: 1200,
        height: 630,
        alt: "DigiNorth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiNorth | Northern Nigeria Innovation Ecosystem",
    description:
      "Connecting Northern Nigeria to the global tech frontier. Discover, Learn, Build, and Launch in Kaduna.",
    images: ["/images/diginorth-poster.jpg"],
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#000000] text-white antialiased selection:bg-[#8abdff] selection:text-black font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
