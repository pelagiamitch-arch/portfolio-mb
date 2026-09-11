"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  ExternalLink,
  Maximize2,
} from "lucide-react";

import { GalleryItem } from "./galleryData";

interface Props {
  open: boolean;
  images: GalleryItem[];
  current: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

export default function ProjectGallery({
  open,
  images,
  current,
  onClose,
  onPrevious,
  onNext,
  onSelect,
}: Props) {
  const [fullscreen, setFullscreen] = useState(false);

  const currentImage = images[current];

  const handlePrevious = () => {
    setFullscreen(false);
    onPrevious();
  };

  const handleNext = () => {
    setFullscreen(false);
    onNext();
  };

  const handleSelect = (index: number) => {
    setFullscreen(false);
    onSelect(index);
  };

  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (fullscreen) {
          setFullscreen(false);
        } else {
          onClose();
        }
      }

      if (e.key === "ArrowLeft") {
        handlePrevious();
      }

      if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, fullscreen, onClose, onNext, onPrevious]);

  // Empêche le scroll de la page lorsque la galerie est ouverte
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!currentImage) {
    return null;
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              fixed
              inset-0
              z-[999]
              flex
              items-center
              justify-center
              bg-black/80
              p-3
              backdrop-blur-xl
              sm:p-6
              lg:p-8
            "
            onClick={onClose}
          >
            {/* Halo décoratif */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[300px]
                w-[300px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-fuchsia-500/10
                blur-[120px]
                sm:h-[500px]
                sm:w-[500px]
              "
            />

            {/* FENÊTRE PRINCIPALE */}
            <motion.div
              initial={{
                scale: 0.94,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.94,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                flex
                max-h-[95vh]
                w-full
                max-w-7xl
                flex-col
                overflow-hidden
                rounded-[24px]
                border
                border-white/10
                bg-[#0F0F11]
                shadow-[0_40px_120px_rgba(0,0,0,.55)]
                sm:rounded-[30px]
                lg:rounded-[34px]
              "
            >
              {/* HEADER */}
              <div
                className="
                  flex
                  shrink-0
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  px-4
                  py-3
                  sm:px-6
                  sm:py-4
                  lg:px-8
                "
              >
                <div>
                  <h2 className="text-lg font-bold sm:text-xl lg:text-2xl">
                    Galerie
                  </h2>

                  <p className="mt-1 text-xs text-zinc-400 sm:text-sm">
                    {current + 1} / {images.length}
                  </p>
                </div>

                {/* X GALERIE */}
                <motion.button
                  type="button"
                  whileHover={{
                    rotate: 90,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullscreen(false);
                    onClose();
                  }}
                  className="
                    relative
                    z-[100]
                    flex
                    h-10
                    w-10
                    shrink-0
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/10
                    text-white
                    shadow-lg
                    backdrop-blur-xl
                    transition
                    hover:bg-white/20
                    sm:h-11
                    sm:w-11
                  "
                  aria-label="Fermer la galerie"
                >
                  <X size={21} strokeWidth={2.5} />
                </motion.button>
              </div>

              {/* CONTENU */}
             <div
  className="
    grid
    min-h-0
    flex-1
    gap-4
    overflow-y-auto
    p-3
    sm:gap-6
    sm:p-5
    lg:grid-cols-[minmax(0,1fr)_240px]
    lg:gap-7
    lg:overflow-hidden
    lg:p-7
  "
>
                {/* ================================================= */}
                {/* MEDIA PRINCIPAL */}
                {/* ================================================= */}

               <div className="min-w-0 lg:min-h-0 lg:overflow-y-auto lg:pr-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`gallery-media-${current}`}
                      initial={{
                        opacity: 0,
                        scale: 0.96,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.96,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      {/* IMAGE */}
                      {currentImage.type !== "video" && (
                        <div
                          className="
                            relative
                            aspect-[4/3]
                            w-full
                            overflow-hidden
                            rounded-[20px]
                            border
                            border-white/10
                            bg-black
                            sm:aspect-[16/10]
                            sm:rounded-[26px]
                          "
                        >
                          <button
                            type="button"
                            onClick={() => setFullscreen(true)}
                            className="
                              absolute
                              inset-0
                              z-10
                              cursor-zoom-in
                            "
                            aria-label="Agrandir l'image"
                          >
                            <Image
                              src={currentImage.src}
                              alt={currentImage.title}
                              fill
                              priority
                              sizes="
                                (max-width: 640px) 100vw,
                                (max-width: 1024px) 90vw,
                                75vw
                              "
                              className="
                                object-cover
                                transition-transform
                                duration-700
                                hover:scale-105
                              "
                            />
                          </button>

                          {/* Dégradé */}
                          <div
                            className="
                              pointer-events-none
                              absolute
                              inset-0
                              bg-gradient-to-t
                              from-black/80
                              via-transparent
                              to-transparent
                            "
                          />

                          {/* Bouton agrandir */}
                          <div
                            className="
                              pointer-events-none
                              absolute
                              right-3
                              top-3
                              z-20
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-full
                              bg-black/60
                              backdrop-blur-xl
                              sm:right-5
                              sm:top-5
                              sm:h-10
                              sm:w-10
                            "
                          >
                            <Maximize2 size={17} />
                          </div>

                          {/* Texte */}
                          <div
                            className="
                              pointer-events-none
                              absolute
                              bottom-0
                              left-0
                              right-0
                              z-20
                              p-4
                              sm:p-6
                              lg:p-8
                            "
                          >
                            <h3
                              className="
                                text-xl
                                font-black
                                sm:text-2xl
                                lg:text-3xl
                              "
                            >
                              {currentImage.title}
                            </h3>

                            <p
                              className="
                                mt-2
                                max-w-2xl
                                text-xs
                                leading-5
                                text-zinc-300
                                sm:text-sm
                                sm:leading-6
                                lg:text-base
                              "
                            >
                              {currentImage.description}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* VIDÉO */}
                      {currentImage.type === "video" && (
                        <div className="w-full">
                          <div
                            className="
                              relative
                              aspect-video
                              w-full
                              overflow-hidden
                              rounded-[20px]
                              border
                              border-white/10
                              bg-black
                              sm:rounded-[26px]
                            "
                          >
                            <video
                              src={currentImage.src}
                              poster={currentImage.thumbnail}
                              controls
                              playsInline
                              preload="metadata"
                              className="
                                h-full
                                w-full
                                object-contain
                                bg-black
                              "
                            />

                            <div
                              className="
                                pointer-events-none
                                absolute
                                left-3
                                top-3
                                z-20
                                flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-white/10
                                bg-black/65
                                px-3
                                py-1.5
                                text-xs
                                font-semibold
                                backdrop-blur-xl
                                sm:left-5
                                sm:top-5
                                sm:px-4
                                sm:py-2
                                sm:text-sm
                              "
                            >
                              <Play
                                size={13}
                                fill="currentColor"
                              />

                              Vidéo
                            </div>
                          </div>

                          <div
                            className="
                              mt-4
                              rounded-2xl
                              border
                              border-white/10
                              bg-white/[0.03]
                              p-4
                              sm:p-5
                            "
                          >
                            <h3 className="text-xl font-black sm:text-2xl">
                              {currentImage.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-zinc-400">
                              {currentImage.description}
                            </p>

                            {currentImage.youtubeUrl && (
                              <motion.a
                                href={currentImage.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{
                                  y: -3,
                                  scale: 1.01,
                                }}
                                whileTap={{
                                  scale: 0.98,
                                }}
                                className="
                                  mt-4
                                  inline-flex
                                  w-full
                                  items-center
                                  justify-center
                                  gap-2
                                  rounded-2xl
                                  bg-gradient-to-r
                                  from-red-500
                                  via-fuchsia-500
                                  to-violet-500
                                  px-4
                                  py-3.5
                                  text-sm
                                  font-bold
                                  text-white
                                  shadow-lg
                                  shadow-fuchsia-500/20
                                  transition
                                  hover:brightness-110
                                  sm:w-auto
                                  sm:px-5
                                  sm:py-4
                                "
                              >
                                <Play size={17} fill="currentColor" />

                                Voir cette création sur YouTube

                                <ExternalLink size={15} />
                              </motion.a>
                            )}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* NAVIGATION MOBILE */}
                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      justify-between
                      gap-3
                      lg:hidden
                    "
                  >
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.95 }}
                      onClick={handlePrevious}
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-4
                        py-2.5
                        text-xs
                        font-medium
                        transition
                        hover:bg-white/10
                        sm:px-5
                        sm:py-3
                        sm:text-sm
                      "
                    >
                      <ChevronLeft size={16} />
                      Précédent
                    </motion.button>

                    <span className="text-xs text-zinc-500">
                      {current + 1} / {images.length}
                    </span>

                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.95 }}
                      onClick={handleNext}
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        bg-gradient-to-r
                        from-fuchsia-500
                        via-violet-500
                        to-cyan-500
                        px-4
                        py-2.5
                        text-xs
                        font-semibold
                        text-white
                        shadow-lg
                        sm:px-5
                        sm:py-3
                        sm:text-sm
                      "
                    >
                      Suivant
                      <ChevronRight size={16} />
                    </motion.button>
                  </div>
                </div>

                {/* MINIATURES */}
                <div
                  className="
                    flex
                    min-w-0
                    gap-3
                    overflow-x-auto
                    pb-1
                    lg:max-h-[calc(95vh-170px)]
                    lg:flex-col
                    lg:overflow-x-hidden
                    lg:overflow-y-auto
                    lg:pr-1
                  "
                >
                  {images.map((image, index) => (
                    <motion.button
                      type="button"
                      key={`thumbnail-${index}`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleSelect(index)}
                      aria-label={`Afficher ${image.title}`}
                      className={`
                        relative
                        shrink-0
                        overflow-hidden
                        rounded-xl
                        border
                        transition-all
                        sm:rounded-2xl
                        lg:w-full
                        ${
                          current === index
                            ? "border-fuchsia-500 shadow-lg shadow-fuchsia-500/10"
                            : "border-white/10"
                        }
                        h-20
                        w-28
                        sm:h-24
                        sm:w-36
                        lg:h-32
                      `}
                    >
                      {image.type !== "video" && (
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          sizes="180px"
                          className="object-cover"
                        />
                      )}

                      {image.type === "video" && (
                        <>
                          {image.thumbnail && (
                            <Image
                              src={image.thumbnail}
                              alt={image.title}
                              fill
                              sizes="180px"
                              className="object-cover"
                            />
                          )}

                          <div
                            className="
                              pointer-events-none
                              absolute
                              inset-0
                              flex
                              items-center
                              justify-center
                              bg-black/20
                            "
                          >
                            <div
                              className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-full
                                bg-black/70
                                text-white
                                shadow-xl
                                backdrop-blur-xl
                                sm:h-11
                                sm:w-11
                              "
                            >
                              <Play
                                size={17}
                                fill="currentColor"
                                className="sm:h-5 sm:w-5"
                              />
                            </div>
                          </div>
                        </>
                      )}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/70
                          via-transparent
                          to-transparent
                        "
                      />

                      <div
                        className="
                          pointer-events-none
                          absolute
                          bottom-0
                          left-0
                          right-0
                          truncate
                          px-2
                          py-2
                          text-left
                          text-[10px]
                          font-semibold
                          text-white
                          sm:text-xs
                        "
                      >
                        {image.title}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* FOOTER */}
              <div
                className="
                  hidden
                  shrink-0
                  items-center
                  justify-between
                  border-t
                  border-white/10
                  px-5
                  py-4
                  sm:px-6
                  lg:flex
                  lg:px-8
                "
              >
                <div>
                  <p className="text-sm text-zinc-300">
                    {currentImage.title}
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    {currentImage.type === "video"
                      ? "Vidéo"
                      : "Image"}{" "}
                    {current + 1} sur {images.length}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePrevious}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-5
                      py-3
                      text-sm
                      backdrop-blur-xl
                      transition
                      hover:bg-white/10
                    "
                  >
                    <ChevronLeft size={16} />
                    Précédent
                  </motion.button>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-gradient-to-r
                      from-fuchsia-500
                      via-violet-500
                      to-cyan-500
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      shadow-lg
                    "
                  >
                    Suivant
                    <ChevronRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

     {/* ================================================= */}
{/* MODE PLEIN ÉCRAN */}
{/* ================================================= */}

{fullscreen &&
  currentImage.type !== "video" &&
  typeof document !== "undefined" &&
  createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="
          fixed
          inset-0
          z-[999999]
          flex
          items-center
          justify-center
          bg-black
          p-3
          sm:p-6
          lg:p-8
        "
        onClick={() => setFullscreen(false)}
      >
        {/* BOUTON X */}
        <motion.button
          type="button"
          whileHover={{
            rotate: 90,
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setFullscreen(false);
          }}
          className="
            fixed
            right-3
            top-3
            z-[1000000]
            flex
            h-12
            w-12
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border-2
            border-white
            bg-white
            text-black
            shadow-[0_8px_30px_rgba(0,0,0,0.9)]
            transition-all
            duration-200
            hover:bg-zinc-100
            active:scale-95
            sm:right-5
            sm:top-5
            sm:h-14
            sm:w-14
            lg:right-8
            lg:top-8
            lg:h-16
            lg:w-16
          "
          aria-label="Fermer le plein écran"
        >
          <X
            size={28}
            strokeWidth={3}
            className="sm:h-8 sm:w-8"
          />
        </motion.button>

        {/* IMAGE */}
        <motion.div
          initial={{
            scale: 0.9,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 0.9,
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            relative
            z-10
            h-full
            w-full
            max-h-[90vh]
            max-w-7xl
          "
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={currentImage.src}
            alt={currentImage.title}
            fill
            sizes="100vw"
            className="pointer-events-none object-contain"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  )}
    </>
  );
}
