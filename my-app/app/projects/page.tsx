import Link from "next/link";
import { resume } from "../data/resume";

export default function ProjectsIndex() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <ul className="mt-6 space-y-4">
        {resume.projects.map((p) => (
          <li key={p.id}>
            <Link href={`/projects/${p.id}`} className="text-lg text-[#7c3aed]">
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
