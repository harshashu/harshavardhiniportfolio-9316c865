import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Figma, Code, Brain, Wand2, Palette, Layers, Monitor, Smartphone, Layout, Lightbulb, FileCode, Paintbrush } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/stack")({
  head: () => ({
    meta: [
      { title: "Stack — Harsha Vardhini" },
      { name: "description", content: "UI/UX Designer stack, tools, and skills." },
      { property: "og:title", content: "Stack — Harsha Vardhini" },
      { property: "og:description", content: "UI/UX Designer stack, tools, and skills." },
    ],
  }),
  component: StackPage,
});

function StackPage() {
  return (
    <div className="bg-brand-bg text-brand-ink font-body selection:bg-brand-accent selection:text-white min-h-screen">
      {/* Nav */}
      <nav className="px-6 md:px-12 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <a href="/" className="flex items-center gap-2 font-display text-xl tracking-tight">
          <img src={portrait} alt="" className="w-7 h-7 rounded-full object-cover" />
          HARSHA<span className="text-brand-accent">.</span>
        </a>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-brand-ink text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back Home
        </Link>
      </nav>

      {/* Hero */}
      <header className="px-6 md:px-12 pt-12 pb-16 max-w-7xl mx-auto">
        <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">My Stack</div>
        <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tight leading-[0.95] mb-8">
          Tools &<br />
          <span className="text-brand-accent">Skills</span>
        </h1>
        <p className="text-brand-ink/70 max-w-2xl leading-relaxed text-lg">
          Skilled in designing user-centric digital experiences using modern UI/UX design tools and methodologies.
        </p>
      </header>

      {/* Core Skills Overview */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-8">Core Expertise</div>
        <div className="bg-brand-muted/60 border border-brand-ink/10 rounded-3xl p-8 md:p-12">
          <p className="text-brand-ink/80 leading-relaxed text-lg md:text-xl max-w-4xl">
            Skilled in designing user-centric digital experiences using modern UI/UX design tools and methodologies, 
            with hands-on experience in <span className="text-brand-accent font-semibold">Figma</span> for interface design, 
            wireframing, prototyping, and responsive layouts. Proficient in user research, user flow creation, interaction design, 
            visual hierarchy, and design systems to deliver intuitive and engaging user experiences.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-8">Design Tools</div>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Figma */}
          <div className="bg-brand-muted/60 border border-brand-ink/10 rounded-3xl p-8 hover:shadow-lg transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors">
              <Palette className="w-7 h-7 text-brand-accent" />
            </div>
            <h3 className="font-display text-2xl uppercase tracking-tight mb-3">Figma</h3>
            <p className="text-brand-ink/70 leading-relaxed">
              Interface design, wireframing, prototyping, and responsive layouts with hands-on expertise.
            </p>
          </div>

          {/* AI Tools */}
          <div className="bg-brand-muted/60 border border-brand-ink/10 rounded-3xl p-8 hover:shadow-lg transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors">
              <Brain className="w-7 h-7 text-brand-accent" />
            </div>
            <h3 className="font-display text-2xl uppercase tracking-tight mb-3">AI-Powered Tools</h3>
            <p className="text-brand-ink/70 leading-relaxed">
              Lovable, Uizard, and Claude Code to streamline ideation, content generation, and interface development workflows.
            </p>
          </div>

          {/* Front-end */}
          <div className="bg-brand-muted/60 border border-brand-ink/10 rounded-3xl p-8 hover:shadow-lg transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors">
              <Code className="w-7 h-7 text-brand-accent" />
            </div>
            <h3 className="font-display text-2xl uppercase tracking-tight mb-3">Front-End</h3>
            <p className="text-brand-ink/70 leading-relaxed">
              Foundational understanding of HTML and CSS for effective collaboration with developers and seamless design-to-development handoff.
            </p>
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-8">Methodologies</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "User Research", icon: Lightbulb },
            { label: "Wireframing", icon: Layout },
            { label: "Prototyping", icon: Layers },
            { label: "Visual Design", icon: Paintbrush },
            { label: "Interaction Design", icon: Smartphone },
            { label: "Design Systems", icon: Monitor },
            { label: "User Flows", icon: FileCode },
            { label: "Accessibility", icon: Wand2 },
          ].map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="bg-brand-muted/40 border border-brand-ink/10 rounded-2xl px-6 py-5 flex items-center gap-3 hover:bg-brand-accent/10 hover:border-brand-accent/30 transition-all"
            >
              <Icon className="w-5 h-5 text-brand-accent shrink-0" />
              <span className="font-medium text-sm">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-8">Design Philosophy</div>
        <div className="bg-brand-muted/60 border border-brand-ink/10 rounded-3xl p-8 md:p-12">
          <p className="text-brand-ink/80 leading-relaxed text-lg md:text-xl max-w-4xl">
            Experienced in creating clean, functional, and visually appealing digital experiences with a strong focus on 
            <span className="text-brand-accent font-semibold"> usability</span>, 
            <span className="text-brand-accent font-semibold"> accessibility</span>, and 
            <span className="text-brand-accent font-semibold"> user-centered design principles</span>.
          </p>
        </div>
      </section>

      <footer className="border-t border-brand-ink/10 px-6 md:px-12 py-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-brand-ink/60 mt-12">
        <div className="font-display text-base text-brand-ink">HARSHA<span className="text-brand-accent">.</span></div>
        <div>© 2026 Harsha Vardhini. Designed with care.</div>
      </footer>
    </div>
  );
}
