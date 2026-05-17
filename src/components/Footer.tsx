import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto flex w-full flex-col items-center justify-between gap-6 px-4 md:px-8 lg:px-12 xl:px-16 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="font-display text-lg font-bold text-gradient">Zaid Husain</div>
          <p className="mt-1 text-sm text-muted-foreground">Designing & engineering the web, one pixel at a time.</p>
        </div>

        <div className="flex items-center gap-3">
          {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-muted-foreground transition-all hover:text-[var(--neon-purple)] hover:-translate-y-1"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <div className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Crafted with ⚡
        </div>
      </div>
    </footer>
  );
}
