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

      <main className="min-h-screen bg-[#081324] px-6 pb-20 pt-36">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-[#36E6A5]">
              LGS Johar Town Presents
            </p>

            <h1 className="mt-4 text-5xl font-extrabold text-white">
              JT SPORTSFEST &apos;26
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              Complete the registration form below to register
              for JT SportsFest Edition XIII.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-2xl">
            <div
              style={{
                width: "100%",
                minHeight: "900px",
              }}
              data-fillout-id="9ZptKUui9uus"
              data-fillout-embed-type="standard"
              data-fillout-inherit-parameters
              data-fillout-dynamic-resize
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}