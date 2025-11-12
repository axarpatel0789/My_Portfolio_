"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky-top py-2" style={{ background: "transparent" }}>
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <Link href="/" className="navbar-brand h5 mb-0">
            Akash Mungase
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link href="#about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/projects" className="nav-link">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item ms-3 d-flex align-items-center">
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
