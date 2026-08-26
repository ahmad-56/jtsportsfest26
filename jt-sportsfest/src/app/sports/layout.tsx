import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports & Categories",
  description:
    "Browse JT SportsFest XIII sports, age groups, team sizes, dates, formats and event rules.",
};

export default function SportsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
