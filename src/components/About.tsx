const capabilities = [
  "Web development",
  "UI / UX design",
  "Creative coding",
  "AI & experimentation",
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/20 bg-[#08080A] px-5 py-14 text-white sm:px-8 lg:px-10 lg:py-20"
      data-gsap-section
    >
      <div className="mx-auto grid max-w-[1800px] gap-10 lg:grid-cols-[0.65fr_1.15fr_1.1fr_1fr] lg:gap-8">
        <div className="flex flex-col justify-between gap-8">
          <p className="font-mono text-[10px] font-bold uppercase tracking-wider">
            <span className="mr-4 text-violet-400">03</span>
            About me
          </p>

          <p className="hidden max-w-[150px] font-mono text-[10px] uppercase leading-[1.9] tracking-wide text-white/45 lg:block">
            Independent thinking.
            <br />
            Intentional design.
            <br />
            Thoughtful development.
          </p>
        </div>

        <div>
          <h2 className="max-w-md text-4xl font-medium leading-[1.02] tracking-[-0.065em] sm:text-5xl lg:text-6xl">
            A developer who enjoys turning ideas into clean, functional and
            meaningful experiences.
          </h2>

          <div className="mt-7 h-px w-12 bg-violet-400" />

          <p className="mt-6 max-w-md text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
            I combine development, design and curiosity to create digital
            experiences that feel simple, purposeful and intuitive. I enjoy
            exploring new technologies and turning ambitious ideas into
            something real.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-3 border-b border-white/30 pb-2 font-mono text-[10px] font-bold tracking-wider transition-colors hover:border-violet-400 hover:text-violet-400"
          >
            LET&apos;S CONNECT <span data-gsap-arrow>↗</span>
          </a>
        </div>

        <div className="about-art relative min-h-[320px] overflow-hidden border border-white/10 bg-[#15151a] sm:min-h-[400px]">
          <img
            src="/about-image.jpg"
            alt="Abstract architectural composition"
            className="absolute inset-0 h-full w-full object-cover grayscale-[25%]"
          />

          <div className="about-art-overlay absolute left-5 top-5 font-mono text-[9px] uppercase leading-[1.8] tracking-widest text-white/60">
            Design
            <br />
            Code
            <br />
            Create
            <br />
            Repeat
          </div>

          <div className="about-art-overlay absolute bottom-5 left-5 flex items-center gap-2 font-mono text-[9px] tracking-widest text-white/60">
            <span className="size-1.5 rounded-full bg-violet-400" data-gsap-dot />
            ALWAYS EXPLORING
          </div>
        </div>

        <div className="flex flex-col border-t border-white/15 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <p className="font-mono text-[10px] uppercase tracking-wider text-white/45">
            What I do
          </p>

          <div className="mt-6">
            {capabilities.map((item, index) => (
              <div
                key={item}
                className="group flex items-center justify-between gap-4 border-b border-white/15 py-4"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-violet-400">
                    0{index + 1}
                  </span>
                  <span className="text-sm tracking-tight text-white/80 transition-colors group-hover:text-violet-300 sm:text-base">
                    {item}
                  </span>
                </div>

                <span className="text-white/35 transition-all group-hover:translate-x-1 group-hover:text-violet-400" data-gsap-arrow>
                  ↗
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="font-mono text-[10px] uppercase tracking-wider text-white/45">
              Current mindset
            </p>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Stay curious. Keep experimenting. Build things that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
