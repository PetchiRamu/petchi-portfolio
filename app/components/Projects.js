"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    no: "01",
    title: "Procurement",
    subtitle: "Inventory Management Platform",
    description:
      "A complete business application for managing products, enquiries, quotations and orders.",
    tech: ["React.js", "Next.js", "REST API"],
    year: "2026",
    type: "Business Application",
  },
  {
    no: "02",
    title: "Academy Management",
    subtitle: "Academy Management Application",
    description:
      "A modern management application designed to streamline academy operations, student management and day-to-day activities.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    year: "2026",
    type: "Management Application",
  },
  {
    no: "03",
    title: "Company Website",
    subtitle: "Corporate Digital Experience",
    description:
      "A clean and modern company website focused on responsive design and performance.",
    tech: ["Next.js", "Tailwind CSS"],
    year: "2025",
    type: "Website",
  },
  {
    no: "04",
    title: "Tourism Website",
    subtitle: "Travel Experience",
    description:
      "A responsive tourism website created with customized WordPress layouts and styling.",
    tech: ["WordPress", "HTML", "CSS"],
    year: "2025",
    type: "Website",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const project = projects[active];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F3EFE7] px-5 py-28 sm:px-8 md:px-12 md:py-36 lg:px-16"
    >
      {/* Background */}

      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-purple-300/20 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-orange-200/30 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}

        <div
          className={`mb-20 transition-all duration-1000 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717] text-xs font-bold text-white">
              04
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#8B857A]">
              Selected Work
            </span>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <h2 className="max-w-4xl text-5xl font-bold leading-[0.9] tracking-[-0.06em] text-[#171717] sm:text-6xl md:text-7xl lg:text-[90px]">
              Things I've
              <br />
              <span className="text-[#A39C90]">built.</span>
            </h2>

            <div className="max-w-sm">
              <p className="text-sm leading-7 text-[#777269]">
                A selection of digital products, websites and business
                applications built with modern frontend technologies.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-12 bg-[#BDB6AA]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#999287]">
                  04 Projects
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* MAIN SHOWCASE */}

        <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">

          {/* LEFT PROJECT LIST */}

          <div
            className={`transition-all duration-1000 ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-3">

              {projects.map((item, index) => {
                const isActive = active === index;

                return (
                  <button
                    key={item.no}
                    onMouseEnter={() => setActive(index)}
                    onClick={() => setActive(index)}
                    className={`group relative w-full overflow-hidden rounded-2xl border p-5 text-left transition-all duration-500 sm:p-6 ${
                      isActive
                        ? "border-[#171717] bg-[#171717] text-white shadow-xl"
                        : "border-[#DDD6CA] bg-white/70 text-[#171717] hover:-translate-y-1 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-4">

                      <span
                        className={`text-xs font-bold ${
                          isActive
                            ? "text-purple-400"
                            : "text-[#AAA398]"
                        }`}
                      >
                        {item.no}
                      </span>

                      <div className="flex-1">
                        <h3 className="text-lg font-bold tracking-tight sm:text-xl">
                          {item.title}
                        </h3>

                        <p
                          className={`mt-1 text-xs ${
                            isActive
                              ? "text-white/45"
                              : "text-[#999287]"
                          }`}
                        >
                          {item.type}
                        </p>
                      </div>

                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-500 ${
                          isActive
                            ? "rotate-45 bg-white text-[#171717]"
                            : "bg-[#F1ECE4] text-[#777269]"
                        }`}
                      >
                        ↗
                      </span>

                    </div>

                    {/* Active line */}

                    <span
                      className={`absolute bottom-0 left-0 h-[3px] bg-purple-500 transition-all duration-500 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </button>
                );
              })}

            </div>
          </div>

          {/* RIGHT FEATURE CARD */}

          <div
            className={`transition-all delay-200 duration-1000 ${
              visible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="group relative min-h-[560px] overflow-hidden rounded-[2.5rem] bg-[#171717] p-7 text-white shadow-2xl sm:p-10 md:p-12">

              {/* Decorative circles */}

              <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10 transition-transform duration-1000 group-hover:scale-110" />

              <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />

              <div className="absolute bottom-[-100px] left-[-100px] h-64 w-64 rounded-full bg-purple-600/20 blur-[90px]" />

              {/* Giant number */}

              <span className="pointer-events-none absolute right-6 top-0 select-none text-[180px] font-black leading-none tracking-[-0.12em] text-white/[0.035] sm:text-[230px]">
                {project.no}
              </span>

              <div className="relative z-10 flex min-h-[480px] flex-col justify-between">

                {/* TOP */}

                <div className="flex items-center justify-between">

                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                    {project.type}
                  </span>

                  <span className="text-xs text-white/30">
                    {project.year}
                  </span>

                </div>

                {/* CENTER */}

                <div className="mt-20">

                  <div className="mb-5 flex items-center gap-3">

                    <span className="h-2 w-2 rounded-full bg-purple-500" />

                    <span className="text-xs uppercase tracking-[0.2em] text-white/35">
                      {project.subtitle}
                    </span>

                  </div>

                  <h3
                    key={project.title}
                    className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-7xl"
                  >
                    {project.title}
                    <span className="text-purple-500">.</span>
                  </h3>

                  <p className="mt-7 max-w-xl text-sm leading-7 text-white/40">
                    {project.description}
                  </p>

                </div>

                {/* BOTTOM */}

                <div>

                  <div className="mb-7 h-px w-full bg-white/10" />

                  <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

                    <div>

                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/25">
                        Built With
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-white/50 transition-colors hover:border-purple-400/50 hover:text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-xl text-[#171717] transition-all duration-500 group-hover:rotate-45">
                      ↗
                    </div>

                  </div>

                </div>

              </div>

              {/* Bottom gradient */}

              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-orange-400" />

            </div>
          </div>
        </div>

        {/* BOTTOM */}

        <div
          className={`mt-14 flex flex-col gap-4 border-t border-[#D8D1C5] pt-7 transition-all delay-500 duration-1000 sm:flex-row sm:items-center sm:justify-between ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-xs text-[#999287]">
            Every project is a new opportunity to build something better.
          </p>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-purple-600" />

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#999287]">
              Always Building
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}