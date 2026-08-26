import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description:
    "Read the participant conduct and safety expectations for JT SportsFest XIII.",
};

export default function RulesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
