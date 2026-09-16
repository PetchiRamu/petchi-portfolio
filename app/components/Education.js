"use client";

import { useEffect, useRef, useState } from "react";

export default function Education() {
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
      id="education"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#EEE9E1] px-6 py-28 md:px-10 md:py-36 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717] text-xs font-semibold text-white">
              06
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#999287]">
              Education
            </span>
          </div>

          <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-[#171717] sm:text-6xl md:text-7xl lg:text-[82px]">
            The foundation
            <br />
            behind my
            <span className="text-[#7C3AED]"> journey.</span>
          </h2>
        </div>

        {/* Main Education Area */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT - BIG YEAR / SCORE */}
          <div
            className={`relative min-h-[500px] overflow-hidden rounded-[2.5rem] bg-[#171717] p-8 text-white shadow-2xl transition-all delay-150 duration-1000 sm:p-10 ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Decorative circles */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />

            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />

            <div className="relative flex h-full flex-col justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                  Academic Journey
                </p>

                <p className="mt-6 text-sm text-white/50">
                  2020
                </p>

                <div className="mt-1 h-px w-20 bg-white/20" />
              </div>

              {/* Big 70 */}
              <div className="relative my-10">
                <span className="block text-[150px] font-black leading-none tracking-[-0.1em] text-white sm:text-[180px]">
                  70
                  <sup className="ml-1 text-5xl tracking-normal">%</sup>
                </span>

                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/40">
                  Academic Score
                </p>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Completed
                  </p>

                  <p className="mt-2 text-2xl font-semibold">
                    2023
                  </p>
                </div>

                {/* Graduation Icon */}
                <div className="flex h-16 w-16 rotate-6 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl backdrop-blur-sm transition-transform duration-500 hover:rotate-0 hover:scale-110">
                  🎓
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - DEGREE CARD */}
          <div
            className={`relative transition-all delay-300 duration-1000 ${
              visible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="group relative h-full min-h-[500px] overflow-hidden rounded-[2.5rem] border border-[#DED8CD] bg-white p-8 shadow-xl shadow-black/5 transition-all duration-500 hover:-translate-y-2 sm:p-12">

              {/* Top number */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#AAA398]">
                  Degree
                </span>

                <span className="rounded-full border border-[#E5DFD5] bg-[#F8F5EF] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#777269]">
                  2020 — 2023
                </span>
              </div>

              {/* Degree */}
              <div className="mt-20">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7C3AED]">
                  Bachelor&apos;s Degree
                </p>

                <h3 className="mt-5 text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-[#171717] sm:text-6xl md:text-7xl">
                  B.A.
                  <br />
                  <span className="text-[#B7B0A5]">Tamil</span>
                </h3>
              </div>

              {/* Divider */}
              <div className="my-10 h-px w-full bg-[#E9E4DA]" />

              {/* College */}
              <div className="grid gap-8 sm:grid-cols-2">

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#AAA398]">
                    Institution
                  </p>

                  <p className="mt-3 text-lg font-semibold leading-7 text-[#292724]">
                    Sadakathullah Appa College
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#AAA398]">
                    Location
                  </p>

                  <p className="mt-3 text-lg font-semibold text-[#292724]">
                    Tirunelveli
                  </p>
                </div>

              </div>

              {/* Bottom Badge */}
              <div className="mt-12 flex items-center justify-between rounded-2xl bg-[#F7F4EE] p-5">

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#AAA398]">
                    Status
                  </p>

                  <p className="mt-1 font-semibold text-[#292724]">
                    Degree Completed
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#171717] text-lg text-white transition-transform duration-500 group-hover:rotate-12">
                  ✓
                </div>

              </div>

              {/* Decorative Big 06 */}
              <span className="pointer-events-none absolute -bottom-12 -right-5 select-none text-[180px] font-black leading-none tracking-[-0.12em] text-[#171717]/[0.025] transition-transform duration-700 group-hover:-translate-y-4">
                06
              </span>

            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div
          className={`mt-12 flex flex-col gap-5 border-t border-[#D8D1C5] pt-8 transition-all delay-500 duration-1000 sm:flex-row sm:items-center sm:justify-between ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="max-w-lg text-sm leading-7 text-[#777269]">
            Every project I build today is backed by the foundation,
            discipline and learning from my academic journey.
          </p>

          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-[#BDB6AA]" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#999287]">
              2020 — 2023
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}