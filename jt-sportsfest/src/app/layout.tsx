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
    "Join JT SportsFest XIII at Lahore Grammar School Johar Town Senior Boys Campus, from September 25–27 and October 2–4, 2026, featuring 20+ sports for boys and girls.",

  alternates: {
    canonical: "/",
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