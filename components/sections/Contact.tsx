"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {

    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue.");
      }

      setStatus("success");

      // On vide les champs uniquement après succès
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };
  return (
    <section
      id="contact"
      className="bg-[#09090B] py-28 px-4 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[4px] text-violet-400 font-semibold">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Donnons vie à votre prochain projet.
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-8">
            Une idée, un projet ou simplement une envie déchanger ?
            Je serai ravie den discuter avec vous.
          </p>
        </motion.div>

        <div className="grid min-w-0 grid-cols-1 gap-12 lg:grid-cols-2">

          {/* Informations */}

          <motion.div
            initial={{ opacity:0, x:-30 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.6 }}
            className="min-w-0 space-y-6"
          >

            <a
  href="mailto:mitchboulessi731@gmail.com"
  className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/5"
>
              <div className="w-14 h-14 rounded-xl bg-violet-600 flex items-center justify-center">
                <Mail />
              </div>

              <div className="min-w-0">
                <p className="text-gray-400 text-sm">
                  Email
                </p>

                <h3 className="break-all text-lg font-semibold">
                   mitchboulessi731@gmail.com
                  </h3>
              </div>
            </a>

            <a
  href="tel:+242067608379"
  className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/5"
>
              <div className="w-14 h-14 rounded-xl bg-violet-600 flex items-center justify-center">
                <Phone />
              </div>

              <div className="min-w-0">
                <p className="text-gray-400 text-sm">
                  Téléphone
                </p>

                <h3 className="text-lg font-semibold">
                  +242 06 760 83 79
                </h3>
              </div>
           </a>

           <a
  href="https://www.google.com/maps/search/?api=1&query=Pointe-Noire+Congo"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/5"
>
              <div className="w-14 h-14 rounded-xl bg-violet-600 flex items-center justify-center">
                <MapPin />
              </div>

              <div className="min-w-0">
                <p className="text-gray-400 text-sm">
                  Localisation
                </p>

                <h3 className="text-lg font-semibold">
                  Pointe-Noire, Congo
                </h3>
              </div>
            </a>

          </motion.div>

          {/* Formulaire */}

          <motion.form
            initial={{ opacity:0, x:30 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.6 }}
            onSubmit={handleSubmit}
            className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <div className="space-y-6">

           <input
  type="text"
  placeholder="Votre nom"
  value={name}
  onChange={(e) => setName(e.target.value)}
  required
  className="w-full rounded-xl bg-black/30 border border-white/10 px-5 py-4 outline-none focus:border-violet-500"
/>

            <input
  type="email"
  placeholder="Votre adresse email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  className="w-full rounded-xl bg-black/30 border border-white/10 px-5 py-4 outline-none focus:border-violet-500"
/>
             <textarea
  rows={6}
  placeholder="Parlez-moi de votre projet..."
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  required
  className="w-full rounded-xl bg-black/30 border border-white/10 px-5 py-4 outline-none resize-none focus:border-violet-500"
/>
<button
  type="submit"
  disabled={status === "loading"}
  className="flex items-center justify-center gap-3 w-full rounded-xl bg-violet-600 py-4 font-semibold transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
>
  {status === "loading"
    ? "Envoi en cours..."
    : status === "success"
    ? "Message envoyé ✓"
    : "Envoyer le message"}

  {status === "loading" ? (
    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
  ) : (
    <Send size={18} />
  )}
</button>

{status === "success" && (
  <p className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-center text-sm text-green-400">
    Merci ! Votre message a bien été envoyé. Je vous répondrai dès que possible.
  </p>
)}

{status === "error" && (
  <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-center text-sm text-red-400">
    Une erreur est survenue lors de l&apos;envoi. Veuillez réessayer.
  </p>
)}

            </div>

          </motion.form>

        </div>

      </div>
    </section>
  );
}