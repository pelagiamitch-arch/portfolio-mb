"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  MapPin,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

const missions = [
  "Participation au développement et à l'amélioration de solutions informatiques.",
  "Découverte des systèmes de géolocalisation et de leur intégration.",
  "Collaboration avec l'équipe technique sur plusieurs projets.",
  "Renforcement de mes compétences en développement, analyse et résolution de problèmes.",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#09090B] py-28 px-6 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Titre */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <p className="uppercase tracking-[4px] font-semibold text-violet-400">
            Expérience professionnelle
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-6xl">
            Mon immersion
            <span className="block text-violet-400">
              dans le monde professionnel
            </span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-400">
            Une première expérience enrichissante qui m&apos;a permis de découvrir
            le fonctionnement d&apos;une entreprise spécialisée dans
            l&apos;intégration de solutions informatiques et de géolocalisation.
          </p>
        </motion.div>

        {/* Carte principale */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          <div className="grid gap-14 lg:grid-cols-[120px_1fr]">

            {/* Icône */}

            <div className="flex justify-center lg:justify-start">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-violet-600 shadow-xl">
                <BriefcaseBusiness size={42} />
              </div>
            </div>

            {/* Contenu */}

            <div>

              <div className="flex flex-wrap gap-3">

                <span className="rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold">
                  Stage professionnel
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                  Horizon For Services
                </span>

              </div>

              <h3 className="mt-8 text-4xl font-black">
                Stagiaire en intégration de solutions
              </h3>

              <div className="mt-6 flex flex-wrap gap-6 text-gray-400">

                <div className="flex items-center gap-2">
                  <CalendarDays size={18} />
                  3 mois
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  Congo
                </div>

              </div>

              <p className="mt-8 leading-9 text-lg text-gray-400">
                Durant cette expérience, j&apos;ai découvert le fonctionnement
                d&apos;une entreprise spécialisée dans les solutions informatiques. J&apos;ai participé à plusieurs
                missions techniques qui m&apos;ont permis de développer mes
                compétences professionnelles tout en découvrant les exigences
                du travail en équipe.
              </p>

              {/* Missions */}

              <div className="mt-10 grid gap-5">

                {missions.map((mission) => (

                  <div
                    key={mission}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2
                      className="mt-1 text-violet-400"
                      size={20}
                    />

                    <p className="leading-8 text-gray-300">
                      {mission}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}