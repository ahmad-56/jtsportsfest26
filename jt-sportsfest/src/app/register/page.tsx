"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RegisterPage() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Header />

      <main className="h-[100dvh] w-full overflow-hidden bg-[#07201d] pt-24">
        <div
          className="h-full w-full"
          data-fillout-id="9ZptKUui9uus"
          data-fillout-embed-type="fullscreen"
          data-fillout-inherit-parameters
          style={{ width: "100%", height: "100%" }}
        />
      </main>

      <Footer />
    </>
  );
}
