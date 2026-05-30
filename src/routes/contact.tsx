import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, Phone, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Harsha Vardhini" },
      { name: "description", content: "Get in touch with Harsha Vardhini, UI/UX Designer." },
      { property: "og:title", content: "Contact — Harsha Vardhini" },
      { property: "og:description", content: "Get in touch with Harsha Vardhini, UI/UX Designer." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
    window.location.href = `mailto:harshavardhaniboodu@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-black text-white font-body">
      <nav className="px-6 md:px-12 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 font-display text-xl tracking-tight">
          <img src={portrait} alt="" className="w-7 h-7 rounded-full object-cover" />
          HARSHA<span className="text-emerald-400">.</span>
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back Home
        </Link>
      </nav>

      <section className="px-6 md:px-12 pt-12 pb-24 max-w-7xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-16">
          Let's Connect!
        </h1>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-20">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">Message Me</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  maxLength={100}
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors"
                />
                <input
                  type="email"
                  required
                  maxLength={255}
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>
              <textarea
                required
                maxLength={1000}
                rows={7}
                placeholder="Write a message..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-emerald-400 hover:bg-emerald-300 text-black font-semibold py-4 rounded-2xl transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact + Social */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact</h2>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:harshavardhaniboodu@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-emerald-400 transition-colors">
                    <Mail className="w-4 h-4" />
                    harshavardhaniboodu@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Call+with+Harsha+Vardhini&add=harshavardhaniboodu@gmail.com&details=Booking+a+call+via+portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/80 hover:text-emerald-400 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Book a Call
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Social Media</h2>
              <ul className="space-y-4">
                <li>
                  <a href="https://www.linkedin.com/in/harshavardhiniboddu/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-emerald-400 transition-colors">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-white/80 hover:text-emerald-400 transition-colors">
                    <span className="w-4 h-4 inline-flex items-center justify-center text-xs font-bold">Be</span>
                    Behance
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-white/80 hover:text-emerald-400 transition-colors">
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-white/80 hover:text-emerald-400 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    Whatsapp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}