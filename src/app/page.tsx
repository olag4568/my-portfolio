"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Code2,
  Download, GraduationCap, Heart, Home, Mail, MapPin,
  Menu, Send, Sparkles, UserRound, Zap, MessageCircle as MessageCircleIcon,
} from "lucide-react";

const skills = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Node.js", "Git & GitHub", "HTML & CSS", "JavaScript"];

function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const project = String(data.get("project") || "").trim();
    const budget = String(data.get("budget") || "").trim();
    const details = String(data.get("details") || "").trim();
    const subject = `Website project enquiry: ${project}`;
    const body = [
      "Hi Quadri,",
      "",
      `My name is ${name}.`,
      `My email: ${email}`,
      `Project type: ${project}`,
      `Budget: ${budget || "Not specified"}`,
      "",
      "Project details:",
      details,
    ].join("\\n");
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=quadriazeez745%40gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-fields-two">
        <label>Full name<input name="name" autoComplete="name" placeholder="Your name" required maxLength={100} /></label>
        <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></label>
      </div>
      <div className="contact-fields-two">
        <label>Project type<select name="project" required defaultValue=""><option value="" disabled>Select a service</option><option>Business website</option><option>Web application</option><option>E-commerce website</option><option>Bug fixing or improvements</option><option>Other project</option></select></label>
        <label>Budget (optional)<select name="budget" defaultValue=""><option value="">Prefer not to say</option><option>Under ₦100,000</option><option>₦100,000–₦300,000</option><option>₦300,000–₦700,000</option><option>₦700,000+</option><option>To be discussed</option></select></label>
      </div>
      <label>Project details<textarea name="details" rows={5} placeholder="What would you like to build?" required maxLength={5000} /></label>
      <button className="primary-button contact-submit" type="submit"><Mail size={16}/> Submit via Gmail</button>
      <p className="contact-form-note">Clicking submit opens Gmail with your project details ready to send.</p>
    </form>
  );
}

export default function HomePage() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const headlines = ["great.", "amazing.", "brilliant.", "unforgettable."];

  useEffect(() => {
    const timer = window.setInterval(() => setHeadlineIndex((current) => (current + 1) % headlines.length), 3000);
    return () => window.clearInterval(timer);
  }, []);

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
          <div className="hero-actions"><a className="primary-button" href="#work">View My Projects <ArrowRight size={18}/></a><a className="secondary-button" href="/cv.pdf" download>Download CV <Download size={16}/></a></div>
          <div className="hero-socials"><a href="mailto:quadriazeez745@gmail.com" aria-label="Email"><Mail size={20}/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><ArrowUpRight size={20}/></a></div>
        </div>
        <motion.div className="hero-art" initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{duration:.8}}><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-sun"/><div className="portrait-placeholder"><UserRound size={112} strokeWidth={1.1}/><span>YOUR PHOTO HERE</span></div><div className="art-sticker"><Sparkles size={15}/> CODE · BUILD · IMPROVE</div><div className="art-footer"><span>CREATIVITY × CODE</span><span>LAGOS, NIGERIA</span></div></motion.div>
        <div className="tech-float">{["Next.js","TypeScript","React","Tailwind CSS","Supabase","PostgreSQL","Git & GitHub"].map((tech,i)=><span key={tech}><i>{["N","TS","⚛","≈","ϟ","PG","⌘"][i]}</i>{tech}</span>)}</div>
      </div><div className="hero-marquee"><div className="marquee-track">{Array.from({length:4}).map((_,i)=><span key={i}>DESIGN <Sparkles size={16}/> BUILD <Sparkles size={16}/> IMPROVE <Sparkles size={16}/> REPEAT <Sparkles size={16}/></span>)}</div></div></section>
      <section className="featured-section section-pad" id="work"><div className="featured-card"><div className="featured-badge"><Home size={19}/></div><div className="featured-copy"><p className="eyebrow"><Sparkles size={13}/> FEATURED PROJECT</p><h2>SPATDEL</h2><p className="featured-subtitle">Property Marketplace · Ijegun, Lagos State</p><p className="project-description">SPATDEL is an ongoing property rental and sales platform for the Ijegun community. It is being developed to connect people with property listings and community-focused tools.</p><div className="feature-points"><span><CheckCircle2/> Property Listings</span><span><CheckCircle2/> Community Focused</span><span><CheckCircle2/> Secure Transactions</span><span><CheckCircle2/> Admin Dashboard</span></div><div className="hero-actions"><span className="secondary-button" role="status" aria-label="Project status: In Development"><Sparkles size={16}/> In Development</span><a className="primary-button" href="/spatdel">Project Details <ArrowRight size={16}/></a></div></div></div>
      </section>
      <section className="skills-about section-pad"><div className="skills-panel" id="skills"><div className="small-section-title"><Zap/><div><h2>My Skills</h2><p>Technologies I work with</p></div></div><div className="skill-grid">{skills.map((skill,i)=><span className="skill-chip" key={skill}><i>{["N","⚛","TS","≈","ϟ","PG","⬡","⌘","5","JS"][i]}</i>{skill}</span>)}</div></div>
      <div className="about-panel" id="about"><div className="small-section-title"><UserRound/><div><h2>About Me</h2><p>My journey so far</p></div></div><p>I’m Quadri Azeez, a passionate web developer focused on building modern and scalable web applications. I enjoy solving problems, learning new technologies, and creating products that make a real impact. My journey started with curiosity about how websites work, and now I’m building real-world solutions like SPATDEL.</p><ul><li><MapPin/> Lagos, Nigeria</li><li><GraduationCap/> Computer Science (In Progress)</li><li><Heart/> Football | Anime | Tech</li></ul></div><div className="dream-card"><Sparkles size={27}/><span>Better Code.<br/>Bigger Dreams.</span><Code2 size={28}/></div></section>
      <section className="contact-band section-pad" id="contact"><div className="contact-pitch"><Zap/><p className="eyebrow">HAVE AN IDEA? LET’S MAKE IT REAL</p><h2 key={headlineIndex} className="rotating-headline">Let’s build something <span className="rainbow-word">{headlines[headlineIndex]}</span></h2><p>I create clean, modern websites that help businesses look professional, earn trust, and turn visitors into customers.</p></div><div className="contact-form-wrap"><div className="contact-form-heading"><p className="eyebrow">TELL ME ABOUT YOUR IDEA</p><h2>Start Your Project</h2><p>Fill the form and submit to open Gmail with your details. Or use WhatsApp directly without filling anything.</p></div><ContactForm /><a className="secondary-button contact-whatsapp-direct" href="https://wa.me/2348035833564?text=Hi%20Quadri%2C%20I%20am%20interested%20in%20your%20web%20development%20services." target="_blank" rel="noreferrer"><MessageCircleIcon size={16}/> Contact me on WhatsApp</a><div className="contact-details"><span><MapPin/> Lagos, Nigeria</span></div></div></section>
      <footer className="footer section-pad"><a href="#home" className="brand"><span className="brand-mark">Q<span>.</span></span><span className="brand-name">Quadri <b>Azeez</b></span></a><p>© 2026 Quadri Azeez. Built with curiosity in Lagos.</p><div className="footer-actions"><ThemeToggle /><a href="#home">Back to top ↑</a></div></footer>
    </main>
  );
}
