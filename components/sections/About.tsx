"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      {/* Décor */}

      <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[160px]" />

      <div className="container-custom relative z-10">

        {/* Titre */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-14 sm:mb-20"
        >
          <p className="section-subtitle">
            À propos
          </p>

          <h2 className="section-title">
            Je crée des expériences qui
            <br />
            racontent une histoire.
          </h2>
        </motion.div>

        {/* Contenu */}

        <div  className="grid gap-12 lg:grid-cols-[1.35fr_.65fr]
    lg:gap-20">

          {/* Forme */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            whileHover={{
              scale: 1.02,
            }}
            className="relative overflow-hidden"
          >
            <svg
              viewBox="0 0 650 520"
              className="w-full max-w-[360px] sm:max-w-[450px] md:max-w-[540px] lg:max-w-full mx-auto drop-shadow-2xl">
              <path
                d="
                M118 66
                C220 -10 470 -10 575 90

                C660 175 645 330 560 425

                C470 520 235 540 105 445

                C-20 350 -10 155 118 66
                "
                fill="#090909"
                stroke="rgba(255,255,255,.08)"
                strokeWidth="2"
              />
            </svg>

            <div  className="absolute inset-0 flex items-center justify-center p-6 sm:p-10 md:p-14 lg:px-16">

              <p
  className="
    max-w-[150px]

    text-[12px]
    leading-6

    text-zinc-300

    sm:max-w-[210px]
    sm:text-[15px]
    sm:leading-7

    md:max-w-[280px]
    md:text-lg
    md:leading-8

    lg:max-w-md
    lg:text-2xl
    lg:leading-9
  "
>
  Je ne développe pas simplement des applications.

  <span className="font-bold text-white">
    {" "}
    Je conçois des expériences numériques{" "}
  </span>

  qui allient créativité, émotion et technologie afin de laisser une
  impression durable.
</p>

            </div>

          </motion.div>

          {/* Chiffres */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="grid grid-cols-2 gap-8 text-center sm:gap-10 lg:flex lg:flex-col lg:text-left lg:justify-center">

            <div>

              <h3 className="text-5xl sm:text-6xl xl:text-7xl  font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                02
              </h3>

              <p className="mt-2 text-zinc-400">
                Compétitions remportées
              </p>

            </div>

            <div>

              <h3 className="text-5xl sm:text-6xl xl:text-7xl  font-black bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
                03
              </h3>

              <p className="mt-2 text-zinc-400">
                Mois d&apos;expérience
              </p>

            </div>

            <div className="col-span-2 lg:col-span-1">

              <h3 className="text-5xl sm:text-6xl xl:text-7xl font-black bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                L3
              </h3>

              <p className="mt-2 text-zinc-400">
                Génie Logiciel
              </p>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Texte géant */}

      <h1
        className="
          absolute

bottom-0

left-1/2

-translate-x-1/2

whitespace-nowrap

text-[24vw]

sm:text-[18vw]

lg:text-[15vw]

font-black

text-white/[0.03]

select-none
        "
      >
        ABOUT
      </h1>

    </section>
  );
}