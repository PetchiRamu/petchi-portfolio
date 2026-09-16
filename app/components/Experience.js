"use client";

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    no: "01",
    role: "Frontend Developer",
    company: "Zervia Tech Solutions",
    period: "July 2025 — Present",
    location: "Tirunelveli, Tamil Nadu",
    description:
      "Working on modern, responsive websites and business applications using React.js, Next.js and Tailwind CSS.",
    points: [
      "Develop responsive and reusable UI components using React.js and Next.js.",
      "Convert Figma designs into clean, responsive web interfaces.",
      "Integrate REST APIs and work with frontend-backend data flow.",
      "Work on WordPress themes and plugin customization.",
      "Debug UI issues, perform testing and implement client requirements.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    no: "02",
    role: "Junior Associate",
    company: "Ninestar Information Technologies Pvt. Ltd.",
    period: "April 2024 — February 2025",
    location: "Tirunelveli, Tamil Nadu",
    description:
      "Worked on photo editing, document design and visual quality while supporting team requirements.",
    points: [
      "Handled photo editing and document design tasks.",
      "Maintained visual quality and brand consistency.",
      "Supported team members with design-related requirements.",
      "Worked with attention to detail and delivery quality.",
    ],
    technologies: [
      "Photo Editing",
      "Document Design",
      "Visual Design",
    ],
  },
];

export default function Experience() {
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
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F3EFE7] px-5 py-28 sm:px-8 md:px-12 md:py-36 lg:px-16"
    >
      {/* Background Decorations */}

      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-orange-200/20 blur-3xl" />

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
                  05
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#77736B]">
                  Experience
                </span>

              </div>

              <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.06em] text-[#171717] sm:text-6xl md:text-7xl lg:text-8xl">
                My journey
                <br />
                <span className="text-[#A29B8E]">so far.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#68645C]">
              From creative design work to frontend development, every
              experience has helped me build stronger technical and
              problem-solving skills.
            </p>

          </div>
        </div>

        {/* ================= TIMELINE ================= */}

        <div className="relative">

          {/* Timeline Line */}

          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-[#D6D0C5] md:block" />

          <div className="space-y-10 md:space-y-14">

            {experiences.map((experience, index) => {
              const isActive = active === index;

              return (
                <article
                  key={experience.no}
                  onMouseEnter={() => setActive(index)}
                  onMouseLeave={() => setActive(null)}
                  className={`relative transition-all duration-1000 ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 180}ms`,
                  }}
                >

                  {/* Timeline Dot */}

                  <div className="absolute left-0 top-8 hidden md:flex">

                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#F3EFE7] transition-all duration-500 ${
                        isActive
                          ? "scale-125 bg-[#7C3AED]"
                          : "bg-[#171717]"
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </div>

                  </div>

                  {/* Card */}

                  <div
                    className={`ml-0 rounded-[2rem] border bg-white p-7 transition-all duration-700 sm:p-9 md:ml-20 md:p-10 ${
                      isActive
                        ? "-translate-y-2 border-[#D9C9F7] shadow-2xl shadow-purple-900/10"
                        : "border-[#DDD7CB] shadow-sm"
                    }`}
                  >

                    {/* Top Row */}

                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

                      <div>

                        <div className="mb-4 flex items-center gap-3">

                          <span className="rounded-full bg-[#F6F1FF] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7C3AED]">
                            {experience.no}
                          </span>

                          <span className="text-xs text-[#9A9489]">
                            {experience.period}
                          </span>

                        </div>

                        <h3
                          className={`text-3xl font-bold tracking-[-0.04em] text-[#171717] transition-transform duration-500 sm:text-4xl md:text-5xl ${
                            isActive ? "translate-x-2" : ""
                          }`}
                        >
                          {experience.role}
                        </h3>

                        <p className="mt-2 text-base font-medium text-[#7C3AED]">
                          {experience.company}
                        </p>

                      </div>

                      <span className="w-fit rounded-full border border-[#E5DFD5] bg-[#FAF8F4] px-4 py-2 text-xs text-[#777269]">
                        {experience.location}
                      </span>

                    </div>

                    {/* Description */}

                    <p className="mt-7 max-w-3xl text-sm leading-7 text-[#777269]">
                      {experience.description}
                    </p>

                    {/* Divider */}

                    <div className="my-7 h-px bg-[#EEE9E0]" />

                    {/* Responsibilities */}

                    <div className="grid gap-3">

                      {experience.points.map((point, pointIndex) => (
                        <div
                          key={pointIndex}
                          className="flex gap-4"
                        >

                          <span
                            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300 ${
                              isActive
                                ? "bg-[#7C3AED]"
                                : "bg-[#C5BFB4]"
                            }`}
                          />

                          <p className="text-sm leading-7 text-[#68645C]">
                            {point}
                          </p>

                        </div>
                      ))}

                    </div>

                    {/* Technologies */}

                    <div className="mt-8 flex flex-wrap gap-2">

                      {experience.technologies.map((tech) => (
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

                </article>
              );
            })}

          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className={`mt-16 flex items-center gap-4 transition-all duration-1000 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="h-px w-16 bg-[#C8C1B5]" />

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8B857A]">
            Still growing • Still learning
          </span>
        </div>

      </div>
    </section>
  );
}