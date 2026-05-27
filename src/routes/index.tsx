import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Linkedin, Dribbble, Home, User, LayoutGrid, Layers, Mail } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import sosCover from "@/assets/project-sos-cover.png";
import sosDetail from "@/assets/project-sos-detail.jpeg";
import lumenCover from "@/assets/lumen-cover.png";
import lumenDetail from "@/assets/lumen-detail.png";
import avinyaCover from "@/assets/avinya-cover.png";
import smartTask from "@/assets/smart-task.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const skills = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "Visual Design",
  "Design Systems",
  "Interaction",
  "Branding",
  "Mobile UX",
];

const stats = [];

const projects = [
  { title: "SOS APP DESIGN", tag: "UX Case Study · Mobile · 2025", image: sosCover, href: sosDetail },
  { title: "CREAMY ICE POSTER", tag: "Poster · Branding · 2025", image: lumenCover, href: lumenDetail },
  { title: "AVINYA INTERIORS", tag: "Interior Design · Branding · 2024", image: avinyaCover, href: "https://avinya-interiors.vercel.app/" },
  { title: "SMART TASK MANAGER", tag: "Web App · Productivity · 2024", image: smartTask, href: "https://smart-task-manger.vercel.app/" },
];

function Index() {
  return (
    <div className="bg-brand-bg text-brand-ink font-body selection:bg-brand-accent selection:text-white overflow-x-hidden">
      {/* Nav */}
      <nav className="px-6 md:px-12 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <a href="#top" className="font-display text-xl tracking-tight">HARSHA<span className="text-brand-accent">.</span></a>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
          <a href="#work" className="hover:text-brand-accent transition-colors">Work</a>
          <a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 bg-brand-ink text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-accent transition-colors"
        >
          Hire Me <ArrowUpRight className="w-4 h-4" />
        </a>
      </nav>

      {/* Hero */}
      <header id="top" className="px-6 md:px-12 pt-8 pb-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-brand-muted px-4 py-1.5 rounded-full text-xs font-semibold mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            Available for freelance · 2026
          </div>
          <p className="text-base md:text-lg text-brand-ink/60 mb-2">Hi I am</p>
          <p className="font-display text-2xl md:text-3xl text-brand-ink mb-6 tracking-tight">Harsha Vardhini</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8 uppercase text-brand-accent">
            UI/UX <br />Designer
          </h1>
          <p className="text-base md:text-lg text-brand-ink/70 leading-relaxed max-w-md mb-10">
            That feel effortless &amp; inspire action. I'm <span className="font-semibold text-brand-ink">Harsha Vardhini</span>, a creative UI/UX Designer building clean, user-friendly, and visually engaging interfaces that connect users with brands.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-brand-ink text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-brand-accent transition-colors"
            >
              View My Work <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-brand-accent text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-brand-ink transition-colors"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-brand-ink/30 px-7 py-3.5 rounded-full text-sm font-medium hover:bg-brand-muted transition-colors"
            >
              Let's Build Something
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="flex flex-col items-center gap-5">
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-brand-accent" />
            <img
              src={portrait}
              alt="Harsha Vardhini, UI/UX Designer"
              width={500}
              height={500}
              className="relative w-full h-full rounded-full object-cover"
            />
            {/* UX/UI badge */}
            <div className="absolute -top-1 -right-1 bg-brand-ink text-white rounded-xl px-3 py-2 shadow-lg rotate-6">
              <div className="font-display text-xs leading-none">UX · UI</div>
              <div className="text-[9px] mt-0.5 font-medium opacity-90">Designer</div>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 bg-emerald-950 text-emerald-400 border border-emerald-500/30 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Available for Work
          </div>
          <nav className="w-full max-w-xs flex flex-col gap-1 mt-4">
            {[
              { label: "Home", icon: Home, href: "#top" },
              { label: "About", icon: User, href: "#about" },
              { label: "Projects", icon: LayoutGrid, href: "#work" },
              { label: "Stack", icon: Layers, href: "#stack" },
              { label: "Contact", icon: Mail, href: "#contact" },
            ].map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-brand-ink/80 hover:bg-brand-muted hover:text-brand-ink transition-colors text-sm font-medium"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Skills marquee */}
      <section className="bg-brand-muted/60 py-6 overflow-hidden border-y border-brand-ink/5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...skills, ...skills, ...skills].map((s, i) => (
            <div key={i} className="flex items-center gap-8 px-8 font-display text-2xl md:text-3xl uppercase tracking-tight">
              <span>{s}</span>
              <span className="text-brand-accent">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 md:px-12 py-28 max-w-7xl mx-auto">
        <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">(01) About Me</div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight leading-[0.95]">
            Crafted with <br />
            <span className="text-brand-accent">Purpose</span>
          </h2>
          <div className="space-y-5 text-brand-ink/80 leading-relaxed">
            <p>
              I'm a passionate UI/UX Designer who loves transforming ideas into meaningful digital experiences. I focus on creating modern, intuitive, and visually appealing interfaces that solve real user problems.
            </p>
            <p>
              From user research and wireframing to polished UI designs, I enjoy every step of the design process. What makes my work different is my balance of creativity, usability, and attention to detail — designing experiences that are not only beautiful but also functional.
            </p>
          </div>
        </div>

      </section>

      {/* Work */}
      <section id="work" className="px-6 md:px-12 py-28 max-w-7xl mx-auto">
        <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">(02) Selected Work</div>
        <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight leading-[0.95]">
            Recent <br />
            <span className="text-brand-accent">Projects</span>
          </h2>
          <p className="text-brand-ink/70 leading-relaxed md:pl-8">
            A collection of thoughtfully designed projects focused on user experience, clean interfaces, and impactful digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => {
            const Card = (
              <article className="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-brand-muted mb-5">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={900}
                    height={1000}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 px-2 pb-3">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-brand-ink/50 mb-2">{p.tag}</div>
                    <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight">{p.title}</h3>
                  </div>
                  <div className="shrink-0 w-11 h-11 rounded-full bg-brand-ink text-white flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </article>
            );
            return p.href ? (
              <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer" className="block">
                {Card}
              </a>
            ) : (
              <div key={p.title}>{Card}</div>
            );
          })}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-12 py-28 max-w-7xl mx-auto text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">(03) Get In Touch</div>
        <h2 className="font-display text-4xl md:text-7xl uppercase tracking-tight leading-[0.95] mb-10 max-w-4xl mx-auto">
          Let's Create <br />
          Something <span className="text-brand-accent">Impactful</span>
        </h2>
        <p className="text-brand-ink/70 max-w-xl mx-auto mb-10 leading-relaxed">
          Have a project idea or looking for a creative UI/UX Designer? Let's connect and create something impactful together.
        </p>
        <a
          href="mailto:harshavardhaniboodu@gmail.com"
          className="inline-flex items-center gap-3 bg-brand-ink text-white px-8 py-4 rounded-full text-base md:text-lg font-medium hover:bg-brand-accent transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-brand-accent-soft" />
          harshavardhaniboodu@gmail.com
        </a>

        <div className="flex justify-center gap-5 mt-12">
          {[Instagram, Linkedin, Dribbble].map((Icon, i) => (
          <a
            key={i}
            href={i === 1 ? "https://www.linkedin.com/in/harshavardhiniboddu/" : "#"}
            target={i === 1 ? "_blank" : undefined}
            rel={i === 1 ? "noopener noreferrer" : undefined}
            className="w-11 h-11 rounded-full border border-brand-ink/20 flex items-center justify-center hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-colors"
          >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-brand-ink/10 px-6 md:px-12 py-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-brand-ink/60">
        <div className="font-display text-base text-brand-ink">HARSHA<span className="text-brand-accent">.</span></div>
        <div>© 2026 Harsha Vardhini. Designed with care.</div>
      </footer>

    </div>
  );
}
