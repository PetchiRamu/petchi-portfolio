"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-6 py-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-black/5 bg-white/80 px-6 py-3 shadow-lg shadow-black/5 backdrop-blur-xl">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-gray-900"
        >
          Petchi<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm text-gray-600 transition hover:text-blue-600"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm text-gray-600 transition hover:text-blue-600"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm text-gray-600 transition hover:text-blue-600"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm text-gray-600 transition hover:text-blue-600"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 md:hidden"
        >
          <span className="text-lg">
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mx-6 mt-2 rounded-3xl border border-black/5 bg-white/95 p-5 shadow-xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-gray-900 px-4 py-3 text-center text-white"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}