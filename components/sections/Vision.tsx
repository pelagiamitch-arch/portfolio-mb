"use client";

import { motion } from "framer-motion";

const orbitItems = [
  {
    title: "Créativité",
    description:
      "Imaginer des expériences numériques mémorables qui suscitent l'émotion.",
    className: `
    relative

    lg:absolute
    lg:-top-20
    lg:left-1/2
    lg:-translate-x-1/2
  `,
    gradient: "from-pink-500 to-violet-500",
  },
  {
    title: "Innovation",
    description:
      "Transformer les idées en solutions modernes grâce aux nouvelles technologies.",
    className:
      "lg:absolute lg:-left-10 lg:top-1/2 lg:-translate-y-1/2",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Impact",
    description:
      "Créer des produits utiles qui améliorent réellement le quotidien.",
    className:
      "lg:absolute lg:-right-4 lg:top-1/2 lg:-translate-y-1/2",
    gradient: "from-violet-500 to-fuchsia-500",
  },
];

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-violet-600/20 blur-[160px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[180px]" />

      </div>

      <div className="container-custom relative z-10">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <p className="section-subtitle">
            Ma Vision
          </p>

          <h2 className="section-title">

            Concevoir des expériences

            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">

              {" "}qui inspirent.

            </span>

          </h2>

        </motion.div>

        {/* Zone centrale */}

        <div  className="
    relative

    flex
    flex-col

    items-center

    gap-10

    py-12

    lg:block

    lg:min-h-[700px]
  ">

          {/* Blob */}

          <motion.div

            initial={{
              opacity: 0,
              scale: .8,
            }}

            whileInView={{
              opacity: 1,
              scale: 1,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 1,
            }}

            className="
            
relative

z-20

mx-auto

w-full

max-w-[280px]

sm:max-w-[340px]

md:max-w-[430px]
lg:max-w-[500px]

xl:max-w-[520px]
"

          >

            {/* Halo */}

            <div className="absolute inset-0 scale-125 rounded-full bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-[120px]" />

            {/* SVG */}

            <svg
              viewBox="0 0 600 600"
             className="
relative

h-[280px]
w-[280px]

sm:h-[340px]
sm:w-[340px]

md:h-[420px]
md:w-[420px]

lg:h-[500px]
lg:w-[500px]

xl:h-[500px]
xl:w-[500px]
"
            >

              <defs>

                <linearGradient
                  id="blobGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >

                  <stop offset="0%" stopColor="#A855F7"/>

                  <stop offset="50%" stopColor="#EC4899"/>

                  <stop offset="100%" stopColor="#06B6D4"/>

                </linearGradient>

              </defs>

              <path
                d="
                M301 70
                C418 55 520 150 525 285
                C530 425 425 525 290 530
                C155 535 70 430 65 295
                C60 160 170 80 301 70Z
                "
                fill="#090909"
                stroke="url(#blobGradient)"
                strokeWidth="3"
              />

            </svg>

            {/* Texte */}

            <div className="absolute inset-0 flex items-center justify-center">

              <div  className="
    mx-auto

    max-w-[170px]

    sm:max-w-[210px]

    md:max-w-[260px]
    lg:max-w-[280px]

    xl:max-w-[280px]

    text-center
  ">

                <h3 className="mb-5 bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black text-transparent">

                  Ma Vision

                </h3>

                <p className="
leading-6

text-sm

text-zinc-300

sm:text-base

sm:leading-7

md:text-lg

md:leading-8

">

                  La technologie n&apos;a de sens que lorsqu&apos;elle améliore
                  la vie des personnes et crée une émotion durable.

                </p>

              </div>

            </div>

          </motion.div>
                    {/* Lignes de connexion (Desktop uniquement) */}

          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            viewBox="0 0 1200 850"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="600"
              y1="320"
              x2="600"
              y2="120"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />

            <motion.line
              x1="600"
              y1="320"
              x2="220"
              y2="420"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: .2 }}
            />

            <motion.line
              x1="600"
              y1="320"
              x2="980"
              y2="420"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: .4 }}
            />

            <defs>
              <linearGradient id="lineGradient">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="50%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Satellites */}

          {orbitItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                scale: .6,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
                delay: index * .25,
              }}
              whileHover={{
                scale: 1.08,
                y: -8,
              }}
              className={`
                index === 1
  ? "md:self-start"
  : index === 2
  ? "md:self-end"
  : ""
                relative
                z-30

                w-full
                mx-auto

max-w-[290px]

sm:max-w-[340px]

lg:max-w-[320px]

                rounded-[32px]

                border
                border-white/10

                bg-white/5

                p-7
                text-center
                lg:text-left

                backdrop-blur-2xl

                shadow-[0_0_50px_rgba(168,85,247,.08)]

                ${item.className}
              `}
            >
              {/* Pastille */}

              <div
                className={`
                  mb-6

                  h-3
                  w-20

                  rounded-full

                  bg-gradient-to-r

                  ${item.gradient}
                `}
              />

              <h3 className="text-3xl font-black">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-zinc-400">
                {item.description}
              </p>

              {/* Glow */}

              <div
                className={`
                  absolute

                  -right-6
                  -top-6

                  h-20
                  w-20

                  rounded-full

                  bg-gradient-to-r

                  ${item.gradient}

                  opacity-20

                  blur-2xl
                `}
              />
            </motion.div>
          ))}

        </div>

      </div>

      {/* Mot géant */}

      <h1
        className="
          pointer-events-none

          absolute

          bottom-0
          lg:bottom-20
          left-1/2

          -translate-x-1/2

          whitespace-nowrap

         text-[24vw]

sm:text-[18vw]

lg:text-[15vw]

          font-black

          tracking-tight

          text-white/[0.03]

          select-none
        "
      >
        VISION
      </h1>

      {/* Grille très discrète */}

      <div
        className="
          pointer-events-none

          absolute

          inset-0

          opacity-[0.03]

          [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)]

          [background-size:60px_60px]
        "
      />

    </section>
  );
}