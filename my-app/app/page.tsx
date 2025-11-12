import type { Metadata } from "next";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { resume } from "./data/resume";

export const metadata: Metadata = {
    title: `${resume.name} — ${resume.role}`,
    description: "Frontend Developer portfolio — Next.js + TypeScript",
};

export default function Home() {
    return (
        <main className="min-h-screen">
            <div className="mx-auto max-w-4xl">
                <Hero data={resume} />
                <About data={resume} />
                <Projects data={resume} />
                <Contact data={resume} />
            </div>
        </main>
    );
}