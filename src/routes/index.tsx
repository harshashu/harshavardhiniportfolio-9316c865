import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Linkedin, Dribbble } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

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

const stats = [
  { value: "40+", label: "Projects Shipped" },
  { value: "25+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "12", label: "Design Awards" },
];

const projects = [
  { title: "Figma Prototype", tag: "Interactive · Prototype · 2025", image: project1 },
  { title: "Lumen Analytics Dashboard", tag: "Web · Product · 2025", image: project2 },
  { title: "Maison Rose Branding", tag: "Identity · Print · 2024", image: project3 },
  { title: "Wander Travel App", tag: "Mobile · UX/UI · 2024", image: project4 },
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
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8 uppercase">
            Designing <br />
            <span className="text-brand-accent">Digital</span> <br />
            Experiences
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
              href="#contact"
              className="inline-flex items-center gap-2 border border-brand-ink/30 px-7 py-3.5 rounded-full text-sm font-medium hover:bg-brand-muted transition-colors"
            >
              Let's Build Something
            </a>
          </div>
        </div>

        {/* Portrait card */}
        <div className="relative mx-auto w-full max-w-md aspect-[4/5]">
          {/* purple offset frame */}
          <div className="absolute inset-0 rounded-3xl bg-brand-accent-soft rotate-3" />
          {/* image */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden -rotate-1 shadow-xl">
            <img
              src={portrait}
              alt="Harsha Vardhini, UI/UX Designer"
              width={1000}
              height={1200}
              className="w-full h-full object-cover"
            />
          </div>
          {/* UX/UI badge */}
          <div className="absolute -top-4 -right-2 bg-brand-accent text-white rounded-2xl px-4 py-3 shadow-lg rotate-6">
            <div className="font-display text-sm leading-none">UX · UI</div>
            <div className="text-[10px] mt-1 font-medium opacity-90">Designer</div>
          </div>
          {/* years card */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-3 shadow-lg">
            <div className="font-display text-2xl leading-none">5+</div>
            <div className="text-[10px] mt-1 font-bold uppercase tracking-widest text-brand-ink/60">Years Crafting</div>
          </div>
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

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-brand-ink/10">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl md:text-5xl text-brand-ink">{s.value}</div>
              <div className="text-[11px] mt-2 font-bold uppercase tracking-widest text-brand-ink/60">{s.label}</div>
            </div>
          ))}
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
          {projects.map((p) => (
            <article key={p.title} className="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all">
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
          ))}
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
          href="mailto:harsha@example.com"
          className="inline-flex items-center gap-3 bg-brand-ink text-white px-8 py-4 rounded-full text-base md:text-lg font-medium hover:bg-brand-accent transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-brand-accent-soft" />
          harsha@example.com
        </a>

        <div className="flex justify-center gap-5 mt-12">
          {[Instagram, Linkedin, Dribbble].map((Icon, i) => (
            <a
              key={i}
              href="#"
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
