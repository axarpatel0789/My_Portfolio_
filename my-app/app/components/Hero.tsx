"use client";

import Link from "next/link";
import type { Resume } from "../data/resume";
import { Container, Button } from 'react-bootstrap';

export default function Hero({ data }: { data: Resume }) {
  return (
    <section id="hero" className="py-5">
      <Container className="px-3">
        <p className="text-muted small">{data.role} • {data.experienceYears} yrs</p>

        <h1 className="mt-3 display-6 font-mono">Next.js Frontend Engineer — Fast, Scalable UIs</h1>

        <p className="mt-3 lead text-muted">TypeScript-first, performance-focused frontend. I build accessible, reusable UI components and optimize delivery for real users.</p>

        <div className="mt-4 d-flex gap-2">
          <Link href="#projects" className="btn btn-primary">
            View Projects
          </Link>
          <Link href="#contact" className="btn btn-outline-secondary">
            Contact
          </Link>
        </div>
      </Container>
    </section>
  );
}
