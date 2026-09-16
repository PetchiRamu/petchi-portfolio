export default function Footer() {
  return (
    <footer className="border-t border-[#DED8CD] bg-[#F3EFE7] px-6 py-8 text-[#171717] md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight"
        >
          Petchi<span className="text-purple-600">.</span>
        </a>

        {/* Copyright */}
        <p className="text-xs text-[#999287]">
          © {new Date().getFullYear()} Petchi R. All rights reserved.
        </p>

        {/* Back to top */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#777269] transition-colors hover:text-purple-600"
        >
          Back to top
          <span className="transition-transform duration-300 group-hover:-translate-y-1">
            ↑
          </span>
        </a>

      </div>
    </footer>
  );
}