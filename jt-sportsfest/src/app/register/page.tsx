"use client";

import { useEffect } from "react";

export default function RegisterPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#081324] py-20 px-6">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-[#36E6A5] uppercase tracking-[0.3em] font-semibold">
            LGS Johar Town Presents
          </p>

          <h1 className="mt-4 text-5xl font-extrabold text-white">
            JT SPORTSFEST '26
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Complete the registration form below to register for
            JT SportsFest Edition XIII.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-3xl bg-white shadow-2xl overflow-hidden p-4">

          <div
            style={{ width: "100%", height: "900px" }}
            data-fillout-id="9ZptKUui9uus"
            data-fillout-embed-type="standard"
            data-fillout-inherit-parameters
            data-fillout-dynamic-resize
          ></div>

        </div>
      </div>
    </main>
  );
}