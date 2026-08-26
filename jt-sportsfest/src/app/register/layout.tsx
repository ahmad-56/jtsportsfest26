import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description:
    "Register your delegation for JT SportsFest XIII at LGS Johar Town.",
};

export default function RegisterLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
