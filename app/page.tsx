import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Values } from "@/components/Values";
import { Programs } from "@/components/Programs";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Values />
        <Programs />
      </main>
      <Footer />
    </>
  );
}
