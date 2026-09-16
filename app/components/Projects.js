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
    accent: "violet",
  },
  {
    no: "02",
    title: "Karate Academy",
    subtitle: "Modern Martial Arts Website",
    description:
      "A bold and responsive academy website designed with a strong visual identity.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    year: "2026",
    accent: "orange",
  },
  {
    no: "03",
    title: "Company Website",
    subtitle: "Corporate Digital Experience",
    description:
      "A clean and modern company website focused on responsive design and performance.",
    tech: ["Next.js", "Tailwind CSS"],
    year: "2025",
    accent: "blue",
  },
  {
    no: "04",
    title: "Tourism Website",
    subtitle: "Travel Experience",
    description:
      "A responsive tourism website created with customized WordPress layouts and styling.",
    tech: ["WordPress", "HTML", "CSS"],
    year: "2025",
    accent: "green",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(null);

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
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F3EFE7] px-5 py-28 sm:px-8 md:px-12 md:py-36 lg:px-16"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div
          className={`mb-20 transition-all duration-1000 md:mb-28 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717] text-xs font-bold text-white">
                  04
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#77736B]">
                  Selected Projects
                </span>
              </div>

              <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.06em] text-[#171717] sm:text-6xl md:text-7xl lg:text-8xl">
                Work that
                <br />
                <span className="text-[#9C9588]">speaks for itself.</span>
              </h2>
            </div>

            <div className="max-w-sm">
              <p className="text-sm leading-7 text-[#68645C]">
                A collection of websites and applications built with
                thoughtful design, clean development and modern technologies.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-12 bg-[#B8B1A4]" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B857A]">
                  04 Selected Works
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ================= PROJECT LIST ================= */}

        <div className="space-y-6">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.no}
              project={project}
              index={index}
              visible={visible}
              active={active}
              setActive={setActive}
            />
          ))}

        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className={`mt-16 flex flex-col gap-5 border-t border-[#D5CFC3] pt-7 transition-all duration-1000 md:flex-row md:items-center md:justify-between ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-sm text-[#817B70]">
            More experiments & projects coming soon.
          </p>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#7C3AED]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#817B70]">
              Always Building
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}


/* =====================================================
   PROJECT CARD
===================================================== */

function ProjectCard({
  project,
  index,
  visible,
  active,
  setActive,
}) {
  const isActive = active === index;

  return (
    <article
      onMouseEnter={() => setActive(index)}
      onMouseLeave={() => setActive(null)}
      className={`group relative overflow-hidden rounded-[2rem] border border-[#DDD7CB] bg-white transition-all duration-700 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-12 opacity-0"
      } ${
        isActive
          ? "-translate-y-2 shadow-2xl shadow-black/10"
          : "shadow-sm"
      }`}
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
    >

      <div className="grid md:grid-cols-[80px_1fr_280px]">

        {/* ================= NUMBER ================= */}

        <div className="hidden border-r border-[#EEE9E0] p-8 md:block">

          <span
            className={`text-sm font-bold transition-colors duration-300 ${
              isActive
                ? "text-[#7C3AED]"
                : "text-[#B4AEA2]"
            }`}
          >
            {project.no}
          </span>

        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="relative p-7 sm:p-9 md:p-10">

          {/* Mobile Number */}

          <div className="mb-6 flex items-center justify-between md:hidden">

            <span className="text-xs font-bold text-[#AAA398]">
              {project.no}
            </span>

            <span className="text-xs text-[#AAA398]">
              {project.year}
            </span>

          </div>

          {/* Small Label */}

          <div className="mb-5 flex items-center gap-3">

            <span
              className={`h-2 w-2 rounded-full transition-all duration-500 ${
                isActive
                  ? "scale-125 bg-[#7C3AED]"
                  : "bg-[#C9C2B5]"
              }`}
            />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#999287]">
              {project.year}
            </span>

          </div>

          {/* Title */}

          <h3
            className={`text-4xl font-bold tracking-[-0.05em] text-[#171717] transition-transform duration-500 sm:text-5xl md:text-6xl ${
              isActive ? "translate-x-2" : "translate-x-0"
            }`}
          >
            {project.title}
          </h3>

          <p
            className={`mt-2 text-lg font-medium transition-colors duration-300 ${
              isActive
                ? "text-[#7C3AED]"
                : "text-[#8C877D]"
            }`}
          >
            {project.subtitle}
          </p>

          {/* Description */}

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#777269]">
            {project.description}
          </p>

          {/* Tech */}

          <div className="mt-7 flex flex-wrap gap-2">

            {project.tech.map((tech) => (
              <span
                key={tech}
                className={`rounded-full border px-3 py-2 text-[11px] transition-all duration-300 ${
                  isActive
                    ? "border-[#D8CCF7] bg-[#F6F1FF] text-[#6D28D9]"
                    : "border-[#E7E1D7] bg-[#FAF8F4] text-[#777269]"
                }`}
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

        {/* ================= VISUAL SIDE ================= */}

        <div className="relative min-h-[280px] overflow-hidden bg-[#171717] md:min-h-full">

          {/* Background Glow */}

          <div
            className={`absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl transition-all duration-700 ${
              project.accent === "violet"
                ? "bg-purple-500/30"
                : project.accent === "orange"
                ? "bg-orange-500/30"
                : project.accent === "blue"
                ? "bg-blue-500/30"
                : "bg-green-500/30"
            } ${
              isActive ? "scale-150" : "scale-100"
            }`}
          />

          {/* Grid */}

          <div
            className={`absolute inset-0 opacity-20 transition-transform duration-1000 ${
              isActive ? "scale-110" : "scale-100"
            }`}
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
              backgroundSize: "35px 35px",
            }}
          />

          {/* Abstract Shape */}

          <div
            className={`absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-700 ${
              isActive
                ? "rotate-12 scale-125"
                : "rotate-0 scale-100"
            }`}
          >

            <div
              className={`absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-700 ${
                project.accent === "violet"
                  ? "bg-purple-500/60"
                  : project.accent === "orange"
                  ? "bg-orange-500/60"
                  : project.accent === "blue"
                  ? "bg-blue-500/60"
                  : "bg-green-500/60"
              } ${
                isActive ? "scale-125" : "scale-100"
              }`}
            />

          </div>

          {/* Project Label */}

          <div className="absolute left-6 top-6">

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
              Project {project.no}
            </span>

          </div>

          {/* Arrow */}

          <div
            className={`absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg text-[#171717] transition-all duration-500 ${
              isActive
                ? "rotate-45 scale-110"
                : "rotate-0"
            }`}
          >
            ↗
          </div>

        </div>

      </div>

      {/* Hover Line */}

      <div
        className={`absolute bottom-0 left-0 h-1 bg-[#7C3AED] transition-all duration-700 ${
          isActive ? "w-full" : "w-0"
        }`}
      />

    </article>
  );
}