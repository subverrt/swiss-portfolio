const socials = [
  {
    name: "TWITTER",
    href: "https://x.com/subverrt",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
        <path
          fill="currentColor"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
        />
      </svg>
    ),
  },
  {
    name: "GITHUB",
    href: "https://github.com/subverrt",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
        <path
          fill="currentColor"
          d="M12 .75a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .75Z"
        />
      </svg>
    ),
  },
  {
    name: "DISCORD",
    href: "https://discord.com/users/573001193333456908",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
        <path
          fill="currentColor"
          d="M19.54 5.18A16.6 16.6 0 0 0 15.43 3.9l-.5 1.02a15.3 15.3 0 0 0-5.86 0l-.5-1.02a16.6 16.6 0 0 0-4.1 1.28C1.87 9.08 1.17 12.9 1.52 16.67a16.7 16.7 0 0 0 5.05 2.56l1.23-1.67a10.5 10.5 0 0 1-1.94-.93l.47-.36a11.9 11.9 0 0 0 11.34 0l.48.36c-.62.37-1.27.68-1.95.93l1.23 1.67a16.7 16.7 0 0 0 5.05-2.56c.41-4.38-.7-8.16-2.94-11.49ZM8.76 14.48c-1.1 0-2-.99-2-2.2s.88-2.2 2-2.2 2 .99 2 2.2-.9 2.2-2 2.2Zm6.48 0c-1.1 0-2-.99-2-2.2s.88-2.2 2-2.2 2 .99 2 2.2-.9 2.2-2 2.2Z"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-y border-white/20 bg-[#08080A] px-5 text-white sm:px-8 lg:px-10"
      data-gsap-section
    >
      <div className="mx-auto grid max-w-[1800px] gap-8 py-7 md:grid-cols-[1fr_1.7fr_2.3fr_1fr] md:items-center md:gap-6 md:py-5">
        <div>
          <div className="flex items-start gap-4">
            <span className="mt-[3px] size-2.5 shrink-0 rounded-full bg-violet-400" data-gsap-dot />

            <div>
              <p className="font-mono text-[9px] font-bold tracking-widest text-white/75">
                LET&apos;S CONNECT
              </p>

              <h2 className="mt-1 text-xl leading-[1.05] tracking-[-0.06em] sm:text-2xl">
                Have a project
                <br />
                in mind?
              </h2>
            </div>
          </div>
        </div>

        <div className="md:pr-5">
          <p className="max-w-xs text-xs leading-[1.7] text-white/60">
            I&apos;m always open to discussing new ideas,
            <br className="hidden lg:block" />
            collaborations or opportunities.
          </p>

          <a
            href="mailto:subverrt@gmail.com"
            className="mt-2 inline-flex items-center gap-2 text-xs font-semibold transition-colors hover:text-violet-400"
          >
            subvert685@gmail.com <span data-gsap-arrow>↗</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 border-white/20 md:min-h-[54px] md:justify-center md:border-l md:px-5">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3"
            >
              <span className="text-base font-bold transition-colors group-hover:text-violet-400">
                {social.icon}
              </span>

              <span className="font-mono text-[9px] tracking-widest text-white/65 transition-colors group-hover:text-violet-400">
                {social.name}
              </span>
            </a>
          ))}
        </div>

        <div className="border-t border-white/20 pt-5 md:min-h-[54px] md:border-l md:border-t-0 md:pl-6 md:pt-0">
          <div className="flex items-start gap-4">
            <span className="mt-[3px] size-2.5 shrink-0 rounded-full bg-violet-400" data-gsap-dot />

            <div className="font-mono text-[9px] leading-[1.9] tracking-wider text-white/60">
              <p className="font-bold text-white/80">SUBVERRT</p>
              <p>© {new Date().getFullYear()}</p>
              <p>ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
