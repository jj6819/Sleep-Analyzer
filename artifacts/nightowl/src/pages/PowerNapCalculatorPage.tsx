import { ArticleLayout, Section, P, InfoTable, BulletList, FAQ, Callout } from "@/components/Layout";

export default function PowerNapCalculatorPage() {
  return (
    <ArticleLayout
      title="Power Nap Calculator: 20-Minute, Coffee Nap & 90-Minute Nap Timing"
      metaDescription="Choose a power nap, coffee nap, or full-cycle nap with realistic wake windows. Learn when to nap, how long to nap, and how to avoid grogginess."
      lastUpdated="May 2026"
    >
      <Section title="How nap planning works">
        <P>
          A nap calculator helps you decide how long to sleep and when to wake up so the nap solves the right problem. A 20-minute nap is useful for a quick alertness reset. A 90-minute nap is better for deeper recovery when you have time. A coffee nap can help in specific situations, but it is not a substitute for enough nighttime sleep.
        </P>
        <P>
          The best nap is not always the longest nap. It is the nap that improves alertness without causing heavy grogginess or delaying bedtime.
        </P>
      </Section>

      <Section title="Which nap length should you choose?">
        <P>Use your goal to pick the nap type.</P>
        <InfoTable
          headers={["Nap type", "Sleep target", "Total timer (10 min to fall asleep)", "Best use", "Main risk"]}
          rows={[
            ["Micro-rest", "10 minutes", "20 minutes", "Quick mental reset", "May be too short if very sleep-deprived"],
            ["Power nap", "20–30 minutes", "30–40 minutes", "Afternoon alertness", "Oversleeping into grogginess"],
            ["Coffee nap", "20 minutes after caffeine", "25–30 minutes", "Emergency alertness or shift-work break", "Too late in day can hurt bedtime"],
            ["Full-cycle nap", "About 90 minutes", "100–110 minutes", "Recovery after short sleep", "Can delay bedtime if taken late"],
          ]}
        />
        <Callout>
          CDC/NIOSH training notes that a brief nap of about 30 minutes can improve alertness during a night shift, and that consuming caffeine immediately before a short nap can combine the benefits of both after waking.
        </Callout>
      </Section>

      <Section title="Real nap timing examples">
        <div className="space-y-4 mb-6">
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h3 className="font-semibold text-white mb-2">Example 1: You woke up at 6:30 AM and feel sleepy after lunch</h3>
            <p className="text-slate-300 text-sm mb-1"><span className="text-indigo-400 font-medium">Best option:</span> 20-minute power nap around 1:00–2:30 PM.</p>
            <p className="text-slate-400 text-sm">Why: It is early enough that it is less likely to push bedtime later, and it is short enough to reduce the risk of waking from deep sleep.</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h3 className="font-semibold text-white mb-2">Example 2: You slept four hours before a long evening</h3>
            <p className="text-slate-300 text-sm mb-1"><span className="text-indigo-400 font-medium">Best option:</span> 90-minute nap earlier in the day, if your schedule allows.</p>
            <p className="text-slate-400 text-sm">Why: A longer nap gives more recovery. Add a wake-up buffer before driving, working, or doing anything safety-sensitive.</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h3 className="font-semibold text-white mb-2">Example 3: You work a night shift</h3>
            <p className="text-slate-300 text-sm mb-1"><span className="text-indigo-400 font-medium">Best option:</span> A planned pre-shift nap or a short break nap during the shift if your workplace allows it.</p>
            <p className="text-slate-400 text-sm">NIOSH cites studies where 1.5-hour, 2.5-hour, and 3-hour naps before night work improved alertness compared with no nap, and a 2.5-hour pre-shift nap plus caffeine at the start of the shift had positive alertness effects.</p>
          </div>
        </div>
      </Section>

      <Section title="How to avoid waking groggy after a nap">
        <P>
          Grogginess after a nap is often called sleep inertia. It is more likely when you wake from deeper sleep or when you are very sleep-deprived. To reduce it:
        </P>
        <BulletList
          items={[
            "Use a short nap if you need to function immediately after waking",
            "Avoid the awkward 45–60 minute range unless you know it works for you",
            "Add a 10–15 minute post-nap buffer before meetings, driving, or tasks",
            "Use light and movement after waking",
            "Do not nap so late that you reduce sleep pressure before bedtime",
          ]}
        />
        <Callout>
          CDC/NIOSH guidance emphasizes that naps and caffeine are fatigue countermeasures, but the best defense is getting enough good-quality sleep every day.
        </Callout>
      </Section>

      <Section title="How to set the nap calculator">
        <P>
          Choose the nap type first, then add your personal fall-asleep estimate.
        </P>
        <P>
          If you usually fall asleep fast during naps, use 5–10 minutes. If you lie down but need time to settle, use 15–20 minutes. If you rarely fall asleep but still want quiet rest, use the calculator as a rest timer rather than a strict sleep timer.
        </P>
      </Section>

      <FAQ
        items={[
          {
            q: "Is a 20-minute nap better than a 90-minute nap?",
            a: "It depends on the goal. A 20-minute nap is better for quick alertness. A 90-minute nap is better when you need more recovery and have time to wake slowly.",
          },
          {
            q: "Should I drink coffee before a nap?",
            a: "A coffee nap can help in specific cases because caffeine takes time to feel alerting. Do not use it close to bedtime, and avoid it if caffeine worsens anxiety, palpitations, reflux, or insomnia symptoms.",
          },
          {
            q: "Can naps replace nighttime sleep?",
            a: "No. Naps are useful tools, but they should not be the main plan for chronic sleep restriction.",
          },
        ]}
      />

      <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 text-sm text-slate-400">
        <p className="font-semibold text-slate-300 mb-2">Sources</p>
        <ul className="space-y-1">
          <li>CDC/NIOSH — Nap and caffeine strategies for shift workers and fatigue management</li>
        </ul>
      </div>
    </ArticleLayout>
  );
}
