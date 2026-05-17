import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";


const techIcons = [
  { src: "/icons/html.mp4", type: "video", position: { top: "12%", left: "6%" } },
  { src: "/icons/css.mp4", type: "video", position: { top: "12%", right: "6%" } },
  { src: "/icons/java-script.png", type: "image", position: { top: "36%", left: "2%" } },
  { src: "/icons/python.png", type: "image", position: { top: "36%", right: "2%" } },
  { src: "/icons/nodejs.png", type: "image", position: { top: "60%", left: "2%" } },
  { src: "/icons/c-logo.png", type: "image", position: { top: "60%", right: "2%" } },
  { src: "/icons/database.mp4", type: "video", position: { top: "84%", left: "8%" } },
  { src: "/icons/physics.mp4", type: "video", position: { top: "84%", right: "8%" } },
];

export function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 90, mass: 0.4 };

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);
  const scale = useSpring(useTransform(x, [-0.5, 0, 0.5], [1.04, 1, 1.04]), springConfig);

  const glareX = useSpring(useTransform(x, [-0.5, 0.5], [50, 370]), springConfig);
  const glareY = useSpring(useTransform(y, [-0.5, 0.5], [50, 470]), springConfig);

  const glareOpacity = useSpring(useTransform(x, [-0.5, 0, 0.5], [0.22, 0, 0.22]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.65_0.27_295/0.25),transparent_60%)]" />

      <div className="relative mx-auto grid w-full gap-12 px-4 md:px-8 lg:px-12 xl:px-16 lg:grid-cols-2 lg:items-center">
        <div className="z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I'm <span className="text-gradient">Zaid Husain</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-xl text-muted-foreground sm:text-2xl"
          >
            <span className="text-gradient-neon font-semibold">Full Stack Developer</span> & Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 max-w-xl text-base text-muted-foreground/90 leading-relaxed"
          >
            I craft cinematic, performant web experiences with the MERN stack — turning complex problems into elegant interfaces that feel inevitable. Clean code, sharp design, real impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)] px-6 py-3.5 font-medium text-background shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all hover:shadow-[0_0_50px_rgba(139,92,246,0.7)] hover:scale-[1.03]"
            >
              <Sparkles size={18} />
              View Projects
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>

            <a
              href="#"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-medium transition-all hover:border-white/30 hover:bg-white/10"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex items-center gap-5"
          >
            {[
              { Icon: Github, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Mail, href: "#contact" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="text-muted-foreground transition-all hover:text-[var(--neon-purple)] hover:-translate-y-1"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative h-[420px] sm:h-[520px] lg:h-[600px]"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--neon-purple)]/10 to-[var(--neon-blue)]/10 blur-3xl" />

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-[300px] h-[380px] sm:w-[380px] sm:h-[480px] lg:w-[420px] lg:h-[520px] rounded-3xl border-gradient shadow-[0_0_50px_rgba(139,92,246,0.15)] overflow-hidden group cursor-pointer"
              style={{
                rotateX,
                rotateY,
                scale,
                perspective: 1000,
                transformStyle: "preserve-3d"
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-[var(--neon-purple)]/30 via-transparent to-[var(--neon-blue)]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ transform: "translateZ(10px)" }}
              />

              <motion.div
                className="absolute pointer-events-none rounded-full blur-[110px] bg-white w-[280px] h-[280px]"
                style={{
                  left: glareX,
                  top: glareY,
                  translateX: "-50%",
                  translateY: "-50%",
                  opacity: glareOpacity,
                  mixBlendMode: "overlay",
                  transform: "translateZ(80px)"
                }}
              />

              <div
                className="absolute top-4 left-4 h-4 w-4 border-t-2 border-l-2 border-[var(--neon-purple)] opacity-70 group-hover:scale-110 transition-all duration-300 pointer-events-none"
                style={{ transform: "translateZ(40px)" }}
              />
              <div
                className="absolute top-4 right-4 h-4 w-4 border-t-2 border-r-2 border-[var(--neon-purple)] opacity-70 group-hover:scale-110 transition-all duration-300 pointer-events-none"
                style={{ transform: "translateZ(40px)" }}
              />
              <div
                className="absolute bottom-4 left-4 h-4 w-4 border-b-2 border-l-2 border-[var(--neon-blue)] opacity-70 group-hover:scale-110 transition-all duration-300 pointer-events-none"
                style={{ transform: "translateZ(40px)" }}
              />
              <div
                className="absolute bottom-4 right-4 h-4 w-4 border-b-2 border-r-2 border-[var(--neon-blue)] opacity-70 group-hover:scale-110 transition-all duration-300 pointer-events-none"
                style={{ transform: "translateZ(40px)" }}
              />

              <img
                src="/1.png"
                alt="Zaid Husain"
                className="w-full h-full object-cover pointer-events-none"
                style={{ transform: "translateZ(-15px) scale(1.05)" }}
              />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.15),transparent_45%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),transparent_45%)] pointer-events-none" />

              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.13_0.02_270)]/85 via-transparent to-transparent opacity-90 pointer-events-none" />

              <div
                className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4 border-white/5 shadow-2xl transition-all duration-500"
                style={{ transform: "translateZ(60px)" }}
              >
                <div className="flex items-center justify-between pointer-events-none">
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">Zaid Husain</h3>
                    <p className="text-xs text-muted-foreground font-mono">Full Stack Engineer</p>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
                </div>
              </div>
            </motion.div>
          </div>

          {techIcons.map((icon, i) => (
            <motion.div
              key={i}
              className="glass absolute grid h-12 w-12 place-items-center rounded-xl"
              style={icon.position}
              animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.3 }}
            >
              {icon.type === "video" ? (
                <video
                  src={icon.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-7 w-7 object-contain pointer-events-none"
                />
              ) : (
                <img
                  src={icon.src}
                  alt="tech icon"
                  className="h-7 w-7 object-contain pointer-events-none"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.2, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
