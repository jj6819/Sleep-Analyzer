import { ArticleLayout, Section, P, InfoTable, BulletList, FAQ, Callout } from "@/components/Layout";

export default function JetLagPlannerPage() {
  return (
    <ArticleLayout
      title="Jet Lag Planner: Sleep, Light, Nap & Caffeine Timing by Destination"
      metaDescription="Plan around jet lag with destination-time sleep, timed light exposure, short naps, hydration, and realistic first-night expectations."
      lastUpdated="May 2026"
    >
      <Section title="What causes jet lag">
        <P>
          Jet lag happens when your internal clock is out of sync with the local time at your destination. The CDC explains that jet lag is caused by a mismatch between your normal daily rhythms and a new time zone and can affect mood, concentration, and physical and mental performance.
        </P>
        <P>
          NightOwl's Jet Lag Planner helps you create a simple schedule for sleep, naps, caffeine, and light exposure. It is designed for general planning and does not replace medical advice, especially if you use sleep medications, melatonin, or have a medical condition.
        </P>
      </Section>

      <Section title="The destination-time rule">
        <P>
          Once your travel day starts, begin thinking in the destination time zone. The CDC Yellow Book recommends timing in-flight activities such as meals, sleep, and light exposure based on the destination time zone.
        </P>
        <P>
          That does not mean you must force sleep immediately. It means your choices should support the time zone you are entering.
        </P>
        <InfoTable
          headers={["Destination time during flight", "Better choice"]}
          rows={[
            ["Destination nighttime", "Eye mask, quiet rest, sleep attempt"],
            ["Destination morning", "Light, breakfast-style meal, avoid long sleep"],
            ["Destination afternoon", "Stay awake if possible, short nap only if needed"],
            ["Destination evening", "Dim lights, wind down, avoid late caffeine"],
          ]}
        />
      </Section>

      <Section title="Eastbound vs. westbound travel">
        <P>
          Eastbound travel usually asks your body to fall asleep earlier. Westbound travel usually asks your body to stay awake later. The CDC says that, before travel, going west may call for going to bed one or two hours later than usual, while going east may call for going to bed one or two hours earlier than usual.
        </P>
        <InfoTable
          headers={["Trip", "Clock challenge", "Simple pre-trip shift"]}
          rows={[
            ["New York → London", "Sleep earlier than body expects", "Move bedtime/wake time earlier 30–60 min per day"],
            ["Los Angeles → Tokyo", "Large westward shift", "Move later if schedule allows and plan first-day light carefully"],
            ["London → New York", "Stay awake later", "Move bedtime later before travel if practical"],
            ["Short 2-day business trip", "Full adjustment may not be worth it", "Consider keeping some home-time anchors"],
          ]}
        />
      </Section>

      <Section title="First-day arrival plans">
        <div className="space-y-4 mb-4">
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h3 className="font-semibold text-white mb-2">If you arrive in the morning</h3>
            <p className="text-slate-300 text-sm">Get outdoor light, eat on local time, and avoid a long nap. A short 20–30 minute nap can help if you are struggling, but the CDC Yellow Book notes that long daytime naps at the destination can make it harder to sleep at night.</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h3 className="font-semibold text-white mb-2">If you arrive in the afternoon</h3>
            <p className="text-slate-300 text-sm">Stay awake until a reasonable local bedtime if possible. Use light activity, a walk, hydration, and meals on local time. Avoid heavy alcohol use and late caffeine.</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h3 className="font-semibold text-white mb-2">If you arrive at night</h3>
            <p className="text-slate-300 text-sm">Keep the routine simple: dim lights, light meal if needed, shower, and bed. Do not use a long late nap as soon as you arrive unless safety requires it.</p>
          </div>
        </div>
      </Section>

      <Section title="Light exposure and melatonin">
        <P>
          The CDC Yellow Book says intentional light exposure or avoidance at appropriate times can help circadian adaptation, and that light helps synchronize the internal biological clock. Morning light after the right point in your body clock can shift you earlier, while evening light often shifts you later.
        </P>
        <P>
          Because timing matters, avoid applying a one-size-fits-all light rule for every itinerary. For large time-zone changes, direction of travel, number of time zones, and arrival time all matter.
        </P>
        <Callout>
          <strong className="text-white">Melatonin note:</strong> Some travelers use melatonin, but timing and dose matter. The CDC Yellow Book warns that taking melatonin at the wrong time can increase misalignment and notes that melatonin products are not regulated by the FDA in the same way as medicines, so label amounts may vary. Ask a healthcare professional before using melatonin if you are pregnant, managing a medical condition, taking medications, or planning use for a child.
        </Callout>
      </Section>

      <FAQ
        items={[
          {
            q: "Should I sleep on the plane?",
            a: "Sleep when it is nighttime at your destination. If it is daytime at your destination, avoid long sleep unless you are too tired to function safely.",
          },
          {
            q: "How long does jet lag last?",
            a: "It varies by person, direction, and number of time zones. Plan the first two days carefully if the trip includes an important meeting, race, exam, or event.",
          },
          {
            q: "Are long naps bad after landing?",
            a: "They can be. Short naps may improve alertness, but long daytime naps can make local nighttime sleep harder, according to CDC Yellow Book guidance.",
          },
        ]}
      />

      <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 text-sm text-slate-400">
        <p className="font-semibold text-slate-300 mb-2">Sources</p>
        <ul className="space-y-1">
          <li>CDC Travelers' Health — Jet lag causes and circadian disruption</li>
          <li>CDC Yellow Book — In-flight timing, light exposure, melatonin caution, and nap guidance</li>
        </ul>
      </div>
    </ArticleLayout>
  );
}
