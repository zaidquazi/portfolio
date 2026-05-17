import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Particles } from "@/components/Particles";
import { Cursor } from "@/components/Cursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zaid Husain — Full Stack Developer & Software Engineer" },
      { name: "description", content: "Award-winning portfolio of Zaid Husain — full stack developer crafting cinematic, performant web experiences with the MERN stack." },
      { property: "og:title", content: "Zaid Husain — Full Stack Developer" },
      { property: "og:description", content: "Cinematic developer portfolio. MERN stack, modern UI/UX, real impact." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative noise">
      <Cursor />
      <ScrollProgress />
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
