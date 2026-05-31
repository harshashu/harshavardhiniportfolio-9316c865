import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Wand2, Layers, Monitor, Smartphone, Layout, Lightbulb, FileCode, Paintbrush } from "lucide-react";
import { SiFramer, SiFigma, SiCanva, SiHtml5, SiOpenai } from "react-icons/si";
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

      {/* My Tech Toolbox */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight mb-12">My Tech Toolbox</h2>
        <div className="flex flex-col gap-5">
          {[
            { name: "Framer", category: "Web Design", Icon: SiFramer, color: "#fff", desc: "Framer is my go-to tool for building fully responsive, interactive websites without writing code. It allows me to turn high-fidelity designs into real, functional web experiences—faster than traditional development. With Framer, I can add smooth animations, dynamic interactions, and responsive layouts, all while maintaining full design control. Its seamless integration with Figma and component-based workflow helps me prototype and publish with precision. Whether it's a landing page, a personal portfolio, or a client project, Framer empowers me to design and deploy modern websites that feel alive and intuitive." },
            { name: "Figma", category: "UI Design", Icon: SiFigma, color: "#F24E1E", desc: "Figma is at the core of my design process. I use it extensively for everything from low-fidelity wireframes to polished, interactive prototypes. Its collaborative features allow me to work seamlessly with teams and clients in real time, speeding up feedback and iteration. I'm confident in creating responsive UI designs, building scalable design systems, managing components, and conducting usability testing—all within Figma. Whether it's web or mobile, I use Figma to bring clarity, consistency, and creativity to every project I touch." },
            { name: "Photoshop", category: "Image Manipulation", Icon: (p: { className?: string; style?: React.CSSProperties }) => <span className={p.className} style={{ ...p.style, fontWeight: 700, fontSize: "1.1rem", lineHeight: 1 }}>Ps</span>, color: "#31A8FF", desc: "Adobe Photoshop plays a key role in my visual design workflow. I use it to craft high-quality assets, refine UI elements, and create compelling mockups and marketing materials. Whether it's image retouching, layout composition, or designing graphics from scratch, Photoshop helps me bring strong visual identity and polish to every project. Its precision tools allow me to deliver crisp, professional visuals that enhance the overall user experience." },
            { name: "Illustrator", category: "Vector Graphics", Icon: (p: { className?: string; style?: React.CSSProperties }) => <span className={p.className} style={{ ...p.style, fontWeight: 700, fontSize: "1.1rem", lineHeight: 1 }}>Ai</span>, color: "#FF9A00", desc: "I rely on Illustrator for creating scalable vector graphics, logos, icons, and custom illustrations. Its precision tools allow me to build clean, flexible design assets that maintain quality across all screen sizes. Whether it's branding, UI icons, or visual storytelling, Illustrator helps me bring creativity and clarity to my designs." },
            { name: "Canva", category: "Quick Graphics", Icon: SiCanva, color: "#00C4CC", desc: "Canva is my go-to tool for creating quick, clean, and impactful visuals—especially for social media graphics, presentations, pitch decks, and marketing assets. While I primarily design in Figma and Adobe tools, Canva helps me speed up content creation when working with non-design teams or clients who need editable, brand-aligned creatives. Its drag-and-drop simplicity and vast asset library make it ideal for fast-paced freelance projects and visual storytelling." },
            { name: "HTML 5", category: "Structure and Content", Icon: SiHtml5, color: "#E34F26", desc: "I have a basic understanding of HTML5, which helps me structure content with semantic tags and collaborate effectively with developers. While I focus on design, this knowledge allows me to better communicate layout intentions, ensure accessibility, and design interfaces that are development-ready." },
            { name: "Chat GPT", category: "Content Generation", Icon: SiOpenai, color: "#10A37F", desc: "I actively use ChatGPT to enhance my design workflow—whether it's generating UX copy, exploring design ideas, writing case study content, or solving tricky UI challenges. My strength in prompting helps me extract precise, creative, and actionable responses, making ChatGPT a powerful assistant in ideation, research, and rapid content generation." },
          ].map(({ name, category, Icon, color, desc }) => (
            <div key={name} className="bg-brand-muted/60 border border-brand-ink/10 rounded-3xl p-6 md:p-8 hover:border-brand-accent/30 transition-all">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-black/40 flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 md:w-8 md:h-8" style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl md:text-2xl tracking-tight">{name}</h3>
                  <p className="text-brand-ink/60 text-sm mb-4">{category}</p>
                  <p className="text-brand-ink/70 leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
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
