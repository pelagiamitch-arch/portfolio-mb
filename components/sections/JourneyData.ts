export interface JourneyStep {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  badge: string;
  gradient: string;
  icon: string;
}

export const journey: JourneyStep[] = [
  {
    id: 1,
    title: "Baccalauréat Scientifique",
    subtitle: "École Privée Louis-Grégory",
    period: "2018 — 2021",
    description:
      "Obtention d'un baccalauréat scientifique, base de mon parcours vers les métiers du numérique.",
    badge: "Fondations",
    gradient: "from-sky-500 to-cyan-500",
    icon: "🎓",
  },

  {
    id: 2,
    title: "Licence en Génie Logiciel",
    subtitle: "Institut International 2i",
    period: "2024 — 2026",
    description:
      "Formation en développement logiciel, intelligence artificielle, bases de données, architecture logicielle et gestion de projets informatiques.",
    badge: "Diplôme",
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    icon: "💻",
  },

  {
    id: 3,
    title: "NASA Space Apps Challenge",
    subtitle: "Cheffe d'équipe • Équipe gagnante",
    period: "05 — 06 Octobre 2024",
    description:
      "Direction d'une équipe de cinq membres lors du NASA Space Apps Challenge autour des tempêtes géomagnétiques de Mai 2024.",
    badge: "Gagnante",
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    icon: "🚀",
  },

  {
    id: 4,
    title: "Africa's Talking Hackathon",
    subtitle: "Créer l'avenir avec les API",
    period: "Novembre 2024",
    description:
      "Participation à un hackathon panafricain centré sur les API avec une équipe de quatre membres. Projet récompensé parmi les gagnants.",
    badge: "Gagnante",
    gradient: "from-cyan-500 via-sky-500 to-blue-600",
    icon: "🏆",
  },

  {
    id: 5,
    title: "Horizon For Services",
    subtitle: "Stage professionnel",
    period: "2025",
    description:
      "Première immersion professionnelle dans l'intégration de solutions informatiques et les systèmes de géolocalisation.",
    badge: "Expérience",
    gradient: "from-emerald-500 via-green-500 to-lime-500",
    icon: "💼",
  },
];