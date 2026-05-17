import { motion } from "framer-motion";
import { Code2, Layers, Rocket, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { value: "3+", label: "Years Experience", Icon: Rocket },
  { value: "40+", label: "Projects Shipped", Icon: Layers },
  { value: "20+", label: "Technologies", Icon: Code2 },
  { value: "100%", label: "Client Focus", Icon: Sparkles },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto w-full px-4 md:px-8 lg:px-12 xl:px-16">
        <SectionHeading eyebrow="01 — About" title="A developer who designs, a designer who ships" />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-blue)] opacity-30 blur-2xl" />
            <div className="glass-strong relative overflow-hidden rounded-3xl p-1">
              <div className="rounded-[1.4rem] bg-gradient-to-br from-[var(--neon-purple)]/20 via-card to-[var(--neon-blue)]/20 p-8">
                <div className="aspect-square overflow-hidden rounded-2xl bg-card border border-white/5">
                  <img
                    src="/2.png"
                    alt="Zaid Husain"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="font-display text-lg font-semibold">Zaid Husain</div>
                    <div className="text-sm text-muted-foreground">Software Engineer</div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-mono text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Online
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a full stack engineer obsessed with the craft of building products people actually love using. From scalable backend APIs to pixel-perfect interfaces, I bring ideas to life with the <span className="text-foreground font-medium">MERN stack</span>, modern tooling, and a relentless attention to detail.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              My happy place is the intersection of clean architecture and beautiful UI/UX — where performance, accessibility, and design feel like one thing, not three.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass group rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-[var(--neon-purple)]/40"
                >
                  <s.Icon className="mb-3 h-5 w-5 text-[var(--neon-purple)] transition-transform group-hover:scale-110" />
                  <div className="font-display text-3xl font-bold text-gradient">{s.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
