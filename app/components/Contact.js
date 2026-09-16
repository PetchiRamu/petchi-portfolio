"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#171717] px-6 py-28 text-white md:px-10 md:py-36 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-400/10 blur-[140px]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">

        {/* Header */}
        <div
          className={`transition-all duration-1000 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-7 flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs font-semibold">
              07
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
              Contact
            </span>
          </div>

          <h2 className="max-w-5xl text-5xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[90px]">
            Have an idea?
            <br />
            <span className="text-white/35">Let&apos;s make it</span>
            <br />
            <span className="text-purple-400">real.</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">

          {/* LEFT */}
          <div
            className={`transition-all delay-200 duration-1000 ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <p className="max-w-xl text-base leading-8 text-white/50 sm:text-lg">
              Whether it&apos;s a website, a business application,
              or a new digital idea — I&apos;m always open to
              meaningful conversations and exciting opportunities.
            </p>

            {/* Email */}
            <a
              href="mailto:petchirpetchi@gmail.com"
              className="group mt-12 flex max-w-xl items-center gap-5 border-b border-white/10 pb-6 transition-all duration-300 hover:border-purple-400"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-xl transition-all duration-300 group-hover:rotate-6 group-hover:bg-purple-500">
                @
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                  Email me
                </p>

                <p className="mt-1 truncate text-base font-medium text-white/80 sm:text-xl">
                  petchirpetchi@gmail.com
                </p>
              </div>

              <span className="ml-auto text-xl text-white/20 transition-all duration-300 group-hover:translate-x-2 group-hover:text-purple-400">
                ↗
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:6369815457"
              className="group flex max-w-xl items-center gap-5 border-b border-white/10 py-6 transition-all duration-300 hover:border-purple-400"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-xl transition-all duration-300 group-hover:-rotate-6 group-hover:bg-purple-500">
                ☎
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                  Call me
                </p>

                <p className="mt-1 text-base font-medium text-white/80 sm:text-xl">
                  +91 6369815457
                </p>
              </div>

              <span className="ml-auto text-xl text-white/20 transition-all duration-300 group-hover:translate-x-2 group-hover:text-purple-400">
                ↗
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex max-w-xl items-center gap-5 border-b border-white/10 py-6 transition-all duration-300 hover:border-purple-400"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sm font-bold transition-all duration-300 group-hover:rotate-6 group-hover:bg-purple-500">
                in
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                  LinkedIn
                </p>

                <p className="mt-1 text-base font-medium text-white/80 sm:text-xl">
                  Let&apos;s connect
                </p>
              </div>

              <span className="ml-auto text-xl text-white/20 transition-all duration-300 group-hover:translate-x-2 group-hover:text-purple-400">
                ↗
              </span>
            </a>
          </div>

          {/* RIGHT VISUAL */}
          <div
            className={`relative flex min-h-[430px] items-center justify-center transition-all delay-400 duration-1000 ${
              visible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* Outer circle */}
            <div
              className="absolute h-[330px] w-[330px] rounded-full border border-white/10 sm:h-[400px] sm:w-[400px]"
              style={{ animation: "contactSpin 20s linear infinite" }}
            />

            {/* Inner circle */}
            <div
              className="absolute h-[250px] w-[250px] rounded-full border border-dashed border-purple-400/30 sm:h-[310px] sm:w-[310px]"
              style={{
                animation: "contactSpinReverse 14s linear infinite",
              }}
            />

            {/* Glow */}
            <div className="absolute h-48 w-48 rounded-full bg-purple-600/30 blur-3xl" />

            {/* Main Circle */}
            <div className="group relative flex h-52 w-52 cursor-pointer items-center justify-center rounded-full bg-white text-center text-[#171717] shadow-2xl shadow-purple-900/20 transition-all duration-700 hover:scale-110 sm:h-64 sm:w-64">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
                  Start a
                </p>

                <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Conversation
                </p>

                <span className="mt-4 inline-flex text-2xl transition-transform duration-500 group-hover:translate-x-2">
                  ↗
                </span>
              </div>
            </div>

            {/* Floating labels */}
            <div className="absolute left-2 top-12 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 backdrop-blur-md sm:left-0">
              Creative
            </div>

            <div className="absolute bottom-12 right-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 backdrop-blur-md sm:right-0">
              Digital
            </div>

            <div className="absolute right-4 top-16 h-2 w-2 rounded-full bg-purple-400 sm:right-8" />
            <div className="absolute bottom-20 left-8 h-2 w-2 rounded-full bg-orange-300 sm:left-12" />
          </div>
        </div>

        {/* Availability */}
        <div
          className={`mt-16 flex flex-col gap-5 border-t border-white/10 pt-8 transition-all delay-500 duration-1000 sm:flex-row sm:items-center sm:justify-between ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
            </span>

            <span className="text-sm text-white/50">
              Open to new opportunities
            </span>
          </div>

          <p className="text-xs uppercase tracking-[0.2em] text-white/25">
            Petchi R — Frontend Developer
          </p>
        </div>

      </div>

      <style jsx>{`
        @keyframes contactSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes contactSpinReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
}