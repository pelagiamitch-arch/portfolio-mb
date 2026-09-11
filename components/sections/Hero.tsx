"use client";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
relative
overflow-hidden

min-h-screen

pt-24
pb-16

sm:pt-28
sm:pb-20

lg:pt-32
"
    >
      {/* Dégradés décoratifs */}

      <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-fuchsia-600/30 blur-[130px]" />

      <div className="absolute top-52 right-0 h-80 w-80 rounded-full bg-cyan-500/30 blur-[140px]" />

      <div className="absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]" />

      <div className="container-custom relative z-10">

        <div
          className="
    grid

    items-center

    gap-16

    lg:grid-cols-[1.05fr_.95fr]

    xl:gap-24
  "
        >
          {/* Texte */}

          <HeroContent />

          {/* Photo */}

          <HeroImage />
        </div>

      </div>

      {/* Texte géant en fond */}

      <h2
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2

          text-[18vw]
          font-black
          uppercase
          leading-none
          tracking-tight

          text-white/[0.03]
          whitespace-nowrap
          select-none
        "
      >
        CREATIVE
      </h2>

    </section>
  );
}