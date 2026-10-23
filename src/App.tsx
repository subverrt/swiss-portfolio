import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  const [isLight, setIsLight] = useState(false);
  const pageRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const page = pageRef.current;

    if (!page || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power2.out" } });

      intro.from("[data-gsap-hero]", {
        opacity: 0,
        y: 18,
        duration: 0.75,
        stagger: 0.08,
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap-section]").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 24,
          duration: 0.8,
          ease: "power2.out",
        });
      });

      gsap.from("[data-gsap-card]", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.12,
      });

      gsap.to("[data-gsap-dot]", {
        scale: 1.18,
        opacity: 0.72,
        duration: 1.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
      });

      gsap.to("[data-gsap-arrow]", {
        x: 3,
        y: -3,
        duration: 0.9,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.12,
      });
    }, page);

    return () => context.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className={`min-h-screen bg-[#08080A] ${isLight ? "theme-light" : ""}`}
    >
      <Hero isLight={isLight} onToggleTheme={() => setIsLight((value) => !value)} />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}
