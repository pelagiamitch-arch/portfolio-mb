"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "./ProjectsData";
import ProjectMockup from "./ProjectMockup";
import { useState } from "react";
import ProjectGallery from "./ProjectGallery";
import { galleryData } from "./galleryData";

interface Props {
  project: Project;
}
const galleryMap = {
  1: galleryData.design,
  3: galleryData.quiz,
};

export default function ProjectCard({ project }: Props) {

  const [galleryOpen, setGalleryOpen] = useState(false);

const [currentImage, setCurrentImage] = useState(0);

const gallery =
  galleryMap[project.id as keyof typeof galleryMap] ?? [];
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className={`
        relative

        grid
        items-center
        gap-16

        py-24

        lg:grid-cols-2

        ${project.reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* IMAGE */}

      <div className="relative flex justify-center">

        {/* Halo */}

        <div
          className={`
            absolute

            h-[260px]
            w-[260px]

            rounded-full

            bg-gradient-to-r

            ${project.gradient}

            opacity-30

            blur-[90px]

            sm:h-[340px]
            sm:w-[340px]

            md:h-[420px]
            md:w-[420px]
          `}
        />

        {/* Blob */}

        <motion.div

          whileHover={{
            y: -10,
            rotate: -2,
          }}

          transition={{
            duration: .4,
          }}

          className="
            relative

            overflow-hidden

            rounded-[40px]

            border
            border-white/10

            bg-white/5

            backdrop-blur-2xl

            shadow-[0_40px_90px_rgba(0,0,0,.35)]
          "
        >
          <ProjectMockup project={project} />
        </motion.div>

      </div>

      {/* TEXTE */}

      <div
        className="
          text-center

          lg:text-left
        "
      >
        <p
          className="
            mb-4

            uppercase

            tracking-[0.35em]

            text-sm

            text-zinc-400
          "
        >
          {project.category}
        </p>

        <h3
          className="
            text-4xl

            font-black

            sm:text-5xl
          "
        >
          {project.title}
        </h3>

        <p
          className="
            mt-8

            max-w-xl

            text-zinc-400

            leading-8

            mx-auto

            lg:mx-0
          "
        >
          {project.description}
        </p>

        {/* TECHNO */}

        <div
          className="
            mt-10

            flex

            flex-wrap

            justify-center

            gap-3

            lg:justify-start
          "
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full

                border

                border-white/10

                bg-white/5

                px-5

                py-2

                text-sm

                backdrop-blur-xl
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {project.type !== "none" && project.button && (

          <motion.button
  whileHover={{
    x: 6,
  }}
  onClick={() => {

    if (project.type === "gallery") {

      setCurrentImage(0);

      setGalleryOpen(true);

      return;
    }

    if (project.type === "link" && project.link) {

      window.open(project.link, "_blank");

    }

  }}
  className="
    mt-10

    inline-flex

    items-center

    gap-3

    rounded-full

    bg-gradient-to-r

    from-fuchsia-500

    to-cyan-500

    px-7

    py-4

    font-semibold

    text-white
  "
>
  {project.button}

  <ArrowUpRight size={18} />

</motion.button>

        )}

      </div>

      {/* NUMÉRO */}

      <span
        className="
          pointer-events-none

          absolute

          right-0

          top-0

          text-[140px]

          font-black

          leading-none

          text-white/[0.03]

          sm:text-[170px]

          lg:text-[220px]
        "
      >
        0{project.id}
      </span>

      <ProjectGallery
  open={galleryOpen}
  images={gallery}
  current={currentImage}
  onClose={() => setGalleryOpen(false)}
  onPrevious={() =>
    setCurrentImage((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    )
  }
  onNext={() =>
    setCurrentImage((prev) =>
      prev === gallery.length - 1 ? 0 : prev + 1
    )
  }
  onSelect={(index) => setCurrentImage(index)}
/>

    </motion.article>
  );
}