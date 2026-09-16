"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  {
    number: "01",
    name: "React.js",
    category: "Frontend",
    description: "Building reusable and interactive interfaces.",
    level: "Advanced",
  },
  {
    number: "02",
    name: "Next.js",
    category: "Frontend",
    description: "Creating modern and scalable web applications.",
    level: "Advanced",
  },
  {
    number: "03",
    name: "JavaScript",
    category: "Language",
    description: "Developing dynamic and functional web experiences.",
    level: "Advanced",
  },
  {
    number: "04",
    name: "Tailwind CSS",
    category: "Styling",
    description: "Crafting clean and responsive interfaces.",
    level: "Advanced",
  },
  {
    number: "05",
    name: "HTML & CSS",
    category: "Frontend",
    description: "Building strong responsive web foundations.",
    level: "Advanced",
  },
  {
    number: "06",
    name: "REST API",
    category: "Integration",
    description: "Connecting frontend applications with backend services.",
    level: "Intermediate",
  },
  {
    number: "07",
    name: "Git & GitHub",
    category: "Tools",
    description: "Managing source code and development workflows.",
    level: "Intermediate",
  },
  {
    number: "08",
    name: "WordPress",
    category: "CMS",
    description: "Creating and customizing responsive websites.",
    level: "Intermediate",
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

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
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f8fafc] px-6 py-28 md:px-10 md:py-36 lg:px-16"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Header */}
        <div
          className={`mb-20 flex flex-col justify-between gap-8 transition-all duration-1000 md:flex-row md:items-end ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                03
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
                My Expertise
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Tools I use to
              <span className="text-slate-400"> bring ideas </span>
              to life.
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-7 text-slate-500">
            A collection of technologies and tools I work with to create
            modern digital experiences.
          </p>
        </div>

        {/* Skills List */}
        <div className="border-t border-slate-200">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              onMouseEnter={() => setActiveSkill(index)}
              onMouseLeave={() => setActiveSkill(null)}
              className={`group relative border-b border-slate-200 transition-all duration-700 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              {/* Hover background */}
              <div
                className={`absolute inset-0 bg-slate-900 transition-transform duration-500 ${
                  activeSkill === index
                    ? "translate-x-0"
                    : "-translate-x-full"
                }`}
              />

              <div className="relative grid gap-5 px-2 py-7 transition-all duration-500 sm:grid-cols-[70px_1fr_180px_140px] sm:items-center sm:px-4 md:py-8">

                {/* Number */}
                <div
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSkill === index
                      ? "text-white/50"
                      : "text-slate-400"
                  }`}
                >
                  {skill.number}
                </div>

                {/* Skill Name */}
                <div>
                  <h3
                    className={`text-2xl font-semibold tracking-tight transition-all duration-300 sm:text-3xl md:text-4xl ${
                      activeSkill === index
                        ? "translate-x-2 text-white"
                        : "text-slate-900"
                    }`}
                  >
                    {skill.name}
                  </h3>

                  <p
                    className={`mt-2 max-w-md text-sm transition-colors duration-300 ${
                      activeSkill === index
                        ? "text-white/60"
                        : "text-slate-400"
                    }`}
                  >
                    {skill.description}
                  </p>
                </div>

                {/* Category */}
                <div
                  className={`text-sm transition-colors duration-300 ${
                    activeSkill === index
                      ? "text-white/60"
                      : "text-slate-500"
                  }`}
                >
                  {skill.category}
                </div>

                {/* Level */}
                <div className="flex items-center gap-3 sm:justify-end">
                  <span
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      activeSkill === index
                        ? "bg-white"
                        : "bg-slate-300"
                    }`}
                  />

                  <span
                    className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                      activeSkill === index
                        ? "text-white"
                        : "text-slate-500"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div
          className={`mt-16 flex flex-col gap-5 transition-all delay-700 duration-1000 sm:flex-row sm:items-center sm:justify-between ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-sm text-slate-400">
            Always learning. Always building.
          </p>

          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-slate-300" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              08 Technologies
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}