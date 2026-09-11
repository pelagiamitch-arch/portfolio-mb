"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "./ProjectsData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-32"
    >
      {/* Halos */}

      <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[170px]" />

      <div className="absolute right-0 bottom-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[190px]" />

      {/* Fond quadrillé */}

      <div
        className="
          pointer-events-none

          absolute

          inset-0

          opacity-[0.03]

          [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)]

          [background-size:70px_70px]
        "
      />

      <div className="container-custom relative z-10">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto mb-28 max-w-4xl text-center"
        >
          <p className="section-subtitle">
            Réalisations
          </p>

          <h2 className="section-title">

            Les idées deviennent

            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">

              {" "}des expériences.

            </span>

          </h2>

          <p
            className="
              mx-auto

              mt-8

              max-w-2xl

              text-zinc-400

              leading-8
            "
          >
            Chaque réalisation représente une étape de mon évolution,
            mêlant développement, design et créativité pour donner vie à
            des expériences numériques modernes.
          </p>

        </motion.div>

        {/* LISTE */}

        <div className="space-y-20 lg:space-y-32">

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </div>

      {/* GRAND MOT */}

      <h1
        className="
          pointer-events-none

          absolute

          bottom-0

          left-1/2

          -translate-x-1/2

          whitespace-nowrap

          text-[26vw]

          sm:text-[20vw]

          lg:text-[15vw]

          font-black

          tracking-tight

          text-white/[0.03]

          select-none
        "
      >
        WORKS
      </h1>

    </section>
  );
}