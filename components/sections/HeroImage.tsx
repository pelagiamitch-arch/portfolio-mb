"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="
        relative
        order-1
        mx-auto
        flex
        items-center
        justify-center

        w-full
        max-w-[320px]

        sm:max-w-[380px]
        md:max-w-[470px]
        lg:max-w-[540px]

        lg:order-2
      "
    >
      {/* Halo */}

      <div
        className="
          absolute

          h-[260px]
          w-[260px]

          sm:h-[330px]
          sm:w-[330px]

          md:h-[420px]
          md:w-[420px]

          lg:h-[500px]
          lg:w-[500px]

          rounded-full

          bg-gradient-to-r
          from-violet-600/30
          via-fuchsia-500/20
          to-cyan-500/30

          blur-[70px]
          lg:blur-[100px]
        "
      />

      {/* Cercle 1 */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          rounded-full

          border
          border-violet-500/20

          h-[270px]
          w-[270px]

          sm:h-[340px]
          sm:w-[340px]

          md:h-[430px]
          md:w-[430px]

          lg:h-[500px]
          lg:w-[500px]
        "
      />

      {/* Cercle 2 */}

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          rounded-full

          border
          border-cyan-400/20

          h-[320px]
          w-[320px]

          sm:h-[390px]
          sm:w-[390px]

          md:h-[490px]
          md:w-[490px]

          lg:h-[570px]
          lg:w-[570px]
        "
      />

      {/* Photo */}

      <motion.div
        whileHover={{
          y: -10,
          rotate: -2,
        }}
        transition={{ duration: .4 }}
        className="
          relative
          z-10

          overflow-hidden

          rounded-[36px]

          border
          border-white/10

          bg-zinc-900

          shadow-[0_0_60px_rgba(0,0,0,.35)]
        "
      >
        <Image
          src="/images/mitch.png"
          alt="MB"

          width={450}
          height={600}

          priority

          className="
            object-cover

            h-[330px]
            w-[240px]

            sm:h-[420px]
            sm:w-[300px]

            md:h-[520px]
            md:w-[370px]

            lg:h-[580px]
            lg:w-[420px]
          "
        />
      </motion.div>

      {/* Carte gauche */}

      <motion.div
        animate={{ y: [-6, 8, -6] }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          z-20

          hidden
          md:block

          left-0
          top-10

          rounded-2xl

          border
          border-white/10

          bg-black/70

          px-5
          py-3

          backdrop-blur-xl
        "
      >
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
          Creative
        </p>

        <p className="font-semibold">
          UI / UX
        </p>
      </motion.div>

      {/* Carte droite */}

      <motion.div
        animate={{ y: [8, -6, 8] }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          z-20

          hidden
          md:block

          right-0
          bottom-12

          rounded-2xl

          border
          border-white/10

          bg-black/70

          px-5
          py-3

          backdrop-blur-xl
        "
      >
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
          Passion
        </p>

        <p className="font-semibold">
          AI • Web • Media
        </p>
      </motion.div>
    </motion.div>
  );
}