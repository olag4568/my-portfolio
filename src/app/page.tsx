"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Code2,
  Download, Code2 as GithubIcon, GraduationCap, Heart, Home, Mail, MapPin,
  Menu, Send, Sparkles, UserRound, Zap,
} from "lucide-react";

const skills = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Node.js", "Git & GitHub", "HTML & CSS", "JavaScript"];

export default function HomePage() {
  return (
    <main className="portfolio-shell" id="home">
      <nav className="nav-wrap">
        <a href="#home" className="brand" aria-label="Quadri Azeez home"><span className="brand-mark">Q<span>.</span></span><span className="brand-name">Quadri <b>Azeez</b></span></a>
        <div className="nav-links"><a href="#home">Home</a><a href="#work">Projects</a><a href="#skills">Skills</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <a className="nav-cta" href="#contact">Get in Touch <Send size={15} /></a>
        <a className="mobile-menu" href="#work" aria-label="Jump to projects"><Menu size={22} /></a>
      </nav>
      <section className="hero section-pad" id="hero"><div className="hero-grid">
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.5}}>👋 HI, I'M A WEB DEVELOPER</motion.p>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.1}}>Quadri<br/><span className="highlight-word">Azeez</span></motion.h1>
          <p className="hero-role">Full Stack Web Developer</p><p className="hero-intro">I build modern, responsive and user-friendly web applications that solve real problems. I love turning ideas into functional web experiences using clean code and modern technologies.</p>
          <div className="hero-actions"><a className="primary-button" href="#work">View My Projects <ArrowRight size={18}/></a><a className="secondary-button" href="#contact">Download CV <Download size={16}/></a></div>
          <div className="hero-socials"><a href="https://github.com/olag4568" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon size={20}/></a><a href="mailto:hello@quadri.dev" aria-label="Email"><Mail size={20}/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><ArrowUpRight size={20}/></a></div>
        </div>
        <motion.div className="hero-art" initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{duration:.8}}><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-sun"/><div className="portrait-placeholder"><UserRound size={112} strokeWidth={1.1}/><span>YOUR PHOTO HERE</span></div><div className="art-sticker"><Sparkles size={15}/> CODE · BUILD · IMPROVE</div><div className="art-footer"><span>CREATIVITY × CODE</span><span>LAGOS, NIGERIA</span></div></motion.div>
        <div className="tech-float">{["Next.js","TypeScript","React","Tailwind CSS","Supabase","PostgreSQL","Git & GitHub"].map((tech,i)=><span key={tech}><i>{["N","TS","⚛","≈","ϟ","PG","⌘"][i]}</i>{tech}</span>)}</div>
      </div><div className="hero-marquee"><div className="marquee-track">{Array.from({length:4}).map((_,i)=><span key={i}>DESIGN <Sparkles size={16}/> BUILD <Sparkles size={16}/> IMPROVE <Sparkles size={16}/> REPEAT <Sparkles size={16}/></span>)}</div></div></section>
      <section className="featured-section section-pad" id="work"><div className="featured-card"><div className="featured-badge"><Home size={19}/></div><div className="featured-copy"><p className="eyebrow"><Sparkles size={13}/> FEATURED PROJECT</p><h2>SPATDEL</h2><p className="featured-subtitle">Property Marketplace · Ijegun, Lagos State</p><p className="project-description">SPATDEL is a property rental and sales platform concept built for the Ijegun community. It connects people with property listings and community-focused tools.</p><div className="feature-points"><span><CheckCircle2/> Property Listings</span><span><CheckCircle2/> Community Focused</span><span><CheckCircle2/> Secure Transactions</span><span><CheckCircle2/> Admin Dashboard</span></div><div className="hero-actions"><a className="primary-button" href="https://github.com/olag4568/spatdel" target="_blank" rel="noreferrer">View Source Code <ArrowUpRight size={16}/></a><a className="secondary-button" href="#contact">Project Details <ArrowRight size={16}/></a></div></div>
      <div className="project-mockup"><div className="mockup-window"><div className="mockup-top"><span>● SPATDEL</span><span>Homes　Community　Explore</span><b>Get Started</b></div><div className="mockup-content"><div><small>FIND YOUR NEXT HOME</small><h3>Find Your<br/>Next Home in Ijegun</h3><p>Discover homes and opportunities around your community.</p><div className="mock-search">⌕　Search properties in Ijegun</div><div className="mock-tiles"><span>⌂<small>For Rent</small></span><span>⌂<small>For Sale</small></span><span>♧<small>Community</small></span></div></div><div className="mock-map"><MapPin size={34}/><span>IJEGUN, LAGOS</span></div></div></div><div className="mock-phone"><div className="phone-notch"/><small>SPATDEL</small><h4>Find Your Next Home</h4><div className="phone-map"><MapPin size={24}/></div><div className="phone-line"/><div className="phone-line short"/></div></div></div></section>
      <section className="skills-about section-pad"><div className="skills-panel" id="skills"><div className="small-section-title"><Zap/><div><h2>My Skills</h2><p>Technologies I work with</p></div></div><div className="skill-grid">{skills.map((skill,i)=><span className="skill-chip" key={skill}><i>{["N","⚛","TS","≈","ϟ","PG","⬡","⌘","5","JS"][i]}</i>{skill}</span>)}</div></div>
      <div className="about-panel" id="about"><div className="small-section-title"><UserRound/><div><h2>About Me</h2><p>My journey so far</p></div></div><p>I’m Quadri Azeez, a passionate web developer focused on building modern and scalable web applications. I enjoy solving problems, learning new technologies, and creating products that make a real impact. My journey started with curiosity about how websites work, and now I’m building real-world solutions like SPATDEL.</p><ul><li><MapPin/> Lagos, Nigeria</li><li><GraduationCap/> Computer Science (In Progress)</li><li><Heart/> Football | Anime | Tech</li></ul></div><div className="dream-card"><Sparkles size={27}/><span>Better Code.<br/>Bigger Dreams.</span><Code2 size={28}/></div></section>
      <section className="contact-band section-pad" id="contact"><div className="contact-pitch"><Zap/><h2>Let’s Build<br/>Something Great</h2><p>Have a project in mind? I’m open to new opportunities, collaborations and ideas.</p><a className="primary-button" href="mailto:hello@quadri.dev">Contact Me <Send size={15}/></a></div><div className="stats"><div><b>1+</b><span>Major Project<br/>(SPATDEL)</span></div><div><b>1+</b><span>Year Learning<br/>& Building</span></div><div><b>100%</b><span>Commitment<br/>to Quality</span></div><div><b>∞</b><span>More Projects<br/>Coming Soon</span></div></div><div className="contact-details"><h3>Get In Touch</h3><p>Feel free to reach out!</p><a href="mailto:hello@quadri.dev"><Mail/> quadriadeez@gmail.com</a><a href="https://github.com/olag4568" target="_blank" rel="noreferrer"><GithubIcon/> github.com/olag4568</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><ArrowUpRight/> LinkedIn profile</a><span><MapPin/> Lagos, Nigeria</span></div></section>
      <footer className="footer section-pad"><a href="#home" className="brand"><span className="brand-mark">Q<span>.</span></span><span className="brand-name">Quadri <b>Azeez</b></span></a><p>© 2026 Quadri Azeez. Built with curiosity in Lagos.</p><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}
