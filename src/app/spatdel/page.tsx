import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2, Home, MapPin, ShieldCheck, Users, Wallet } from "lucide-react";

const focusAreas = [
  { icon: Home, title: "Property discovery", text: "A focused property marketplace concept for people searching for homes and property opportunities within Ijegun, Lagos." },
  { icon: Users, title: "Community tools", text: "Community-focused features designed to help residents stay informed and engage with local updates." },
  { icon: ShieldCheck, title: "Trust and verification", text: "A planned verification and administration workflow to support more reliable listings and a safer marketplace experience." },
  { icon: Wallet, title: "Wallet and transactions", text: "Wallet and transaction features are part of the product direction, with payment and verification flows being developed carefully." },
];

export default function SpatdelProjectPage() {
  return (
    <main className="portfolio-shell" style={{ minHeight: "100vh" }}>
      <nav className="nav-wrap">
        <Link href="/" className="brand" aria-label="Back to Quadri Azeez portfolio"><span className="brand-mark">Q<span>.</span></span><span className="brand-name">Quadri <b>Azeez</b></span></Link>
        <div className="nav-actions"><ThemeToggle /><Link href="/#work" className="secondary-button"><ArrowLeft size={15} /> Back to Projects</Link></div>
      </nav>
      <section className="section-pad" style={{ paddingTop: "clamp(48px, 9vw, 100px)", paddingBottom: 56, maxWidth: 1100, margin: "0 auto" }}>
        <p className="eyebrow"><Code2 size={14} /> PROJECT CASE STUDY</p>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <span style={{ border: "1px solid #555", borderRadius: 999, padding: "7px 11px", fontSize: 11, color: "#ddd" }}>IN DEVELOPMENT</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#aaa", fontSize: 12 }}><MapPin size={14} /> Ijegun, Lagos State, Nigeria</span>
        </div>
        <h1 style={{ fontSize: "clamp(48px, 9vw, 88px)", letterSpacing: "-.07em", lineHeight: .98, margin: "0 0 22px", fontWeight: 800 }}>SPATDEL<span style={{ color: "#aaa" }}>.</span></h1>
        <p style={{ fontSize: "clamp(17px, 2.2vw, 23px)", lineHeight: 1.65, color: "#ddd", maxWidth: 800, margin: "0 0 24px" }}>A community-focused property marketplace being built around Ijegun — bringing property discovery, local community features and trust-focused workflows into one digital experience.</p>
        <p style={{ color: "#aaa", fontSize: 14, lineHeight: 1.9, maxWidth: 780, margin: "0 0 30px" }}>SPATDEL is an ongoing project. The current focus is shaping a practical, location-specific platform for property listings and community participation. Features described on this page represent the product direction and may still be under development; availability can change as the project progresses.</p>
        <section className="featured-section" style={{ marginBottom: 58, padding: 0 }}>
          <div className="project-mockup">
            <div className="mockup-window">
              <div className="mockup-top"><span>● SPATDEL</span><span>Homes　Community　Explore</span><b>Get Started</b></div>
              <div className="mockup-content">
                <div>
                  <small>FIND YOUR NEXT HOME</small>
                  <h3>Find Your<br />Next Home in Ijegun</h3>
                  <p>Discover homes and opportunities around your community.</p>
                  <div className="mock-search">⌕　Search properties in Ijegun</div>
                  <div className="mock-tiles">
                    <span>⌂<small>For Rent</small></span>
                    <span>⌂<small>For Sale</small></span>
                    <span>♧<small>Community</small></span>
                  </div>
                </div>
                <div className="mock-map"><MapPin size={34} /><span>IJEGUN, LAGOS</span></div>
              </div>
            </div>
            <div className="mock-phone">
              <div className="phone-notch" />
              <small>SPATDEL</small>
              <h4>Find Your Next Home</h4>
              <div className="phone-map"><MapPin size={24} /></div>
              <div className="phone-line" />
              <div className="phone-line short" />
            </div>
          </div>
        </section>
        <div style={{ borderTop: "1px solid #303030", borderBottom: "1px solid #303030", padding: "24px 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 22, marginBottom: 58 }}>
          <div><p className="eyebrow">PROJECT TYPE</p><p style={{ margin: 0, fontSize: 15 }}>Property marketplace</p></div>
          <div><p className="eyebrow">PRIMARY AREA</p><p style={{ margin: 0, fontSize: 15 }}>Ijegun, Lagos</p></div>
          <div><p className="eyebrow">CURRENT STAGE</p><p style={{ margin: 0, fontSize: 15 }}>Active development</p></div>
          <div><p className="eyebrow">TECHNOLOGY</p><p style={{ margin: 0, fontSize: 15 }}>Next.js · React · Supabase</p></div>
        </div>
        <section style={{ marginBottom: 58 }}>
          <p className="eyebrow">THE VISION</p><h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-.045em", margin: "0 0 16px" }}>Designed around a local community</h2>
          <p style={{ color: "#aaa", fontSize: 14, lineHeight: 1.9, maxWidth: 800, margin: 0 }}>Large property platforms can feel broad and impersonal. SPATDEL starts with a narrower goal: make property discovery and community-oriented services more relevant to people in Ijegun. The product is being developed iteratively, with location focus, usability, clear roles and trustworthy workflows guiding its direction.</p>
        </section>
        <section style={{ marginBottom: 58 }}>
          <p className="eyebrow">PRODUCT FOCUS</p><h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-.045em", margin: "0 0 22px" }}>What SPATDEL is working toward</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 14 }}>
            {focusAreas.map(({ icon: Icon, title, text }) => <article key={title} style={{ border: "1px solid #303030", borderRadius: 10, padding: 22, background: "#080808" }}><Icon size={23} color="#ddd" /><h3 style={{ fontSize: 17, margin: "16px 0 8px" }}>{title}</h3><p style={{ fontSize: 13, lineHeight: 1.8, color: "#aaa", margin: 0 }}>{text}</p></article>)}
          </div>
        </section>
        <section style={{ marginBottom: 58 }}>
          <p className="eyebrow">BUILD APPROACH</p><h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-.045em", margin: "0 0 16px" }}>Built in stages</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 13, maxWidth: 780 }}>
            {["Developing the core property and community experience", "Refining account roles and administration workflows", "Improving verification, wallet and transaction-related flows", "Preparing the project for deployment and real-world feedback"].map(item => <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "#ccc", fontSize: 14, lineHeight: 1.7 }}><CheckCircle2 size={17} style={{ flexShrink: 0, marginTop: 3 }} color="#aaa" />{item}</li>)}
          </ul>
        </section>
        <section style={{ border: "1px solid #303030", borderRadius: 12, padding: "clamp(22px, 5vw, 38px)", background: "#080808" }}><p className="eyebrow">FOLLOW THE JOURNEY</p><h2 style={{ fontSize: "clamp(25px, 4vw, 36px)", margin: "0 0 12px", letterSpacing: "-.04em" }}>SPATDEL is still evolving.</h2><p style={{ color: "#aaa", fontSize: 14, lineHeight: 1.8, maxWidth: 700, margin: "0 0 22px" }}>The public website link will be added when the project is deployed to its domain. Until then, this page shares the purpose, current direction and development progress without exposing source code.</p><Link href="/#contact" className="primary-button">Get in touch <ArrowUpRight size={16} /></Link></section>
      </section>
      <footer className="footer section-pad"><Link href="/" className="brand"><span className="brand-mark">Q<span>.</span></span><span className="brand-name">Quadri <b>Azeez</b></span></Link><p>© 2026 Quadri Azeez. Built with curiosity in Lagos.</p><Link href="/#home">Back to top ↑</Link></footer>
    </main>
  );
}
