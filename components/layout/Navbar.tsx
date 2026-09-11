"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const links = [
  { name: "Accueil", href: "#hero" },
  { name: "À propos", href: "#about" },
  { name: "Vision", href: "#vision" },
  { name: "Projets", href: "#projects" },
  { name: "Expérience", href: "#experience" },
  { name: "Parcours", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <header
        className={`
          fixed
          top-0
          left-0
          z-[100]
          w-full
          transition-all
          duration-300

          ${
            scrolled
              ? "border-b border-white/10 bg-[#09090B]/90 backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-20
            w-full
            max-w-7xl
            items-center
            justify-between

            px-5

            sm:px-6

            md:px-8

            lg:px-10
          "
        >
          {/* =========================
              LOGO
          ========================= */}

          <Link
            href="#hero"
            onClick={closeMenu}
            className="
              relative
              z-[110]

              shrink-0

              text-2xl
              font-black
              tracking-tight

              sm:text-3xl
            "
          >
            MB<span className="text-violet-500">.</span>
          </Link>

          {/* =========================
              NAVIGATION DESKTOP
          ========================= */}

          <nav
            className="
              hidden

              lg:flex

              items-center

              gap-6

              xl:gap-9
            "
          >
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  whitespace-nowrap

                  text-sm
                  text-zinc-300

                  transition
                  duration-300

                  hover:text-white

                  xl:text-[15px]
                "
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* =========================
              BOUTON CONTACT DESKTOP
          ========================= */}

          <div className="hidden lg:flex">
            <a
              href="#contact"
              className="
                group

                relative
                inline-flex
                items-center
                justify-center

                overflow-hidden

                rounded-full

                bg-gradient-to-r
                from-violet-600
                via-fuchsia-500
                to-cyan-500

                px-5
                py-2.5

                text-sm
                font-semibold
                text-white

                shadow-lg
                shadow-violet-500/20

                transition
                duration-300

                hover:-translate-y-0.5
                hover:shadow-violet-500/40

                xl:px-6
              "
            >
              {/* Effet lumineux */}

              <span
                className="
                  absolute
                  inset-0

                  -translate-x-full

                  bg-white/20

                  transition
                  duration-500

                  group-hover:translate-x-full
                "
              />

              <span className="relative z-10">
                Me contacter
              </span>
            </a>
          </div>

          {/* =========================
              BOUTON MENU MOBILE
          ========================= */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? "Fermer le menu"
                : "Ouvrir le menu"
            }
            aria-expanded={menuOpen}
            className="
              relative
              z-[110]

              flex

              h-11
              w-11

              shrink-0

              items-center
              justify-center

              rounded-full

              border
              border-white/10

              bg-black/40

              backdrop-blur-xl

              transition
              duration-300

              hover:border-violet-500/50
              hover:bg-violet-500/10

              lg:hidden
            "
          >
            {menuOpen ? (
              <X
                size={25}
                strokeWidth={2}
                className="text-white"
              />
            ) : (
              /* =========================
                 3 TRAITS DU MENU
              ========================= */

              <span
                className="
                  flex
                  w-5
                  flex-col
                  items-center
                  justify-center
                  gap-[5px]
                "
              >
                <span
                  className="
                    block
                    h-[2px]
                    w-5
                    rounded-full
                    bg-white
                  "
                />

                <span
                  className="
                    block
                    h-[2px]
                    w-5
                    rounded-full
                    bg-white
                  "
                />

                <span
                  className="
                    block
                    h-[2px]
                    w-5
                    rounded-full
                    bg-white
                  "
                />
              </span>
            )}
          </button>
        </div>
      </header>

      {/* =========================
          OVERLAY MOBILE
      ========================= */}

      <div
        onClick={closeMenu}
        className={`
          fixed
          inset-0
          z-[80]

          bg-black/50

          backdrop-blur-sm

          transition-opacity
          duration-300

          lg:hidden

          ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* =========================
          MENU MOBILE
      ========================= */}

      <aside
        className={`
          fixed
          top-0
          right-0
          z-[90]

          h-screen

          w-[82%]
          max-w-[380px]

          border-l
          border-white/10

          bg-[#09090B]

          shadow-[-20px_0_80px_rgba(0,0,0,.45)]

          transition-transform
          duration-500
          ease-in-out

          lg:hidden

          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Décor */}

        <div
          className="
            pointer-events-none
            absolute

            -right-24
            top-20

            h-64
            w-64

            rounded-full

            bg-violet-600/20

            blur-[100px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute

            -left-24
            bottom-20

            h-56
            w-56

            rounded-full

            bg-cyan-500/10

            blur-[100px]
          "
        />

        {/* Contenu */}

        <div
          className="
            relative
            flex
            h-full
            flex-col

            px-7
            pb-10
            pt-28

            sm:px-10
          "
        >
          {/* Petit titre */}

          <p
            className="
              mb-10

              text-xs
              uppercase

              tracking-[0.3em]

              text-violet-400
            "
          >
            Navigation
          </p>

          {/* Liens */}

          <nav
            className="
              flex
              flex-col

              gap-6

              sm:gap-7
            "
          >
            {links.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="
                  group

                  flex
                  items-center
                  gap-4

                  text-xl
                  font-semibold

                  text-zinc-300

                  transition
                  duration-300

                  hover:translate-x-2
                  hover:text-white

                  sm:text-2xl
                "
              >
                <span
                  className="
                    text-xs
                    font-medium

                    text-violet-500/60

                    transition
                    duration-300

                    group-hover:text-violet-400
                  "
                >
                  0{index + 1}
                </span>

                <span>
                  {item.name}
                </span>
              </a>
            ))}
          </nav>

          {/* =========================
              CONTACT MOBILE
          ========================= */}

          <div className="mt-auto">
            <a
              href="#contact"
              onClick={closeMenu}
              className="
                group

                relative

                flex
                w-full

                items-center
                justify-center

                overflow-hidden

                rounded-2xl

                bg-gradient-to-r
                from-violet-600
                via-fuchsia-500
                to-cyan-500

                px-6
                py-4

                text-base
                font-bold
                text-white

                shadow-xl
                shadow-violet-500/20

                transition
                duration-300

                hover:-translate-y-1
                hover:shadow-violet-500/40
              "
            >
              <span
                className="
                  absolute
                  inset-0

                  -translate-x-full

                  bg-white/20

                  transition
                  duration-500

                  group-hover:translate-x-full
                "
              />

              <span className="relative z-10">
                Me contacter
              </span>
            </a>

            <p
              className="
                mt-5

                text-center

                text-xs

                text-zinc-500
              "
            >
              Créative Developer • Web • AI • Media
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}