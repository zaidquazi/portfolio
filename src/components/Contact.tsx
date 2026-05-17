import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.65_0.27_295/0.2),transparent_70%)]" />

      <div className="relative mx-auto w-full px-4 md:px-8 lg:px-12 xl:px-16">
        <SectionHeading
          eyebrow="04 — Contact"
          title="Let's build something extraordinary"
          subtitle="Got a project, an opportunity, or just want to chat? My inbox is always open."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-12"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[var(--neon-purple)] via-[var(--neon-blue)] to-[var(--neon-cyan)] opacity-50 blur-lg animate-pulse-glow" />
          <div className="glass-strong relative rounded-3xl p-8 sm:p-10">
            <form onSubmit={onSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your Name" type="text" placeholder="Jane Doe" />
                <Field label="Email" type="email" placeholder="jane@company.com" />
              </div>
              <Field label="Message" textarea placeholder="Tell me about your project..." />

              <button
                type="submit"
                className="group relative mt-2 inline-flex items-center justify-center gap-2 self-start overflow-hidden rounded-xl bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)] px-7 py-3.5 font-medium text-background shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all hover:shadow-[0_0_50px_rgba(139,92,246,0.7)] hover:scale-[1.03]"
              >
                <Send size={16} />
                {sent ? "Message Sent ✓" : "Send Message"}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </form>

            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
              <div className="text-sm text-muted-foreground">
                Or reach out directly:{" "}
                <a href="mailto:zaidquazi412@gmail.com" className="text-foreground hover:text-[var(--neon-purple)]">
                  zaidquazi412@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                {[
                  { Icon: Github, href: "#" },
                  { Icon: Linkedin, href: "#" },
                  { Icon: Twitter, href: "#" },
                  { Icon: Mail, href: "mailto:zaidquazi412@gmail.com" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="glass grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition-all hover:-translate-y-1 hover:text-[var(--neon-purple)] hover:border-[var(--neon-purple)]/40"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, type, placeholder, textarea }: { label: string; type?: string; placeholder: string; textarea?: boolean }) {
  const cls =
    "peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-[var(--neon-purple)] focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(168,85,247,0.15)]";
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea rows={5} placeholder={placeholder} className={cls + " resize-none"} />
      ) : (
        <input type={type} placeholder={placeholder} className={cls} />
      )}
    </label>
  );
}
