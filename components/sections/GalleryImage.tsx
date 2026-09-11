"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GalleryItem } from "./galleryData";

interface GalleryImageProps {
  item: GalleryItem;
  index: number;
}

export default function GalleryImage({
  item,
  index,
}: GalleryImageProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="
        group

        overflow-hidden

        rounded-[26px]

        border
        border-white/10

        bg-white/[0.03]

        backdrop-blur-xl

        shadow-[0_20px_70px_rgba(0,0,0,.35)]

        transition-all
        duration-500
      "
    >
      {/* Image */}

      <div
        className="
          relative

          aspect-[4/5]

          overflow-hidden
        "
      >
        <Image
          src={item.src}
          alt={item.title}
          fill
          sizes="(max-width:640px) 100vw,
                 (max-width:1024px) 50vw,
                 33vw"
          className="
            object-cover

            transition-transform

            duration-700

            group-hover:scale-110
          "
        />

        {/* Dégradé */}

        <div
          className="
            absolute

            inset-0

            bg-gradient-to-t

            from-black/70

            via-transparent

            to-transparent
          "
        />

        {/* Halo */}

        <div
          className="
            absolute

            -bottom-10

            left-1/2

            h-24

            w-24

            -translate-x-1/2

            rounded-full

            bg-fuchsia-500/20

            blur-3xl
          "
        />
      </div>

      {/* Texte */}

      <div
        className="
          space-y-3

          p-5

          sm:p-6
        "
      >
        <h3
          className="
            text-lg

            font-bold

            text-white

            sm:text-xl
          "
        >
          {item.title}
        </h3>

        <p
          className="
            text-sm

            leading-7

            text-zinc-400

            sm:text-base
          "
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}