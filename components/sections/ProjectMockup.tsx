"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "./ProjectsData";

interface Props {
  project: Project;
}

export default function ProjectMockup({ project }: Props) {

  // =====================================================
  // DESIGN & GRAPHISME
  // =====================================================

  if (project.id === 1) {
    return (
      <div className="relative flex h-[300px] w-full items-center justify-center sm:h-[360px] md:h-[430px]">

        {/* Halo */}

        <div className="absolute h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[90px]" />

        {/* Carte gauche */}

        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 6 }}
          whileHover={{
            rotate: -14,
            x: -25,
            y: -18,
            scale: 1.04,
          }}
          className="
            absolute

            left-[12%]

            z-10

            overflow-hidden

            rounded-[26px]

            border

            border-white/10

            shadow-2xl

            w-32

            sm:w-40

            md:w-52

            rotate-[-12deg]
          "
        >
          <Image
            src="/projects/trueLove.png"
            alt="Design 1"
            width={450}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>

        {/* Carte centrale */}

        <motion.div
          animate={{ y: [6, -6, 6] }}
          transition={{ repeat: Infinity, duration: 5 }}
          whileHover={{
            y: -18,
            scale: 1.05,
          }}
          className="
            relative

            z-30

            overflow-hidden

            rounded-[30px]

            border

            border-white/10

            shadow-[0_40px_90px_rgba(0,0,0,.45)]

            w-40

            sm:w-52

            md:w-64
          "
        >
          <Image
            src="/projects/grace.png"
            alt="Design 2"
            width={500}
            height={700}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>

        {/* Carte droite */}

        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 7 }}
          whileHover={{
            rotate: 14,
            x: 25,
            y: -18,
            scale: 1.04,
          }}
          className="
            absolute

            right-[12%]

            z-20

            overflow-hidden

            rounded-[26px]

            border

            border-white/10

            shadow-2xl

            w-32

            sm:w-40

            md:w-52

            rotate-[12deg]
          "
        >
          <Image
            src="/projects/trueLove.png"
            alt="Design 3"
            width={450}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>

      </div>
    );
  }

  // =====================================================
  // SITE ANNIVERSAIRE
  // =====================================================

  if (project.id === 2) {
    return (
      <motion.div
        whileHover={{
          y: -10,
          rotate: -1.5,
        }}
        className="relative mx-auto w-full max-w-[620px]"
      >

        {/* Halo */}

        <div className="absolute inset-0 rounded-full bg-orange-400/20 blur-[120px]" />

        {/* MacBook */}

        <div className="relative rounded-[28px] border border-white/10 bg-[#111] p-4 shadow-[0_30px_80px_rgba(0,0,0,.45)]">

          {/* Webcam */}

          <div className="mx-auto mb-3 h-2 w-2 rounded-full bg-zinc-600" />

          {/* Ecran */}

          <div className="overflow-hidden rounded-2xl">

            <Image
              src="/projects/fete.jpg"
              alt="Birthday Website"
              width={1200}
              height={700}
              className="w-full object-cover"
              priority
            />

          </div>

          {/* Base du Mac */}

          <div className="mx-auto mt-4 h-3 w-32 rounded-full bg-zinc-700" />

        </div>

        {/* Reflet */}

        <div className="mx-auto h-4 w-[88%] rounded-full bg-white/10 blur-xl" />

      </motion.div>
    );
  }
    // =====================================================
  // MINI QUIZ
  // =====================================================

  if (project.id === 3) {
    return (
      <div className="relative flex h-[340px] items-center justify-center sm:h-[420px]">

        {/* Halo */}

        <div className="absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-[110px]" />

        <motion.div
          animate={{
            y: [-6, 6, -6],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          whileHover={{
            y: -14,
            rotate: 3,
            scale: 1.03,
          }}
          className="
            relative

            rounded-[42px]

            border-[10px]

            border-zinc-900

            bg-black

            shadow-[0_40px_80px_rgba(0,0,0,.45)]

            overflow-hidden

            w-[180px]

            sm:w-[220px]

            md:w-[260px]
          "
        >

          {/* Notch */}

          <div
            className="
              absolute

              left-1/2

              top-3

              -translate-x-1/2

              z-30

              h-5

              w-24

              rounded-full

              bg-black
            "
          />

          <Image
            src="/projects/mobile.png"
            alt="Mini Quiz"
            width={500}
            height={1000}
            className="w-full h-auto object-cover"
            priority
          />

        </motion.div>

      </div>
    );
  }

  // =====================================================
  // PORTFOLIO
  // =====================================================

  return (

    <motion.div

      whileHover={{
        y: -10,
        rotateX: 3,
        rotateY: -3,
      }}

      className="
        relative

        mx-auto

        w-full

        max-w-[700px]
      "
    >

      {/* Halo */}

      <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-[130px]" />

      {/* Ecran */}

      <div
        className="
          relative

          overflow-hidden

          rounded-[26px]

          border

          border-white/10

          bg-[#0E0E0E]

          shadow-[0_40px_90px_rgba(0,0,0,.45)]
        "
      >

        {/* Barre supérieure */}

        <div
          className="
            flex

            items-center

            gap-2

            border-b

            border-white/10

            px-5

            py-4
          "
        >

          <span className="h-3 w-3 rounded-full bg-red-500" />

          <span className="h-3 w-3 rounded-full bg-yellow-400" />

          <span className="h-3 w-3 rounded-full bg-green-500" />

        </div>

        <Image
          src="/projects/port.png"
          alt="Portfolio"
          width={1300}
          height={800}
          className="w-full object-cover"
          priority
        />

      </div>

      {/* Pied de l'écran */}

      <div className="mx-auto h-5 w-40 rounded-b-full bg-zinc-700" />

    </motion.div>

  );
}
