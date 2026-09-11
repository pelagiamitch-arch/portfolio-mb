export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  gradient: string;
  reverse?: boolean;
  button?: string;
  link?: string;
type?: "link" | "gallery" | "none";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Design & Graphisme",
    category: "Création visuelle",
    description:
      "Une collection de logos, affiches, flyers, vidéos, montages et créations réalisées avec Canva, Photoshop, CapCut et l'Intelligence Artificielle.",

    image: "/projects/design.png",

    technologies: [
      "Canva",
      "Photoshop",
      "CapCut",
      "IA",
    ],

    gradient:
      "from-fuchsia-500 via-violet-500 to-cyan-500",

    button: "Explorer la galerie",
    type: "gallery",
  },

  {
    id: 2,

    title: "Site Anniversaire",

    category: "Développement Web",

    description:
      "Création d'un site d'anniversaire moderne, entièrement développé en HTML, CSS et JavaScript avec une interface élégante et responsive.",

    image: "/projects/birthday.png",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    gradient:
      "from-orange-400 via-amber-500 to-yellow-400",
      button: "Voir le site",
      type: "link",
    link: "https://pelagiamitch-arch.github.io/anniva/",

    reverse: true,
  },

  {
    id: 3,

    title: "Mini Quiz",

    category: "Application Android",

    description:
      "Application mobile développée avec Android Studio permettant de jouer à un mini quiz interactif avec plusieurs questions.",

    image: "/projects/mobile.png",

    technologies: [
      "Android Studio",
      "Java",
    ],

    gradient:
      "from-cyan-500 via-sky-500 to-blue-600",
      button: "Découvrir l'application",
      type: "gallery",
  },

  {
    id: 4,

    title: "Portfolio",

    category: "Développement Front-End",

    description:
      "Mon portfolio personnel imaginé comme une véritable expérience numérique mêlant créativité, animation et design moderne.",

    image: "/projects/portfolio.png",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
    ],

    gradient:
      "from-violet-500 via-indigo-500 to-cyan-500",

    reverse: true,
  },
];