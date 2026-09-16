"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#F3EFE7] px-5 pt-28 sm:px-8 md:px-12 md:pt-32 lg:px-16"
    >
      {/* ==================================================
          BACKGROUND DECORATIONS
      ================================================== */}

      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-orange-200/25 blur-3xl" />

      <div className="pointer-events-none absolute right-[30%] top-[20%] h-40 w-40 rounded-full bg-white/60 blur-3xl" />

      {/* ==================================================
          MAIN CONTAINER
      ================================================== */}

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center">

        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

          {/* ==================================================
              LEFT CONTENT
          ================================================== */}

          <div
            className={`relative z-10 transition-all duration-1000 ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >

            {/* Available Badge */}

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#D8D1C5] bg-white/60 px-4 py-2.5 backdrop-blur-sm">

              <span className="relative flex h-2.5 w-2.5">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-500 opacity-60" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-purple-600" />

              </span>

              <span className="text-xs font-semibold text-[#6F6A61] sm:text-sm">
                Available for opportunities
              </span>

            </div>

            {/* Main Heading */}

            <h1 className="max-w-4xl text-5xl font-bold leading-[0.92] tracking-[-0.06em] text-[#171717] sm:text-6xl md:text-7xl lg:text-[86px]">

              Hi, I&apos;m

              <br />

              <span className="text-[#7C3AED]">
                Petchi R.
              </span>

            </h1>

            {/* Role */}

            <div className="mt-7 flex items-center gap-4">

              <span className="h-px w-10 bg-[#171717]" />

              <h2 className="text-xl font-semibold text-[#4F4B45] sm:text-2xl md:text-3xl">
                Frontend Developer
              </h2>

            </div>

            {/* Description */}

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#777269] sm:text-lg">
              I create modern, responsive and user-friendly web experiences
              using React.js, Next.js and modern frontend technologies.
            </p>

            {/* ==================================================
                BUTTONS
            ================================================== */}

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">

              {/* View My Work */}

              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#171717] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#7C3AED] hover:shadow-xl hover:shadow-purple-900/20"
              >
                View My Work

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              {/* Download Resume */}

              <a
                href="/Petchi Resume (1).pdf"
                download
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#D4CEC2] bg-white/70 px-7 py-4 text-sm font-semibold text-[#4F4B45] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#7C3AED] hover:bg-[#7C3AED] hover:text-white hover:shadow-xl hover:shadow-purple-900/10"
              >
                Download Resume

                <span className="transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </a>

              {/* Let's Connect */}

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full px-5 py-4 text-sm font-semibold text-[#6F6A61] transition-all duration-300 hover:text-[#7C3AED]"
              >
                Let&apos;s Connect →
              </a>

            </div>

            {/* ==================================================
                TECH STACK
            ================================================== */}

            <div className="mt-12">

              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#999287]">
                Working with
              </p>

              <div className="flex flex-wrap gap-2">

                {[
                  "React.js",
                  "Next.js",
                  "JavaScript",
                  "Tailwind CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#DDD7CB] bg-white/60 px-4 py-2 text-xs font-medium text-[#777269] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:bg-white hover:text-[#7C3AED]"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

          </div>

          {/* ==================================================
              RIGHT SIDE - PROFILE PHOTO
          ================================================== */}

          <div
            className={`relative flex items-center justify-center transition-all delay-200 duration-1000 ${
              loaded
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >

            {/* Big Background Circle */}

            <div className="absolute h-[320px] w-[320px] rounded-full bg-[#DDD3F4] blur-[2px] sm:h-[400px] sm:w-[400px] lg:h-[470px] lg:w-[470px]" />

            {/* Rotating Ring */}

            <div
              className="absolute h-[350px] w-[350px] rounded-full border border-dashed border-purple-300/60 sm:h-[430px] sm:w-[430px] lg:h-[500px] lg:w-[500px]"
              style={{
                animation: "spin 25s linear infinite",
              }}
            />

            {/* Second Ring */}

            <div
              className="absolute h-[310px] w-[310px] rounded-full border border-purple-200/40 sm:h-[390px] sm:w-[390px] lg:h-[450px] lg:w-[450px]"
              style={{
                animation: "spinReverse 18s linear infinite",
              }}
            />

            {/* ==================================================
                PHOTO
            ================================================== */}

            <div className="group relative z-10">

              {/* Photo Frame */}

              <div className="relative h-[390px] w-[290px] overflow-hidden rounded-[2.5rem] border-[10px] border-white bg-[#D8D0C4] shadow-2xl shadow-black/15 transition-transform duration-700 group-hover:-translate-y-2 sm:h-[480px] sm:w-[350px] lg:h-[540px] lg:w-[400px]">

                {/* Image */}

                <img
                  src="/profile.jpeg"
                  alt="Petchi R"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              </div>

              {/* ==================================================
                  ROLE BADGE
              ================================================== */}

              <div className="absolute -left-6 bottom-8 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-2 sm:-left-10">

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#999287]">
                  Role
                </p>

                <p className="mt-1 text-sm font-bold text-[#171717]">
                  Frontend Developer
                </p>

              </div>

              {/* ==================================================
                  EXPERIENCE BADGE
              ================================================== */}

              <div className="absolute -right-5 top-10 rounded-2xl border border-white/70 bg-[#171717] px-5 py-4 shadow-xl transition-transform duration-500 group-hover:translate-y-2 sm:-right-8">

                <p className="text-3xl font-bold leading-none text-white">
                  1+
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/40">
                  Year Experience
                </p>

              </div>

              {/* ==================================================
                  AVAILABLE DOT
              ================================================== */}

              <div className="absolute -right-5 bottom-12 hidden items-center gap-2 rounded-full border border-white/70 bg-white/90 px-4 py-2.5 shadow-lg backdrop-blur-xl sm:flex">

                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

                <span className="text-[10px] font-semibold text-[#6F6A61]">
                  Available
                </span>

              </div>

            </div>

            {/* Decorative Number */}

            <div className="pointer-events-none absolute -bottom-5 -right-2 hidden select-none lg:block">

              <span className="text-[150px] font-black leading-none tracking-[-0.1em] text-[#171717]/[0.04]">
                01
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* ==================================================
          SCROLL INDICATOR
      ================================================== */}

      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#918B80] transition-colors hover:text-[#7C3AED] md:flex"
      >

        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
          Scroll
        </span>

        <span className="h-8 w-px animate-pulse bg-[#BDB6AA]" />

      </a>

      {/* ==================================================
          ANIMATIONS
      ================================================== */}

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinReverse {
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