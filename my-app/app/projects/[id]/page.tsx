import Link from "next/link";
import { resume } from "../../data/resume";
import { notFound } from "next/navigation";

export default async function ProjectPage({ params }: { params: { id: string } | Promise<{ id: string }> }) {
  const { id } = await params;
  const project = resume.projects.find((p) => p.id === id);
  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/projects" className="text-sm text-zinc-400">← Back to projects</Link>
      <h1 className="mt-4 text-3xl font-semibold">{project.title} — Case Study</h1>

      <section className="mt-6">
        <h2 className="text-xl font-medium">Overview</h2>
        <p className="mt-2 text-zinc-300">{project.summary}</p>
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-medium">Technical Highlights</h3>
        <ul className="mt-2 list-disc pl-6 text-zinc-300">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-medium">Impact</h3>
        <p className="mt-2 text-zinc-300">
          Improved performance, maintainability and developer velocity by applying lazy loading, modular architecture, and centralized cross-cutting concerns (auth & error handling).
        </p>
      </section>
    </main>
  );
}
