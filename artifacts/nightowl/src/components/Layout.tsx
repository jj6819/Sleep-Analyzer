import { Link, useLocation } from "wouter";
import { Moon, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/sleep-calculator", label: "Sleep Calculator" },
  { href: "/sleep-cycle-calculator", label: "Sleep Cycles" },
  { href: "/power-nap-calculator", label: "Power Nap" },
  { href: "/caffeine-calculator", label: "Caffeine" },
  { href: "/jet-lag-planner", label: "Jet Lag" },
  { href: "/sleep-latency", label: "Sleep Latency" },
  { href: "/wake-window", label: "Wake Window" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-indigo-400 hover:text-indigo-300 transition-colors">
            <Moon className="w-5 h-5" />
            NightOwl SleepCalc
          </Link>
          <nav className="hidden md:flex items-center gap-1 flex-wrap">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  location === link.href
                    ? "bg-indigo-600 text-white"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden text-slate-400 hover:text-slate-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                  location === link.href
                    ? "bg-indigo-600 text-white"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-800"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-slate-800 bg-slate-900 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-slate-800/50 rounded-xl p-5 mb-6 border border-slate-700">
            <h3 className="font-semibold text-slate-300 mb-2 text-sm uppercase tracking-wide">Educational Disclaimer</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              NightOwl SleepCalc is an educational planning tool. It can help you estimate bedtimes, wake times, naps, and caffeine cutoffs, but it does not diagnose sleep disorders or replace medical advice. Talk with a healthcare professional if you have persistent insomnia, loud snoring, pauses in breathing, morning headaches, severe daytime sleepiness, or drowsiness while driving.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <Link href="/" className="flex items-center gap-2 font-bold text-indigo-400 mb-2">
                <Moon className="w-4 h-4" />
                NightOwl SleepCalc
              </Link>
              <p className="text-slate-500 text-sm">Practical sleep planning tools for real life.</p>
            </div>
            <nav className="flex flex-wrap gap-x-4 gap-y-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-800 text-center text-slate-600 text-xs">
            © {new Date().getFullYear()} NightOwl SleepCalc. For educational use only.
          </div>
        </div>
      </footer>
    </div>
  );
}

export function ArticleLayout({
  title,
  metaDescription,
  lastUpdated,
  children,
}: {
  title: string;
  metaDescription: string;
  lastUpdated?: string;
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-4 py-10">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">{title}</h1>
          <p className="text-slate-400 text-lg leading-relaxed">{metaDescription}</p>
          {lastUpdated && (
            <p className="text-slate-600 text-sm mt-3">Last reviewed: {lastUpdated}</p>
          )}
        </header>
        <div className="prose-nightowl">{children}</div>
      </article>
    </Layout>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-slate-800">{title}</h2>
      {children}
    </section>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="text-slate-300 leading-relaxed mb-4">{children}</p>;
}

export function SourceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline text-sm">
      {children}
    </a>
  );
}

export function InfoTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-6 rounded-xl border border-slate-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-800">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left text-slate-300 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-slate-900/50" : "bg-slate-800/30"}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-slate-300">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-none space-y-2 mb-6">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-slate-300">
          <span className="text-indigo-400 mt-1 flex-shrink-0">→</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Section title="Frequently Asked Questions">
      <div className="space-y-5">
        {items.map((item, i) => (
          <div key={i} className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h3 className="font-semibold text-white mb-2">{item.q}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-indigo-950/50 border border-indigo-800 rounded-xl p-4 mb-6 text-slate-300 text-sm leading-relaxed">
      {children}
    </div>
  );
}
