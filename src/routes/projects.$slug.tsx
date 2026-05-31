import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import sosCover from "@/assets/project-sos-cover.png";
import sosDetail from "@/assets/project-sos-detail.jpeg";
import lumenCover from "@/assets/lumen-cover.png";
import lumenDetail from "@/assets/lumen-detail.png";
import avinyaCover from "@/assets/avinya-cover.png";
import smartTask from "@/assets/smart-task.png";

type Project = {
  title: string;
  tag: string;
  image: string;
  link?: string;
  linkLabel?: string;
  role: string;
  intro: string;
  objectives: { label: string; text: string }[];
  approach: { heading: string; points: string[] }[];
  features: { label: string; text: string }[];
};

const PROJECTS: Record<string, Project> = {
  "smart-task-manager": {
    title: "Smart Task Manager",
    tag: "Web App · Productivity · 2024",
    image: smartTask,
    link: "https://smart-task-manger.vercel.app/",
    linkLabel: "View Live Project",
    role: "UI/UX Designer",
    intro:
      "Designed an intuitive and productivity-focused Smart Task Manager platform that helps users organize, schedule, and manage tasks effectively. The goal was to create a clean, engaging, and user-friendly digital experience that simplifies productivity while helping users stay organized in daily life and work. The design focuses on smart scheduling, reminders, recurring tasks, and visual productivity tracking to improve efficiency and reduce user effort. Inspired by modern productivity experiences, the interface emphasizes clarity, usability, and simplicity.",
    objectives: [
      { label: "Improve Productivity", text: "Help users organize and complete tasks more efficiently" },
      { label: "Simplify Task Management", text: "Design a clean and intuitive workflow with minimal complexity" },
      { label: "Smart Scheduling", text: "Make planning, reminders, and recurring task management seamless" },
      { label: "Better Visualization", text: "Help users track progress and productivity clearly" },
      { label: "Responsive Experience", text: "Ensure smooth usability across desktop and mobile devices" },
    ],
    approach: [
      {
        heading: "Research & Planning",
        points: [
          "Explored productivity and task management platforms to understand UX patterns and user behavior",
          "Focused on reducing cognitive load through clean layouts, simple navigation, and clear hierarchy",
          "Planned a modern and minimal interface to support faster interactions and better focus",
        ],
      },
      {
        heading: "Wireframing & UX Flows",
        points: [
          "Structured smooth user flows for task creation, scheduling, reminders, and task tracking",
          "Prioritized visual hierarchy for quick understanding and usability",
          "Designed interactions that make task organization feel effortless and engaging",
        ],
      },
      {
        heading: "UI Design",
        points: [
          "Used a clean, modern, and productivity-focused interface style",
          "Designed responsive layouts with readable typography, accessible interactions, and clear CTA placement",
          "Focused on usability, consistency, and simplicity to create a seamless experience across devices",
        ],
      },
    ],
    features: [
      { label: "Smart Task Creation", text: "Easily add, organize, and manage tasks" },
      { label: "Reminder & Scheduling", text: "Better planning with reminders and recurring task setup" },
      { label: "Productivity Tracking", text: "Visual progress monitoring for better task management" },
      { label: "MindStatus Tracking", text: "Smart productivity insights based on user habits" },
      { label: "Visual Rescheduling", text: "Easily organize and adjust tasks with interactive scheduling" },
      { label: "Mobile-Friendly Experience", text: "Optimized for multiple screen sizes and accessibility" },
    ],
  },
  "sos-app": {
    title: "SOS App Design",
    tag: "UX Case Study · Mobile · 2025",
    image: sosCover,
    link: sosDetail,
    linkLabel: "View Full Case Study",
    role: "UI/UX Designer",
    intro:
      "A mobile-first SOS application designed to deliver fast, reliable emergency assistance. The interface prioritizes clarity, speed, and accessibility so users can request help in critical moments with minimal effort.",
    objectives: [
      { label: "Speed", text: "Make emergency actions reachable in one or two taps" },
      { label: "Clarity", text: "Use clear visual hierarchy and unmistakable CTAs" },
      { label: "Trust", text: "Communicate safety and reliability through calm, confident design" },
    ],
    approach: [
      {
        heading: "Research & Planning",
        points: ["Studied emergency app patterns and accessibility guidelines", "Mapped critical user flows for panic-state usability"],
      },
      {
        heading: "UI Design",
        points: ["Used high-contrast colors and large tap targets", "Designed concise, action-first screens"],
      },
    ],
    features: [
      { label: "One-Tap SOS", text: "Instant alert to trusted contacts" },
      { label: "Live Location Sharing", text: "Real-time location updates for responders" },
      { label: "Emergency Contacts", text: "Quick access to saved contacts" },
    ],
  },
  "creamy-ice-poster": {
    title: "Creamy Ice Poster",
    tag: "Poster · Branding · 2025",
    image: lumenCover,
    link: lumenDetail,
    linkLabel: "View Full Poster",
    role: "Graphic & Brand Designer",
    intro:
      "A playful poster design exploring bold typography, vibrant color, and appetizing visuals for an ice-cream brand concept. The piece focuses on energy, freshness, and shelf-appeal.",
    objectives: [
      { label: "Brand Energy", text: "Capture a fun, indulgent brand personality" },
      { label: "Visual Impact", text: "Stand out with bold composition and color" },
    ],
    approach: [
      { heading: "Concept", points: ["Explored mood boards and references", "Iterated on color palette and typography"] },
      { heading: "Design", points: ["Focused on hierarchy, contrast, and balance", "Refined finishing details for print-readiness"] },
    ],
    features: [
      { label: "Bold Typography", text: "Custom display type for visual impact" },
      { label: "Vibrant Palette", text: "Warm, appetizing color system" },
    ],
  },
  "avinya-interiors": {
    title: "Avinya Interiors",
    tag: "Interior Design · Branding · 2024",
    image: avinyaCover,
    link: "https://avinya-interiors.vercel.app/",
    linkLabel: "Visit Live Website",
    role: "UI/UX & Web Designer",
    intro:
      "A clean, elegant website for an interior design studio. The design highlights the studio's portfolio with refined typography, generous whitespace, and warm visuals that reflect the brand's craft.",
    objectives: [
      { label: "Showcase Work", text: "Make the project portfolio the hero of the site" },
      { label: "Premium Feel", text: "Convey craftsmanship through editorial layouts" },
    ],
    approach: [
      { heading: "Discovery", points: ["Studied interior brand websites and editorial layouts", "Defined a calm, warm visual language"] },
      { heading: "UI Design", points: ["Editorial typography pairing", "Responsive, image-led layouts"] },
    ],
    features: [
      { label: "Project Gallery", text: "Curated, image-led portfolio" },
      { label: "Editorial Layout", text: "Magazine-style storytelling" },
      { label: "Responsive", text: "Polished across devices" },
    ],
  },
};

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS[params.slug];
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Harsha Vardhini` },
          { name: "description", content: loaderData.project.intro.slice(0, 155) },
          { property: "og:title", content: `${loaderData.project.title} — Harsha Vardhini` },
          { property: "og:description", content: loaderData.project.intro.slice(0, 155) },
          { property: "og:image", content: loaderData.project.image },
        ]
      : [],
  }),
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-brand-bg text-brand-ink">
      <div className="text-center">
        <h1 className="font-display text-3xl mb-3">Project not found</h1>
        <Link to="/" className="text-brand-accent hover:underline">Back home</Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen flex items-center justify-center bg-brand-bg text-brand-ink">
      <button onClick={reset} className="text-brand-accent hover:underline">Try again</button>
    </div>
  ),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <div className="bg-brand-bg text-brand-ink font-body selection:bg-brand-accent selection:text-white overflow-x-hidden">
      <nav className="px-6 md:px-12 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 font-display text-xl tracking-tight">
          <img src={portrait} alt="" className="w-7 h-7 rounded-full object-cover" />
          HARSHA<span className="text-brand-accent">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <Link to="/about" className="hover:text-brand-accent transition-colors">About</Link>
          <Link to="/" hash="work" className="hover:text-brand-accent transition-colors">Work</Link>
          <Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 border border-brand-ink/30 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-muted transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
      </nav>

      <header className="px-6 md:px-12 pt-8 pb-12 max-w-5xl mx-auto">
        <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">{project.tag}</div>
        <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tight leading-[0.95] mb-6">
          {project.title}
        </h1>
        <div className="text-sm font-semibold text-brand-ink/70 mb-8">Role: {project.role}</div>
        <div className="rounded-3xl overflow-hidden bg-brand-muted">
          <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
        </div>
      </header>

      <section className="px-6 md:px-12 pb-12 max-w-3xl mx-auto">
        <p className="text-base md:text-lg leading-relaxed text-brand-ink/80">{project.intro}</p>
      </section>

      <section className="px-6 md:px-12 pb-12 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-6">Objectives</h2>
        <ul className="space-y-3">
          {project.objectives.map((o) => (
            <li key={o.label} className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="font-semibold mb-1">{o.label}</div>
              <div className="text-brand-ink/70 text-sm leading-relaxed">{o.text}</div>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 md:px-12 pb-12 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-6">My Approach</h2>
        <div className="space-y-6">
          {project.approach.map((a) => (
            <div key={a.heading} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="font-display text-lg uppercase tracking-tight mb-3">{a.heading}</div>
              <ul className="space-y-2 list-disc list-inside text-brand-ink/75 text-sm leading-relaxed">
                {a.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 pb-16 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-6">Key Features</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {project.features.map((f) => (
            <div key={f.label} className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="font-semibold mb-1">{f.label}</div>
              <div className="text-brand-ink/70 text-sm leading-relaxed">{f.text}</div>
            </div>
          ))}
        </div>
      </section>

      {project.link && (
        <section className="px-6 md:px-12 pb-24 max-w-3xl mx-auto text-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-ink text-white px-8 py-4 rounded-full text-base font-medium hover:bg-brand-accent transition-colors"
          >
            {project.linkLabel ?? "Open Project"} <ArrowUpRight className="w-5 h-5" />
          </a>
        </section>
      )}

      <footer className="border-t border-brand-ink/10 px-6 md:px-12 py-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-brand-ink/60">
        <div className="font-display text-base text-brand-ink">HARSHA<span className="text-brand-accent">.</span></div>
        <div>© 2026 Harsha Vardhini. Designed with care.</div>
      </footer>
    </div>
  );
}