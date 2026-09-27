import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nexa = localFont({
  src: [
    {
      path: "./fonts/NexaRegular.otf",
      weight: "400",
    },
    {
      path: "./fonts/Nexa Bold.otf",
      weight: "700",
    },
    {
      path: "./fonts/NexaXBold.otf",
      weight: "800",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lgsjtsportsfest.com"),

  title: "JT SportsFest XIII | LGS Johar Town",

  description:
    "13th Edition of JT Sportsfest, Hosted by the Sports Council. | 25 • 26 • 27 September 2026 | 2 • 3 • 4 October 2026",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    siteName: "JT SportsFest XIII",
    images: [
      {
        url: "/images/imgforlink.png",
        width: 447,
        height: 467,
        alt: "JT SportsFest XIII",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/images/imgforlink.png",
        alt: "JT SportsFest XIII",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nexa.className}>{children}</body>
    </html>
  );
}
