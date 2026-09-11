"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="
        order-2
        flex
        flex-col
        justify-center

        text-center
        lg:order-1
        lg:text-left
      "
    >
      {/* Petit texte */}

      <span
        className="
          inline-flex
          w-fit
          self-center
          lg:self-start

          rounded-full
          border
          border-violet-500/30
          bg-violet-500/10

          px-5
          py-2

          text-sm
          uppercase
          tracking-[0.3em]
          text-violet-300
        "
      >
        Creative Developer
      </span>

      {/* Titre */}

      <h1
        className="
          mt-8

          text-3xl
          font-black
          leading-none

          sm:text-4xl

          md:text-5xl

          lg:text-6xl

          xl:text-7xl
        "
      >
        Mitch Boulessi
      </h1>

      <h2
        className="
          mt-3

          text-2xl
          font-bold
          leading-tight

          sm:text-3xl

          md:text-4xl

          lg:text-5xl

          xl:text-6xl
        "
      >
        Je transforme
        <br />

        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
          les idées
        </span>

        <br />

        en expériences.
      </h2>

      {/* Description */}

      <p
        className="
          mx-auto
          mt-8
          max-w-xl
          px-2
          sm:px-6
          lg:px-0 
          text-base
          leading-8
          text-zinc-300

          sm:text-lg

          lg:mx-0
        "
      >
        Étudiante en Génie Logiciel, passionnée par le développement web,
        l&apos;intelligence artificielle, les médias et les expériences numériques.
        J&apos;aime créer des produits qui marquent les esprits.
      </p>

      {/* Badges */}

      <div
        className="
          mt-10

          flex
          flex-col
          sm:flex-row
          sm:flex-wrap
          items-center
          gap-4

          lg:items-start
        "
      >
        <div className="flex flex-wrap justify-center gap-4 lg:justify-start">

          <span className="rounded-full bg-white/10 px-6 py-3 backdrop-blur-lg">
            Développement Web
          </span>

          <span className="rounded-full bg-violet-500/20 px-6 py-3 backdrop-blur-lg">
            Intelligence Artificielle
          </span>

        </div>

        <span className="rounded-full bg-cyan-500/20 px-6 py-3 backdrop-blur-lg">
          Création de contenus
        </span>

      </div>

      {/* Signature */}

      <div
        className="
          mt-16

          flex
          items-center
          justify-center
          gap-4

          lg:justify-start
        "
      >
        
      </div>

    </motion.div>
  );
}