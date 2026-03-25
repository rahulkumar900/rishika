import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Milestones } from "@/components/sections/Milestones";
import { Infrastructure } from "@/components/sections/Infrastructure";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Infrastructure />
      <Services />
      <Projects />
      <Milestones />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
