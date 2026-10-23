import { useState } from "react";

const navItems = [
  { number: "01", label: "HOME", href: "#home" },
  { number: "02", label: "WORK", href: "#work" },
  { number: "03", label: "ABOUT", href: "#about" },
];

type HeroProps = {
  isLight: boolean;
  onToggleTheme: () => void;
};

export default function Hero({ isLight, onToggleTheme }: HeroProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <header className="logo-header">
          <a href="/" className="logo">
            Subverrt
          </a>
          <span className="logo-divider" aria-hidden="true" />
        </header>

        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.number}
              href={item.href}
              className="group flex items-center gap-3"
            >
              <span className="text-white/40">{item.number}</span>
              <span className="transition-colors group-hover:text-violet-400">
                {item.label}
              </span>
            </a>
          ))}
          <button
            type="button"
            className="navbar-theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
            aria-pressed={isLight}
          >
            {isLight ? (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="navbar-theme-icon"
              >
                <path
                  d="M21 12.8A8.5 8.5 0 0 1 11.2 3a8.5 8.5 0 1 0 9.8 9.8Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="navbar-theme-icon"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
          <a href="#contact" className="nav-button">
            <span className="nav-button-text">LET&apos;S TALK</span>
            <span className="nav-button-arrow">↗</span>
          </a>
          <button
            type="button"
            className={`mobile-menu-toggle ${isMenuOpen ? "is-open" : ""}`}
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`mobile-nav-menu ${isMenuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.number}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>{item.number}</span>
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            <span>↗</span>
            LET&apos;S TALK
          </a>
        </div>
      </nav>

      <section id="home" className="hero-section" data-gsap-section>
        <div className="hero-grid grid gap-8 py-8 lg:grid-cols-[0.62fr_2.5fr_1.35fr_0.55fr] lg:gap-6 lg:py-0">
          <aside className="hero-aside hero-aside-left hidden flex-col justify-between lg:flex">
            <div>
              <p className="mb-3 font-mono text-xs font-bold text-violet-400">
                01
              </p>
              <p className="font-mono text-[11px] uppercase leading-[1.65] tracking-wide text-white/70">
                Building
                <br />
                digital experiences
                <br />
                with code, design
                <br />
                &amp; technology.
              </p>
              <div className="mt-8 h-px w-9 bg-white/40" />
            </div>

            <p className="font-mono text-[10px] uppercase leading-[1.9] tracking-wide text-white/55">
              Full-stack developer
              <br />
              Creative technologist
              <br />
              Lifelong learner
            </p>
          </aside>

          <div className="flex min-w-0 flex-col justify-center py-6 lg:py-10" data-gsap-hero>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-violet-400 lg:hidden">
              01 — Creative Developer / India
            </p>

            <h1 className="text-[clamp(4rem,14.8vw,12.5rem)] font-semibold leading-[0.78] tracking-[-0.095em]">
              Subverrt
            </h1>

            <div className="mt-8 max-w-2xl">
              <p className="text-xl leading-[1.15] tracking-[-0.055em] text-white/90 sm:text-2xl lg:text-[clamp(1.35rem,2.1vw,2.3rem)]">
                I build digital experiences
                <br className="hidden sm:block" /> with code, design &amp;
                technology.
              </p>

              <a
                href="#work"
                className="mt-7 inline-flex items-center gap-4 font-mono text-[11px] font-bold tracking-wider transition-colors hover:text-violet-400"
              >
                <span className="h-px w-12 bg-violet-400" />
                <span>VIEW WORK</span>
                <span data-gsap-arrow>↗</span>
              </a>
            </div>
          </div>

          <div className="hero-art relative isolate mx-auto w-[374px] max-w-full overflow-hidden" data-gsap-hero>
            <img
              src="/hero-image.png"
              alt="Purple abstract artwork"
              className="block h-auto w-full"
            />
          </div>

          <aside className="hero-aside hero-aside-right hidden flex-col justify-between py-8 lg:flex">
            <div>
              <p className="font-mono text-[11px] font-bold">2026</p>
              <div className="my-5 h-14 w-px bg-violet-400/70" />
              <p className="font-mono text-[10px] uppercase leading-[1.9] tracking-wide text-white/65">
                Web development
                <br />
                UI / UX design
                <br />
                Open Source
                <br />
                Machine Learning
                <br />
                And more.
              </p>
            </div>

            <a
              href="#work"
              className="font-mono text-[10px] uppercase leading-[1.9] tracking-wide text-white/55 transition-colors hover:text-violet-400"
            >
              <span className="mb-3 block h-px w-8 bg-white/40" />
              Scroll
              <br />
              to explore
              <br />
              <span className="text-lg">↓</span>
            </a>
          </aside>
        </div>
        <div className="border-t border-white/20" />
      </section>
    </>
  );
}
