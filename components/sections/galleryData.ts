export interface GalleryItem {
  src: string;
  title: string;
  description: string;

  type?: "image" | "video";
  thumbnail?: string;

  youtubeUrl?: string;
}

export interface GalleryCollection {
  design: GalleryItem[];
  quiz: GalleryItem[];
}

export const galleryData: GalleryCollection = {
  design: [
    {
      src: "/projects/vrai.png",
      title: "Logo",
      description: "Création graphique réalisée avec Canva à partir d'un tableau blanc.",
      type: "image",
    },

        {
     src: "https://urmr6zsh4rhujf88.public.blob.vercel-storage.com/Mitch.mp4",
      title: "Montage vidéo",
      description:
        "Création vidéo réalisée pour un projet créatif.",
      type: "video",
      thumbnail: "/projects/trueLove.png",
      youtubeUrl: "https://www.youtube.com/watch?v=xWvv6O00nlY",
      
      
    },

    {
      src: "/projects/Elykia.png",
      title: "Logo",
      description: "Création graphique réalisée avec Canva à partir d'un tableau blanc.",
      type: "image",
    },

    {
      src: "/projects/fete.jpg",
      title: "Affiche anniversaire",
      description: "Design conçu avec Photoshop.",
      type: "image",
    },

  ],

  quiz: [
    {
      src: "/projects/accueil.jpg",
      title: "Accueil",
      description: "Écran principal de l'application.",
      type: "image",
    },

    {
      src: "/projects/ac.jpg",
      title: "Début du jeu",
      description: "Le jeu commence.",
      type: "image",
    },

     {
      src: "/projects/quest.jpg",
      title: "",
      description: "",
      type: "image",
    },
      {
      src: "/projects/vie.jpg",
      title: "Résultat",
      description: "Gagner des vies en résolvant des opérations.",
      type: "image",
    },
  ],
};
