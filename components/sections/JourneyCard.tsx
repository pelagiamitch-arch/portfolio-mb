"use client";

import { motion } from "framer-motion";
import { JourneyStep } from "./JourneyData";

interface Props {
  step: JourneyStep;
  index: number;
}

export default function JourneyCard({
  step,
  index,
}: Props) {

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: .7,
        delay: index * .12,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
        group

        relative

        overflow-hidden

        rounded-[34px]

        border
        border-white/10

        bg-white/[0.05]

        backdrop-blur-2xl

        shadow-[0_30px_90px_rgba(0,0,0,.30)]

        transition-all

        duration-500
      "
    >

      {/* Halo */}

      <div
        className={`
          absolute

          -right-10
          -top-10

          h-36
          w-36

          rounded-full

          bg-gradient-to-r

          ${step.gradient}

          opacity-20

          blur-[70px]

          transition-all

          duration-700

          group-hover:scale-125
        `}
      />

      {/* Contenu */}

      <div
        className="
          relative

          z-10

          p-6

          sm:p-8

          lg:p-9
        "
      >

        {/* Ligne supérieure */}

        <div
          className="
            flex

            items-start

            justify-between

            gap-4
          "
        >

          {/* Icône */}

          <div
            className={`
              flex

              h-16
              w-16

              items-center

              justify-center

              rounded-2xl

              bg-gradient-to-r

              ${step.gradient}

              text-3xl

              shadow-xl

              shrink-0
            `}
          >
            {step.icon}
          </div>

          {/* Badge */}

          <span
            className="
              rounded-full

              border

              border-white/10

              bg-white/5

              px-4

              py-2

              text-xs

              font-semibold

              uppercase

              tracking-[0.2em]

              text-zinc-300

              backdrop-blur-xl

              whitespace-nowrap
            "
          >
            {step.badge}
          </span>

        </div>

        {/* Date */}

        <p
          className="
            mt-8

            text-sm

            uppercase

            tracking-[0.35em]

            text-zinc-500
          "
        >
          {step.period}
        </p>

        {/* Titre */}

        <h3
          className="
            mt-3

            text-2xl

            font-black

            leading-tight

            text-white

            sm:text-3xl
          "
        >
          {step.title}
        </h3>

        {/* Sous-titre */}

        <p
          className="
            mt-3

            text-lg

            font-medium

            text-zinc-300
          "
        >
          {step.subtitle}
        </p>

        {/* Description */}

        <p
          className="
            mt-6

            leading-8

            text-zinc-400

            text-base
          "
        >
          {step.description}
        </p>

        {/* Barre colorée */}

        <div
          className={`
            mt-8

            h-1.5

            w-24

            rounded-full

            bg-gradient-to-r

            ${step.gradient}

            transition-all

            duration-500

            group-hover:w-36
          `}
        />

      </div>

    </motion.article>
  );
}