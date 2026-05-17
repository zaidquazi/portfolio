import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const skills = [
  { name: "React", level: 95, color: "#61dafb" },
  { name: "Next.js", level: 90, color: "#ffffff" },
  { name: "JavaScript", level: 95, color: "#f7df1e" },
  { name: "TypeScript", level: 88, color: "#3178c6" },
  { name: "Node.js", level: 90, color: "#8cc84b" },
  { name: "Express.js", level: 88, color: "#a855f7" },
  { name: "MongoDB", level: 85, color: "#47a248" },
  { name: "Tailwind CSS", level: 95, color: "#38bdf8" },
  { name: "HTML / CSS", level: 98, color: "#e34c26" },
  { name: "Firebase", level: 82, color: "#ffca28" },
  { name: "SQL", level: 90, color: "#06b6d4" },
  { name: "Git / GitHub", level: 90, color: "#f05032" },
];

function Ring({ level, color }: { level: number; color: string }) {
  const r = 30;
  const c = 2 * Math.PI * r;
  return (
    <svg className="h-20 w-20 -rotate-90" viewBox="0 0 80 80">
      <circle cx="40" cy="40" r={r} stroke="oklch(1 0 0 / 0.08)" strokeWidth="6" fill="none" />
      <motion.circle
        cx="40" cy="40" r={r}
        stroke={color}
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        whileInView={{ strokeDashoffset: c - (c * level) / 100 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        style={{ filter: `drop-shadow(0 0 6px ${color})` }}
      />
    </svg>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.65_0.22_240/0.1),transparent_70%)]" />

      <div className="relative mx-auto w-full px-4 md:px-8 lg:px-12 xl:px-16">
        <SectionHeading
          eyebrow="02 — Skills"
          title="The toolkit"
          subtitle="Battle-tested technologies I use to ship production-grade products."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -6, rotateX: 8, rotateY: -8 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 text-center transition-colors hover:border-white/30"
            >
              <div
                className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ background: `radial-gradient(circle at center, ${s.color}22, transparent 70%)` }}
              />
              <div className="relative mx-auto grid place-items-center">
                <div className="absolute">
                  <Ring level={s.level} color={s.color} />
                </div>
                <div className="grid h-20 w-20 place-items-center font-display text-lg font-bold" style={{ color: s.color }}>
                  {s.level}%
                </div>
              </div>
              <div className="mt-4 font-display text-base font-medium">{s.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
