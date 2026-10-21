"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Code2,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "SPATDEL",
    type: "PROPERTY • MARKETPLACE",
    description:
      "A community-first property platform connecting people to homes and opportunities around Ijegun, Lagos.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    className: "project-lime",
    mark: "S.",
  },
  {
    number: "02",
    name: "ChatOG AI",
    type: "AI • WEB APP",
    description:
      "A modern AI chat experience designed to make asking questions, exploring ideas, and getting work done feel effortless.",
    tags: ["Next.js", "AI", "Search"],
    className: "project-lilac",
    mark: "og/",
  },
  {
    number: "03",
    name: "DealNest NG",
    type: "COMMERCE • DIGITAL BRAND",
    description:
      "A shopping discovery concept built to help people find useful deals and make smarter buying decisions.",
    tags: ["Web Design", "Content", "Commerce"],
    className: "project-orange",
    mark: "DN",
  },
];

const services = [
  ["01", "Web development", "Fast, responsive websites built to do more than look good."],
  ["02", "Product thinking", "Turning rough ideas into clear, useful digital experiences."],
  ["03", "UI engineering", "Thoughtful interfaces with detail, movement, and personality."],
];

export default function Home() {
  return (
    <main className="portfolio-shell">
      <nav className="nav-wrap">
        <a href="#home" className="brand" aria-label="Quadri Azeez home">
          <span className="brand-mark">Q<span>.</span></span>
          <span>QUADRI AZEEZ</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#services">What I do</a>
        </div>
        <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={16} /></a>
        <a className="mobile-menu" href="#work" aria-label="Jump to work"><Menu size={22} /></a>
      </nav>

      <section className="hero section-pad" id="home">
        <div className="hero-topline">
          <span><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS</span>
          <span>LAGOS, NG <Asterisk size={14} /></span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              DEVELOPER · CREATIVE THINKER · BUILDER
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              I make the
              <br />
              internet <span className="highlight-word">work</span>
              <br />
              <span className="serif-word">beautifully.</span>
            </motion.h1>
            <motion.div
              className="hero-bottom"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <p>
                I’m Quadri Azeez — a web developer building bold digital
                experiences, useful products, and ideas that deserve to exist.
              </p>
              <a className="round-link" href="#work" aria-label="Explore selected work">
                <ArrowDownRight size={23} />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-art"
            initial={{ opacity: 0, scale: 0.92, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-sticker"><Sparkles size={17} /> GOOD IDEAS, BUILT WELL</div>
            <div className="art-sun" />
            <div className="art-type">MAKE<br /><span>IT</span><br />MATTER<span className="art-period">.</span></div>
            <div className="art-footer"><span>CREATIVITY × CODE</span><span>001 / 026</span></div>
            <div className="art-star">✳</div>
          </motion.div>
        </div>
        <div className="hero-marquee" aria-label="Design. Build. Improve.">
          <div className="marquee-track">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i}>DESIGN <Asterisk size={20} /> BUILD <Asterisk size={20} /> MAKE IT REAL <Asterisk size={20} /></span>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">A FEW THINGS I’VE BEEN BUILDING</p><h2>Selected <span>work</span><Asterisk size={25} /></h2></div>
          <p className="section-note">Different problems.<br />One goal: make it useful.</p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <motion.article
              className="project-row"
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className={`project-visual ${project.className}`}>
                <span className="project-index">{project.number} / 03</span>
                <span className="project-mark">{project.mark}</span>
                <span className="project-visual-caption">A DIGITAL EXPERIENCE <ArrowUpRight size={15} /></span>
                <div className="visual-grid" />
              </div>
              <div className="project-info">
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a href="#contact" className="text-link">LET’S BUILD SOMETHING <ArrowUpRight size={15} /></a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="about-label"><span className="status-dot" /> A LITTLE ABOUT ME</div>
        <div className="about-content">
          <h2>I care about the <span>details</span> — and the bigger picture.</h2>
          <div className="about-text">
            <p>I’m a developer who enjoys taking an idea from “what if?” to something people can actually use. I mix clean code with curiosity, practical thinking, and a love for interfaces that feel alive.</p>
            <p>My focus is simple: keep learning, build with intention, and make every project a little better than the last.</p>
            <a className="inline-link" href="#contact">A little more about working together <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="about-stamp"><Code2 size={27} /><span>THINK<br />THEN BUILD</span></div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="section-heading">
          <div><p className="eyebrow">HOW I CAN HELP</p><h2>Ideas into <span>impact.</span></h2></div>
          <p className="section-note">Good work starts<br />with a good question.</p>
        </div>
        <div className="service-list">
          {services.map(([number, title, description]) => (
            <div className="service-item" key={number}>
              <span className="service-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <ArrowUpRight className="service-arrow" size={20} />
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="contact-kicker"><Sparkles size={16} /> GOT A GOOD ONE?</div>
        <h2>Let’s make<br /><span>something matter.</span></h2>
        <a className="contact-button" href="mailto:hello@quadri.dev">Start a conversation <MoveUpRight size={19} /></a>
        <p className="contact-small">Have a project, an idea, or just want to connect? My inbox is open.</p>
      </section>

      <footer className="footer section-pad">
        <a href="#home" className="brand"><span className="brand-mark">Q<span>.</span></span><span>QUADRI AZEEZ</span></a>
        <p>BUILT WITH CURIOSITY IN LAGOS © 2026</p>
        <div className="social-links">
          <a href="https://github.com/olag4568" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={18} /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="mailto:hello@quadri.dev" aria-label="Email"><Mail size={18} /></a>
        </div>
      </footer>
    </main>
  );
}
