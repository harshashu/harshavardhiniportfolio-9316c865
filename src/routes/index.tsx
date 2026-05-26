import { createFileRoute } from "@tanstack/react-router";
import projectFintech from "@/assets/project-fintech.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectSaas from "@/assets/project-saas.jpg";
import projectWellness from "@/assets/project-wellness.jpg";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const projects = [
  {
    title: "Lumina Finance",
    type: "UI/UX Strategy & Visual Design",
    label: "Fintech Dashboard Case Study",
    image: projectFintech,
  },
  {
    title: "Ether Interiors",
    type: "E-commerce Design & Branding",
    label: "Luxury Retail Experience",
    image: projectEcommerce,
  },
  {
    title: "Northwind Analytics",
    type: "SaaS Product Design",
    label: "Data Platform Redesign",
    image: projectSaas,
  },
  {
    title: "Sönder Wellness",
    type: "Mobile App & Brand System",
    label: "Wellness Mobile Experience",
    image: projectWellness,
  },
];

function Index() {
  return (
    <div className="bg-brand-bg text-brand-ink font-body selection:bg-brand-accent selection:text-white">
      <nav className="px-6 py-8 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
        <a href="#top" className="font-display font-bold tracking-tighter text-xl">HV.</a>
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-tight">
          <a href="#projects" className="hover:text-brand-accent/60 transition-colors">Projects</a>
          <a href="#about" className="hover:text-brand-accent/60 transition-colors">About</a>
          <a href="#contact" className="hover:text-brand-accent/60 transition-colors">Contact</a>
        </div>
        <a href="#contact" className="text-sm font-semibold border-b-2 border-brand-ink pb-0.5">Hire Me</a>
      </nav>

      <header id="top" className="px-6 pt-20 pb-32 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="font-display text-5xl md:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
            Designing Digital Experiences That Feel{" "}
            <span className="italic font-light">Effortless</span> &amp; Inspire Action
          </h1>
          <p className="text-lg md:text-2xl text-brand-ink/70 leading-relaxed mb-10 max-w-2xl">
            I'm Harsha Vardhini, a creative UI/UX Designer focused on building clean,
            user-friendly, and visually engaging digital experiences that connect users with brands.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-brand-ink text-white rounded-full font-medium hover:bg-brand-accent transition-all"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-brand-ink/20 rounded-full font-medium hover:bg-brand-muted transition-all"
            >
              Let's Build Something Amazing
            </a>
          </div>
        </div>
      </header>

      <section id="projects" className="px-6 py-24 bg-brand-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold mb-4">Portfolio</h2>
              <p className="text-brand-ink/60">
                A collection of thoughtfully designed projects focused on user experience,
                clean interfaces, and impactful digital solutions.
              </p>
            </div>
            <a href="#contact" className="mt-6 md:mt-0 text-sm font-bold flex items-center gap-2 group">
              Explore All Projects{" "}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((p) => (
              <article key={p.title} className="group cursor-pointer">
                <div className="w-full aspect-[4/3] bg-brand-muted outline outline-1 -outline-offset-1 outline-black/5 rounded-2xl mb-6 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.label}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
                <h3 className="font-display text-xl font-bold mb-1">{p.title}</h3>
                <p className="text-brand-ink/60 text-sm">{p.type}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="w-full aspect-[5/6] bg-brand-muted outline outline-1 -outline-offset-1 outline-black/5 rounded-2xl overflow-hidden">
          <img
            src={portrait}
            alt="Harsha Vardhini"
            width={1000}
            height={1200}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-4xl font-bold mb-8">About Me</h2>
          <div className="space-y-6 text-brand-ink/80 text-lg leading-relaxed">
            <p>
              I'm Harsha Vardhini, a passionate UI/UX Designer who loves transforming ideas
              into meaningful digital experiences. I focus on creating modern, intuitive,
              and visually appealing interfaces that solve real user problems.
            </p>
            <p>
              From user research and wireframing to polished UI designs, I enjoy every step
              of the design process. What makes my work different is my balance of creativity,
              usability, and attention to detail — designing experiences that are not only
              beautiful but also functional.
            </p>
          </div>
          <div className="mt-10 flex gap-12">
            <div>
              <span className="block text-2xl font-bold">5+</span>
              <span className="text-xs uppercase tracking-widest text-brand-ink/40 font-bold">
                Years Exp
              </span>
            </div>
            <div>
              <span className="block text-2xl font-bold">40+</span>
              <span className="text-xs uppercase tracking-widest text-brand-ink/40 font-bold">
                Projects
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="px-6 py-24 bg-brand-ink text-brand-bg">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 max-w-3xl mx-auto">
            Let's connect and create something impactful together.
          </h2>
          <p className="text-brand-bg/60 mb-12 max-w-xl mx-auto text-lg">
            Have a project idea or looking for a creative UI/UX Designer? I'm currently
            available for new opportunities.
          </p>
          <a
            href="mailto:hello@harsha.design"
            className="inline-block text-2xl md:text-4xl font-light border-b-2 border-brand-bg/20 pb-2 hover:border-brand-bg transition-colors"
          >
            hello@harsha.design
          </a>

          <div className="mt-24 pt-8 border-t border-brand-bg/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-brand-bg/40 tracking-widest uppercase">
              © 2024 Harsha Vardhini — UI/UX Portfolio
            </p>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-brand-bg/60 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-brand-bg/60 transition-colors">Dribbble</a>
              <a href="#" className="hover:text-brand-bg/60 transition-colors">Behance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
