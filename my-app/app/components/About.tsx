"use client";

import type { Resume } from "../data/resume";
import { Container, Row, Col } from 'react-bootstrap';

export default function About({ data }: { data: Resume }) {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-top py-5">
      <Container>
        <h2 id="about-heading" className="h4">About</h2>

        <p className="mt-3 text-muted">
          Frontend Developer with ~4 years building scalable, maintainable web applications across Angular, Vue, and Next.js. I specialize in TypeScript and modern JavaScript (ES6+), delivering performant, accessible UIs with reusable architecture and strong engineering practices.
        </p>

        <p className="text-muted">
          I bring full‑stack exposure to optimize client-server interactions, implement secure integrations, and improve developer velocity through CI/CD and modular design.
        </p>

        <Row className="mt-4 small">
          <Col sm={6}>
            <h6 className="mb-1">Core</h6>
            <div className="text-muted">TypeScript · ES6+ · Next.js · React</div>
          </Col>
          <Col sm={6}>
            <h6 className="mb-1">Frameworks</h6>
            <div className="text-muted">Angular · Vue.js · Redux · Vuex</div>
          </Col>
          <Col sm={6} className="mt-3">
            <h6 className="mb-1">Tools</h6>
            <div className="text-muted">Git · SVN · Jira · Webpack · Vite</div>
          </Col>
          <Col sm={6} className="mt-3">
            <h6 className="mb-1">Practices</h6>
            <div className="text-muted">Performance · Reusability · Accessibility · Security</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
