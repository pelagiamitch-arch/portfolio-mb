"use client";

import Link from "next/link";
import { Heart, Mail, Phone } from "lucide-react";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07070A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Texte */}

          <div>

            <h2 className="text-3xl font-black">
              Mitch.
            </h2>

            <p className="mt-5 text-gray-400 leading-8 max-w-md">
              Développeuse Front-End, créatrice de contenus et passionnée
              d&apos;intelligence artificielle. Je conçois des expériences
              numériques qui allient créativité, émotion et technologie.
            </p>

          </div>

          {/* Réseaux */}

          <div className="flex md:justify-end gap-5">

            <Link
              href="https://www.linkedin.com/in/mitch-boulessi-85aa51324/"
              target="_blank"
              className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-violet-600 transition"
            >
              <FaLinkedin size={22} />
            </Link>

            <Link
              href="https://wa.me/242XXXXXXXXX"
              target="_blank"
              className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-green-600 transition"
            >
              <FaWhatsapp size={22} />
            </Link>

            <Link
              href="mailto:tonemail@example.com"
              className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-violet-600 transition"
            >
              <Mail size={22} />
            </Link>

            <Link
              href="tel:+242XXXXXXXX"
              className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-violet-600 transition"
            >
              <Phone size={22} />
            </Link>

          </div>

        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mitch. Tous droits réservés.
          </p>

          <p className="flex items-center gap-2 text-gray-500 text-sm">
            Conçu avec <Heart size={15} className="text-red-500" /> en
            utilisant Next.js & Tailwind CSS.
          </p>

        </div>

      </div>
    </footer>
  );
}
