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

      <main className="min-h-screen overflow-x-hidden bg-[#0a211a] px-3 pb-12 pt-28 sm:px-5 sm:pb-16 sm:pt-32 md:px-6 md:pb-20 md:pt-36">
        <div className="mx-auto w-full max-w-5xl">
          {/* Page heading */}
          <div className="mb-7 text-center sm:mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a9c4b4] sm:text-sm sm:tracking-[0.3em]">
              LGS Johar Town Presents
            </p>

            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:mt-4 sm:text-4xl md:text-5xl">
              JT SPORTSFEST &apos;26
            </h1>

            <p className="mx-auto mt-4 max-w-2xl px-2 text-sm leading-6 text-gray-300 sm:mt-6 sm:px-0 sm:text-base md:text-lg">
              Complete the registration form below to register
              for JT SportsFest Edition XIII.
            </p>
          </div>

          <div className="w-full overflow-hidden rounded-2xl bg-white shadow-2xl sm:rounded-3xl">
            <div
              className="w-full"
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
