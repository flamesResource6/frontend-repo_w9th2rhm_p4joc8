import React from 'react'
import Spline from '@splinetool/react-spline'
import { Menu, GraduationCap, Code2, Clock, Rocket, Star, CheckCircle2 } from 'lucide-react'

function App() {
  const scrollToApply = () => {
    const el = document.getElementById('apply')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70 bg-slate-950/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-semibold leading-none">Nova IT Bootcamp</p>
              <p className="text-xs text-white/60">Learn by building — industry ready</p>
            </div>
          </div>
          <button onClick={scrollToApply} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 active:bg-white/20 transition text-sm">
            <Rocket className="h-4 w-4" /> Apply
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center overflow-hidden">
        {/* 3D Spline Scene */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Gradient overlays for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/40 to-slate-950"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-xl sm:max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs sm:text-sm">
              <Star className="h-3.5 w-3.5 text-yellow-400" />
              Job-focused training • Mentors from FAANG & startups
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Break into Tech with a playful, modern learning experience
            </h1>
            <p className="mt-4 sm:mt-6 text-white/80 text-base sm:text-lg">
              Master the most in-demand skills in 12–24 weeks. Build portfolio-worthy projects,
              get 1:1 mentorship, and land interviews with our career support.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={scrollToApply} className="rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-3 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20">
                Apply Now
              </button>
              <a href="#curriculum" className="rounded-lg px-5 py-3 border border-white/15 bg-white/5 hover:bg-white/10 transition text-white text-center">
                Explore Curriculum
              </a>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-white/70">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Flexible schedules</div>
              <div className="flex items-center gap-2"><Code2 className="h-4 w-4" /> Project-based</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Career support</div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4" /> Live mentorship</div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative py-12 sm:py-16" id="curriculum">
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.20)_0%,rgba(56,189,248,0)_70%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: 'Full‑Stack Web',
                desc: 'React, Node, databases, and cloud. Build and deploy real apps.',
              },
              {
                title: 'Data & AI',
                desc: 'Python, SQL, machine learning, and LLM workflows with real datasets.',
              },
              {
                title: 'Cloud & DevOps',
                desc: 'Docker, CI/CD, monitoring, and cloud infrastructure fundamentals.',
              },
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur hover:bg-white/10 transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600"></div>
                  <p className="text-lg font-semibold">{item.title}</p>
                </div>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { k: '600+ hrs', v: 'Hands-on coding', i: <Code2 className="h-5 w-5" /> },
                { k: '2x faster', v: 'Job-ready pathway', i: <Rocket className="h-5 w-5" /> },
                { k: '95%', v: 'Career support satisfaction', i: <Star className="h-5 w-5 text-yellow-400" /> },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                    {stat.i}
                  </div>
                  <div>
                    <p className="text-xl font-semibold">{stat.k}</p>
                    <p className="text-white/70 text-sm">{stat.v}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Student stories</h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                quote: 'I landed my first dev role 2 weeks after graduating. The projects made my portfolio stand out!',
                name: 'Aisha • Frontend Engineer',
              },
              {
                quote: 'Mentors were incredible. Weekly code reviews and mock interviews boosted my confidence.',
                name: 'Diego • Data Analyst',
              },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-white/90">“{t.quote}”</p>
                <p className="mt-4 text-white/60 text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section id="apply" className="py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold">Ready to start?</h3>
          <p className="mt-3 text-white/70">Submit your application and get a free career consult within 48 hours.</p>
          <form className="mt-6 grid gap-3 text-left">
            <input type="text" placeholder="Full name" className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
            <input type="email" placeholder="Email" className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
            <select className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white/90">
              <option value="" className="bg-slate-900">Program of interest</option>
              <option className="bg-slate-900">Full‑Stack Web</option>
              <option className="bg-slate-900">Data & AI</option>
              <option className="bg-slate-900">Cloud & DevOps</option>
            </select>
            <button type="button" className="mt-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-3 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20">
              Submit Application
            </button>
            <p className="text-xs text-white/60">No commitment. We’ll only contact you about the bootcamp.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Nova IT Bootcamp</p>
          <div className="flex items-center gap-3 text-sm text-white/70">
            <a href="#curriculum" className="hover:text-white">Programs</a>
            <span className="opacity-30">•</span>
            <a href="#apply" className="hover:text-white">Apply</a>
            <span className="opacity-30">•</span>
            <a href="/test" className="hover:text-white">System Check</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
