export default function Page() {
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams("");
  const company = params.get("company") || "impact.com";
  const reason = params.get("reason") || "your platform powers partnerships for brands I admire, and I want to contribute on the frontend—building reliable, accessible UI with great DX and test coverage.";

  const LINKS = {
    resume: "/resume.pdf",
    coverLetterPDF: "#",
    portfolio: "https://portfolio-nikhil-dhillons-projects.vercel.app",
    github: "https://github.com/NikhilDhillon",
  };

  const SKILLS = [
    "JavaScript","TypeScript","React","Next.js","Vue","Vite","HTML5","CSS3","Tailwind CSS","Figma","Jest","Vitest","React Testing Library","Git","CI/CD","Accessibility (WCAG AA)","REST APIs","JSON/Type Safety",
  ];

  const CoverLetter = () => (
    <section className="w-full">
      <div className="mx-auto max-w-3xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-indigo-300 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">Cover Letter</h2>
        <div className="prose prose-invert prose-slate max-w-none">
          <p>Dear Hiring Team at {company},</p> 
          <br/>
          <p>I’m a third‑year CS student who loves building clean, accessible interfaces and shipping production-quality code with tests. I’m excited about {company} because {reason}</p>
           <br/>
          <p>My recent work includes building component-driven UIs with TypeScript/React, adding Jest/Vitest suites with high coverage, and using regression to keep releases safe and fast.</p>
           <br/>
          <p>I enjoy collaborative workflows—Figma handoffs, design tokens, semantic HTML, and accessibility checks (axe/Lighthouse). I’m comfortable owning tickets end‑to‑end: breaking down requirements, writing small PRs with clear descriptions, and iterating from feedback. I also value DX: strict TypeScript, ESLint/Prettier, and CI that runs tests and accessibility/lint gates.</p>
           <br/>
          <p>I’m available full‑time starting January 5, 2026 for an 8‑month term (also open to 4 months). I’d love to contribute to your frontend—components, dashboards, and workflows that help customers scale partnerships with confidence.</p>
           <br/>
          <p>Thank you for your time and consideration.</p>
           <br/>
          <p>Sincerely,<br/>Nikhil Dhillon</p>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <a href={LINKS.resume} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium hover:bg-white/20">View Resume ↗</a>
          {LINKS.coverLetterPDF !== "#" && (
            <a href={LINKS.coverLetterPDF} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium hover:bg-white/20">Download Cover Letter (PDF) ↗</a>
          )}
          <a href={LINKS.portfolio} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium hover:bg-white/20">Portfolio Website ↗</a>
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium hover:bg-white/20">GitHub ↗</a>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <main className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-start px-6 py-16">
        <h1 className="mb-8 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Hi, my name is <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">Nikhil Dhillon</span></h1>
        <div className="mb-8 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-200">
          <span>Frontend Software Engineer</span>
          <span className="opacity-70">•</span>
          <span>Victoria</span>
          <span className="opacity-70">•</span>
          <span>Start: Jan 5, 2026</span>
          <span className="opacity-70">•</span>
          <span>8 months preferred (available 4/8)</span>
        </div>
        <section className="w-full">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/10 p-6 shadow-2xl">
            <h2 className="mb-2 text-2xl font-semibold text-white/90">Why I'm excited about <span className="text-indigo-200">{company}</span></h2>
            <p className="text-slate-200">I would love to apply to <span className="font-medium text-indigo-200">{company}</span> because {reason}</p>
          </div>
        </section>
        <section className="mt-8 w-full">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-indigo-300 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">Skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <span key={s} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-slate-100">{s}</span>
              ))}
            </div>
          </div>
        </section>
        <div className="mt-8 w-full">
          <CoverLetter />
        </div>
        <footer className="mt-10 text-center text-xs text-slate-300/70">© {new Date().getFullYear()} Nikhil Dhillon</footer>
      </main>
    </div>
  );
}