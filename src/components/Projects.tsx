const projects = [
  {
    number: "01",
    name: "Flyhigh",
    description: "A modern platform for a seamless flight booking experience.",
    tech: ["Next.js", "Tailwind", "FastAPI"],
    image: "/flyhigh.png",
    link: "https://flyhigh-two.vercel.app/",
  },
  {
    number: "02",
    name: "Veraxity",
    description: "A social media deception detection tool for Instagram.",
    tech: ["React", "Node.js", "ML"],
    image: "/veraxity.png",
    link: "#",
  },
  {
    number: "03",
    name: "Jotlify",
    description: "A minimal note-taking experience for focused thinking.",
    tech: ["React", "TypeScript", "PostgreSQL"],
    image: "/jotlify.png",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="border-t border-white/20 bg-[#08080A] px-5 py-12 text-white sm:px-8 lg:px-10 lg:py-16"
      data-gsap-section
    >
      <div className="mx-auto grid max-w-[1800px] gap-10 lg:grid-cols-[0.8fr_2.8fr] lg:gap-8">
        <div className="flex flex-col items-start lg:border-r lg:border-white/15 lg:pr-8">
          <p className="font-mono text-[10px] font-bold uppercase tracking-wider">
            <span className="mr-4 text-violet-400">02</span>
            Featured Work
          </p>

          <h2 className="mt-9 max-w-xs text-5xl font-medium leading-[1.02] tracking-[-0.065em] sm:text-6xl">
            Projects<br /> that turn ideas into reality.
          </h2>

          <div className="mt-8 h-px w-12 bg-violet-400" />

          <p className="mt-5 max-w-[180px] font-mono text-[10px] uppercase leading-[1.8] tracking-wide text-white/50">
            A selection of recent work.
          </p>

          <a
            href="#contact"
            className="mt-8 border-b border-white/30 pb-2 font-mono text-[10px] font-bold tracking-wider transition-colors hover:border-violet-400 hover:text-violet-400"
          >
            LET&apos;S COLLABORATE ↗
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {projects.map((project) => {
            const isExternalLink = project.link.startsWith("http");

            return (
              <article key={project.number} className="group min-w-0" data-gsap-card>
                <div className="mb-2 flex items-center justify-between font-mono text-[9px] text-white/45">
                  <span>{project.number}</span>
                </div>

                <a
                  href={project.link}
                  target={isExternalLink ? "_blank" : undefined}
                  rel={isExternalLink ? "noreferrer" : undefined}
                  className="relative block aspect-[1.45/1] overflow-hidden border border-white/10 bg-[#15121b]"
                  aria-label={`View ${project.name}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.name} project preview`}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[35%] transition duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                </a>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-medium tracking-[-0.055em]">
                    {project.name}
                  </h3>
                  <span className="text-sm text-white/45 transition-colors group-hover:text-violet-400" data-gsap-arrow>
                    ↗
                  </span>
                </div>

                <p className="mt-2 min-h-10 text-sm leading-5 text-white/60">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
