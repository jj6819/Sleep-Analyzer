import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { Moon, Clock, Coffee, Plane, Timer, Zap, Wind } from "lucide-react";

const tools = [
  {
    href: "/sleep-calculator",
    icon: Moon,
    title: "Sleep Calculator",
    description: "Find your ideal bedtime or wake-up time based on sleep cycles, latency, and a flexible wake window.",
  },
  {
    href: "/sleep-cycle-calculator",
    icon: Timer,
    title: "Sleep Cycle Calculator",
    description: "Plan around 80–100 minute sleep cycles and learn why 90 minutes is an estimate, not a guarantee.",
  },
  {
    href: "/power-nap-calculator",
    icon: Zap,
    title: "Power Nap Calculator",
    description: "Choose between a 20-minute power nap, coffee nap, or 90-minute full-cycle nap with wake timing.",
  },
  {
    href: "/caffeine-calculator",
    icon: Coffee,
    title: "Caffeine Cutoff Guide",
    description: "Estimate when to stop caffeine before bed based on your bedtime and sensitivity level.",
  },
  {
    href: "/jet-lag-planner",
    icon: Plane,
    title: "Jet Lag Planner",
    description: "Plan sleep, light exposure, naps, and caffeine timing around your destination time zone.",
  },
  {
    href: "/sleep-latency",
    icon: Clock,
    title: "Sleep Latency Guide",
    description: "Learn what sleep latency means, how to measure it, and how it affects your sleep calculator results.",
  },
  {
    href: "/wake-window",
    icon: Wind,
    title: "Wake Window Guide",
    description: "Understand how flexible bedtime and wake-up ranges make sleep planning work in real life.",
  },
];

export default function HomePage() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Moon className="w-10 h-10 text-indigo-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">NightOwl SleepCalc</h1>
          </div>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Practical sleep planning tools for real life. Find your bedtime, time your naps, cut caffeine smarter, and plan around jet lag.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-600 hover:bg-slate-800/60 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-indigo-900/50 p-2 rounded-lg group-hover:bg-indigo-800/60 transition-colors">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h2 className="font-semibold text-white">{tool.title}</h2>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{tool.description}</p>
                <div className="mt-4 text-indigo-400 text-sm font-medium group-hover:text-indigo-300 transition-colors">
                  Read guide →
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">About NightOwl</h2>
          <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
            NightOwl SleepCalc is an educational planning tool. It uses sleep duration, sleep cycles, latency, and wake windows to help you build a more realistic sleep schedule — without pretending sleep is perfectly clockwork. All content is for informational purposes only and does not replace medical advice.
          </p>
        </div>
      </div>
    </Layout>
  );
}
