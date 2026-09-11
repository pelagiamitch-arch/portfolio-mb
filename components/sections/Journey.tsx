"use client";

import { motion } from "framer-motion";

import JourneyCard from "./JourneyCard";
import { journey } from "./JourneyData";

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden py-32"
    >
      {/* Halos */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-violet-600/15 blur-[170px]" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[190px]" />

      </div>

      {/* Quadrillage */}

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

        {/* Header */}

        <motion.div

          initial={{
            opacity: 0,
            y: 50,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: .8,
          }}

          className="mx-auto mb-28 max-w-3xl text-center"
        >

          <p className="section-subtitle">
            Mon Parcours
          </p>

          <h2 className="section-title">

            Les étapes qui ont

            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">

              {" "}façonné ma vision.

            </span>

          </h2>

          <p
            className="
              mx-auto

              mt-8

              max-w-2xl

              leading-8

              text-zinc-400
            "
          >
            Chaque expérience représente une étape de mon évolution.
            De mes études à mes premières victoires en compétition,
            chaque défi m&apos;a permis de développer ma créativité,
            mon leadership et ma capacité à construire des solutions
            qui ont du sens.
          </p>

        </motion.div>

        {/* Timeline */}

        <div
          className="
            relative

            mx-auto

            max-w-7xl
          "
        >

          {/* Ligne centrale Desktop */}

          <div
            className="
              absolute

              left-1/2

              top-0

              hidden

              h-full

              w-[2px]

              -translate-x-1/2

              bg-gradient-to-b

              from-violet-500

              via-fuchsia-500

              to-cyan-500

              lg:block
            "
          />

          {/* Ligne Mobile */}

          <div
            className="
              absolute

              left-6

              top-0

              h-full

              w-[2px]

              bg-gradient-to-b

              from-violet-500

              via-fuchsia-500

              to-cyan-500

              lg:hidden
            "
          />
                    {/* Cartes */}

          <div className="relative space-y-14 lg:space-y-28">

            {journey.map((step, index) => (

              <motion.div
                key={step.id}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: .3,
                }}
                transition={{
                  duration: .8,
                  delay: index * .08,
                }}
                className="
                  relative

                  grid

                  items-center

                  lg:grid-cols-2
                "
              >

                {/* POINT LUMINEUX */}

                <div
                  className="
                    absolute

                    left-6

                    top-12

                    z-30

                    h-5

                    w-5

                    -translate-x-1/2

                    rounded-full

                    border-4

                    border-[#090909]

                    bg-gradient-to-r

                    from-fuchsia-500

                    via-violet-500

                    to-cyan-500

                    shadow-[0_0_35px_rgba(168,85,247,.8)]

                    lg:left-1/2
                  "
                />

                {/* VERSION DESKTOP */}

                <div
                  className={`
                    hidden

                    lg:block

                    ${index % 2 === 0 ? "pr-16" : "order-2 pl-16"}
                  `}
                >

                  <JourneyCard
                    step={step}
                    index={index}
                  />

                </div>

                {/* COLONNE VIDE */}

                <div
                  className={`
                    hidden

                    lg:block

                    ${index % 2 === 0 ? "order-2" : ""}
                  `}
                />

                {/* VERSION MOBILE */}

                <div
                  className="
                    pl-16

                    lg:hidden
                  "
                >

                  <JourneyCard
                    step={step}
                    index={index}
                  />

                </div>

              </motion.div>

            ))}

          </div>
                    {/* Halo animé au centre */}

          <motion.div
            animate={{
              y: [-40, 40, -40],
              opacity: [.35, .8, .35],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none

              absolute

              left-1/2

              top-0

              hidden

              h-36

              w-36

              -translate-x-1/2

              rounded-full

              bg-gradient-to-b

              from-fuchsia-500/40

              via-violet-500/30

              to-cyan-500/40

              blur-[70px]

              lg:block
            "
          />

        </div>

      </div>

      {/* Mot géant */}

      <h1
        className="
          pointer-events-none

          absolute

          bottom-0

          left-1/2

          -translate-x-1/2

          whitespace-nowrap

          select-none

          font-black

          tracking-tight

          text-white/[0.03]

          text-[24vw]

          sm:text-[20vw]

          lg:text-[15vw]
        "
      >
        JOURNEY
      </h1>

      {/* Dégradé bas */}

      <div
        className="
          pointer-events-none

          absolute

          inset-x-0

          bottom-0

          h-48

          bg-gradient-to-t

          from-[#090909]

          to-transparent
        "
      />

    </section>
  );
}