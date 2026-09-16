"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
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
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-white px-6 py-28 md:px-10 lg:px-16"
    >
      {/* Background Text */}
      <div className="pointer-events-none absolute -right-10 top-20 select-none">
        <span className="text-[120px] font-black tracking-tighter text-slate-100 sm:text-[180px] md:text-[240px]">
          ABOUT
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl">

        {/* Section Label */}
        <div
          className={`mb-16 flex items-center gap-4 transition-all duration-700 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm text-white">
            02
          </span>

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            About Me
          </span>
        </div>

        {/* Main Grid */}
        <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr]">

          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              I love turning
              <span className="text-slate-400"> ideas </span>
              into meaningful
              <span className="relative inline-block">
                {" "}
                digital experiences.
              </span>
            </h2>

            <div className="mt-10 max-w-2xl space-y-6 text-base leading-8 text-slate-500 sm:text-lg">
              <p>
                I&apos;m Petchi R, a Frontend Developer focused on building
                modern, responsive and user-friendly web experiences.
              </p>

              <p>
                I work primarily with React.js and Next.js, transforming
                designs and ideas into clean, functional interfaces. I enjoy
                creating reusable components, working with APIs and solving
                real-world frontend challenges.
              </p>

              <p>
                My goal is simple — build interfaces that not only look good,
                but also feel smooth and intuitive to use.
              </p>
            </div>

            {/* Tech Pills */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "React.js",
                "Next.js",
                "JavaScript",
                "Tailwind CSS",
                "REST API",
              ].map((tech, index) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                  style={{
                    transitionDelay: `${index * 70}ms`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Highlight */}
          <div
            className={`flex items-center transition-all delay-200 duration-1000 ${
              visible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="relative w-full">

              {/* Main Card */}
              <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl transition-transform duration-500 hover:-translate-y-2 sm:p-10">

                {/* Decorative Circle */}
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />

                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/10" />

                <div className="relative">

                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    Experience
                  </p>

                  <div className="mt-5 flex items-end gap-2">
                    <span className="text-7xl font-bold tracking-tight">
                      1+
                    </span>

                    <span className="mb-2 text-slate-400">
                      year
                    </span>
                  </div>

                  <p className="mt-5 max-w-xs leading-7 text-slate-400">
                    Hands-on experience building responsive websites and
                    business applications.
                  </p>

                  <div className="my-8 h-px bg-white/10" />

                  <div className="space-y-5">

                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-500">
                        Currently
                      </p>

                      <p className="mt-1 font-medium">
                        Frontend Developer
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-500">
                        Company
                      </p>

                      <p className="mt-1 font-medium">
                        Zervia Tech Solutions
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:block">
                <p className="text-xs text-slate-400">
                  Based in
                </p>

                <p className="mt-1 font-semibold text-slate-900">
                  Tirunelveli
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className={`mt-24 grid border-t border-slate-200 pt-10 transition-all delay-300 duration-1000 sm:grid-cols-3 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="py-5 sm:border-r sm:border-slate-200 sm:pr-8">
            <p className="text-3xl font-bold text-slate-900">
              React
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Frontend Development
            </p>
          </div>

          <div className="py-5 sm:px-8">
            <p className="text-3xl font-bold text-slate-900">
              Next.js
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Modern Web Applications
            </p>
          </div>

          <div className="py-5 sm:border-l sm:border-slate-200 sm:pl-8">
            <p className="text-3xl font-bold text-slate-900">
              UI / UX
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Clean User Experiences
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}