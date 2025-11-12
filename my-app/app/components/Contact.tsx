"use client";

import type { Resume } from "../data/resume";
import { Container, Button } from 'react-bootstrap';

export default function Contact({ data }: { data: Resume }) {
  return (
    <section id="contact" className="border-top py-5">
      <Container>
        <h2 className="h4">Contact</h2>
        <p className="mt-3 text-muted">
          Email: <a href={`mailto:${data.contact.email}`} className="link-primary">{data.contact.email}</a>
        </p>
        <p className="text-muted small">{data.contact.location}</p>
        <div className="mt-3">
          <Button href={`mailto:${data.contact.email}`} variant="primary">Email me</Button>
        </div>
      </Container>
    </section>
  );
}
