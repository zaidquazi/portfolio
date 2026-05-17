import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Cat = "All" | "Full Stack" | "Frontend" | "AI";

const projects = [
  {
    title: "AI Chat Application",
    desc: "Real-time conversational AI with streaming responses, history, and a slick chat UI built for speed.",
    tech: ["Next.js", "OpenAI", "Tailwind", "Node"],
    cat: "AI" as Cat,
    grad: "from-purple-500/40 to-blue-500/40",
  },
  {
    title: "E-Commerce Platform",
    desc: "Full storefront with cart, checkout, Stripe payments, and a custom admin dashboard.",
    tech: ["React", "Node", "MongoDB", "Stripe"],
    cat: "Full Stack" as Cat,
    grad: "from-cyan-500/40 to-purple-500/40",
  },
  {
    title: "Portfolio Website",
    desc: "Cinematic developer portfolio with 3D scenes, glassmorphism, and award-winning micro-interactions.",
    tech: ["React", "Three.js", "Framer"],
    cat: "Frontend" as Cat,
    grad: "from-blue-500/40 to-pink-500/40",
  },
  {
    title: "WhatsApp AI Assistant",
    desc: "Bot that handles customer queries on WhatsApp powered by GPT and a knowledge base.",
    tech: ["Node", "Express", "OpenAI", "Twilio"],
    cat: "AI" as Cat,
    grad: "from-emerald-500/40 to-blue-500/40",
  },
  {
    title: "Full Stack Dashboard",
    desc: "Analytics dashboard with real-time charts, RBAC, and a beautifully crafted dark UI.",
    tech: ["Next.js", "Postgres", "Tailwind"],
    cat: "Full Stack" as Cat,
    grad: "from-purple-500/40 to-cyan-500/40",
  },
  {
    title: "Realtime Collaboration",
    desc: "Multi-cursor collaborative document editor with presence, comments, and version history.",
    tech: ["React", "Socket.io", "MongoDB"],
    cat: "Full Stack" as Cat,
    grad: "from-pink-500/40 to-blue-500/40",
  },
];

const cats: Cat[] = ["All", "Full Stack", "Frontend", "AI"];

export function Projects() {
  const [filter, setFilter] = useState<Cat>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto w-full px-4 md:px-8 lg:px-12 xl:px-16">
        <SectionHeading
          eyebrow="03 — Projects"
          title="Selected work"
          subtitle="A glimpse of what I've been crafting lately. More on GitHub."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                filter === c
                  ? "bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)] text-background shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="glass group relative overflow-hidden rounded-2xl"
              >
                <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.grad}`}>
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="absolute inset-0 grid place-items-center font-display text-5xl font-black text-white/20 transition-all duration-500 group-hover:scale-110 group-hover:text-white/30">
                    {p.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--neon-purple)]">{p.cat}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-md bg-white/5 px-2 py-1 text-[11px] font-mono text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-3">
                    <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--neon-blue)] hover:text-[var(--neon-purple)] transition-colors">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                      <Github size={14} /> Code
                    </a>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100" style={{ boxShadow: "inset 0 0 0 1px rgba(168, 85, 247, 0.4), 0 30px 60px -20px rgba(139, 92, 246, 0.4)" }} />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
