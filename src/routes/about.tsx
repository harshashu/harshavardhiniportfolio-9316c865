import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, GraduationCap, Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Harsha Vardhini" },
      { name: "description", content: "Learn more about Harsha Vardhini, UI/UX Designer." },
      { property: "og:title", content: "About — Harsha Vardhini" },
      { property: "og:description", content: "Learn more about Harsha Vardhini, UI/UX Designer." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-brand-bg text-brand-ink font-body selection:bg-brand-accent selection:text-white min-h-screen">
      {/* Nav */}
      <nav className="px-6 md:px-12 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <a href="/" className="font-display text-xl tracking-tight">HARSHA<span className="text-brand-accent">.</span></a>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-brand-ink text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back Home
        </a>
      </nav>

      {/* About Hero */}
      <header className="px-6 md:px-12 pt-12 pb-16 max-w-7xl mx-auto">
        <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">About Me</div>
        <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tight leading-[0.95] mb-8">
          Education &<br />
          <span className="text-brand-accent">Background</span>
        </h1>
        <p className="text-brand-ink/70 max-w-2xl leading-relaxed text-lg">
          I am a passionate UI/UX Designer dedicated to crafting meaningful digital experiences. 
          My foundation in Computer Science gives me a unique edge in understanding both design and technology.
        </p>
      </header>

      {/* Education Section */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-8">Education</div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Degree Card */}
          <div className="bg-brand-muted/60 border border-brand-ink/10 rounded-3xl p-8 hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-6">
              <GraduationCap className="w-7 h-7 text-brand-accent" />
            </div>
            <h3 className="font-display text-2xl uppercase tracking-tight mb-3">
              Bachelor of Technology
            </h3>
            <p className="text-brand-accent font-semibold text-lg mb-4">
              COMPUTER SCIENCE AND ENGINEERING
            </p>
            <div className="flex flex-col gap-3 text-brand-ink/70">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-accent" />
                <span className="font-medium">ANDHRA UNIVERSITY</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-brand-accent" />
                <span>2019 — 2023</span>
              </div>
            </div>
          </div>

          {/* About Card */}
          <div className="bg-brand-muted/60 border border-brand-ink/10 rounded-3xl p-8 hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-6">
              <span className="text-2xl">✦</span>
            </div>
            <h3 className="font-display text-2xl uppercase tracking-tight mb-4">
              Design Journey
            </h3>
            <div className="space-y-4 text-brand-ink/70 leading-relaxed">
              <p>
                Starting from a technical background in Computer Science, I discovered my passion for design 
                and the human side of technology.
              </p>
              <p>
                I specialize in transforming complex problems into simple, beautiful, and intuitive designs. 
                My approach combines user research, wireframing, prototyping, and visual design to create 
                experiences that truly resonate with users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-8">What I Do</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "User Research",
            "Wireframing",
            "Prototyping",
            "Visual Design",
            "Design Systems",
            "Interaction Design",
            "Branding",
            "Mobile UX",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-brand-muted/40 border border-brand-ink/10 rounded-2xl px-6 py-4 text-center font-medium hover:bg-brand-accent/10 hover:border-brand-accent/30 transition-all"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-brand-ink/10 px-6 md:px-12 py-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-brand-ink/60 mt-12">
        <div className="font-display text-base text-brand-ink">HARSHA<span className="text-brand-accent">.</span></div>
        <div>© 2026 Harsha Vardhini. Designed with care.</div>
      </footer>
    </div>
  );
}
