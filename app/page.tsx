import Navbar from "@/components/layout/Navbar";
import  Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Vision from "@/components/sections/Vision";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <main className="bg-[#09090B] text-white w-full max-w-full overflow-x-hidden">
            <Navbar />

            <section id="hero">
                <Hero />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="vision">
                <Vision />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="journey">
                <Journey />
            </section>

            <section id="experience">
                <Experience />
            </section>

            <section id="contact">
                <Contact />
            </section>

            <Footer />
        </main>
    
    );
}