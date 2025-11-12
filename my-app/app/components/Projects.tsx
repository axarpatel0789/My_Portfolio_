"use client";

import Link from "next/link";
import type { Resume } from "../data/resume";
import { Card as RBCard, Button, Container, Row, Col } from 'react-bootstrap';

function ProjectCard({ id, title, tech }: { id: string; title: string; tech: ReadonlyArray<string> }) {
  return (
    <RBCard className="bg-transparent border-secondary">
      <RBCard.Body>
        <RBCard.Title>{title}</RBCard.Title>
        <RBCard.Text className="text-muted">Tech: {tech.join(', ')}</RBCard.Text>
        <Link href={`/projects/${id}`} className="btn btn-sm btn-outline-primary">
          Case study →
        </Link>
      </RBCard.Body>
    </RBCard>
  );
}

export default function Projects({ data }: { data: Resume }) {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="h4">Projects</h2>
        <Row className="mt-3 g-3">
          {data.projects.map((p) => (
            <Col key={p.id} md={6}>
              <ProjectCard id={p.id} title={p.title} tech={p.tech} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
