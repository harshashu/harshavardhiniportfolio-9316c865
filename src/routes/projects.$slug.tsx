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
      "An SOS & Emergency Assistance App designed in Figma that helps users quickly send emergency alerts, share live location, and connect with emergency contacts during critical situations. The goal was to create a fast, intuitive, and reliable experience where every second matters. The entire design process focused on usability, clarity, and trust — ensuring users can act quickly in emergency scenarios. This project helped strengthen my skills in mobile UI design, user flow, and visual hierarchy.",
    objectives: [
      { label: "Speed", text: "Make emergency actions reachable in one tap" },
      { label: "Clarity", text: "Use clear visual hierarchy and unmistakable CTAs" },
      { label: "Trust", text: "Communicate safety and reliability through calm, confident design" },
      { label: "Usability", text: "Ensure anyone can act quickly under stress" },
    ],
    approach: [
      {
        heading: "Research & Planning",
        points: ["Studied emergency app patterns and accessibility guidelines", "Mapped critical user flows for panic-state usability"],
      },
      {
        heading: "UI Design",
        points: ["Used high-contrast colors and large tap targets", "Designed concise, action-first screens", "Tool used: Figma"],
      },
    ],
    features: [
      { label: "Clean & Modern Interface", text: "Minimal UI focused on critical actions" },
      { label: "One-Tap SOS Alert", text: "Instant alert to trusted contacts" },
      { label: "Real-Time Location Sharing", text: "Live location updates for responders" },
      { label: "Emergency Contact Management", text: "Easily add and manage trusted contacts" },
      { label: "Simple Navigation", text: "User-friendly flow optimized for urgent moments" },
    ],
  },
  "creamy-ice-poster": {
    title: "Creamy Ice Landing Page",
    tag: "Landing Page · UI Concept · 2025",
    image: lumenCover,
    link: lumenDetail,
    linkLabel: "View Full Design",
    role: "UI/UX Designer",
    intro:
      "A modern Ice Cream Landing Page UI concept inspired by a fun and premium dessert experience. The goal was to create a delightful landing experience that feels playful, modern, and instantly connects with users while highlighting the brand's products beautifully.",
    objectives: [
      { label: "Clean Layout", text: "Visually engaging and easy to scan" },
      { label: "Typography Hierarchy", text: "Attractive headings that guide the eye" },
      { label: "Vibrant Palette", text: "Fresh, playful colors that match the brand" },
      { label: "Product-Focused", text: "Hero section that puts the product front and center" },
    ],
    approach: [
      { heading: "Concept", points: ["Explored playful, premium dessert references", "Defined a fresh, vibrant color palette"] },
      { heading: "UI Design", points: ["Designed a product-focused hero section", "Built smooth, user-friendly navigation", "Focused on hierarchy, contrast, and balance"] },
    ],
    features: [
      { label: "Clean & Engaging Layout", text: "Visually delightful and easy to navigate" },
      { label: "Attractive Typography", text: "Clear hierarchy across the page" },
      { label: "Vibrant Color Palette", text: "Fresh and playful brand colors" },
      { label: "Product-Focused Hero", text: "Bold hero section showcasing the product" },
      { label: "Smooth Navigation", text: "User-friendly and intuitive flow" },
    ],
  },
  "avinya-interiors": {
    title: "Avinya Interiors",
    tag: "Interior Design · Branding · 2024",
    image: avinyaCover,
    link: "https://avinya-interiors.vercel.app/",
    linkLabel: "Visit Live Website",
    role: "UI/UX Designer",
    intro:
      "A modern and visually engaging website for Avinya Interiors — designed in Figma, guided by creativity, and built with passion. This project focuses on creating a strong digital presence for an interior design studio, helping it connect with clients and showcase its work effectively. Whether you're a homeowner looking to design your dream space or a business wanting to elevate your brand identity, this platform is crafted to deliver a seamless and inspiring experience. The project allowed me to explore the complete design process in Figma — from wireframes to high-fidelity UI — while understanding the importance of branding, user experience, and clean visual hierarchy.",
    objectives: [
      { label: "Strong Digital Presence", text: "Help the studio connect with clients and showcase work effectively" },
      { label: "User-Focused Layout", text: "Content strategy designed around the user's journey" },
      { label: "Clear Visual Hierarchy", text: "Refined branding elements and editorial layouts" },
      { label: "Engagement", text: "CTA-driven sections to improve client conversion" },
    ],
    approach: [
      { heading: "Wireframes & Structure", points: ["Built a structured design approach starting from wireframes", "Defined user-focused content strategy and information hierarchy"] },
      { heading: "High-Fidelity UI", points: ["Designed in Figma with modern aesthetics", "Strong typography and color contrast", "Clear call-to-action buttons throughout"] },
      { heading: "Design Highlights", points: ["Minimal and modern UI", "Smooth and intuitive navigation", "Professional and brand-focused layout"] },
    ],
    features: [
      { label: "User-Focused Layout", text: "Content strategy built around the visitor" },
      { label: "Clear Visual Hierarchy", text: "Branding elements that guide the eye" },
      { label: "Wireframes to Hi-Fi", text: "Structured design approach end-to-end" },
      { label: "Modern Aesthetics", text: "High-fidelity UI with a premium feel" },
      { label: "CTA-Driven Sections", text: "Designed to improve engagement and conversion" },
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
  const { project } = Route.useLoaderData() as { project: Project };

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