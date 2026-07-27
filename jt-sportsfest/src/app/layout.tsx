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
  title: "JT SportsFest '26",
  description: "JT SportsFest Edition XIII",
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