import { ArticleLayout, Section, P, InfoTable, BulletList, FAQ, Callout } from "@/components/Layout";

export default function WakeWindowPage() {
  return (
    <ArticleLayout
      title="Wake Window: Flexible Bedtime & Wake-Up Ranges for Real-Life Sleep Planning"
      metaDescription="Learn how wake windows make sleep planning more realistic by turning exact bedtimes and wake-up times into flexible ranges."
      lastUpdated="May 2026"
    >
      <Section title="What is a wake window?">
        <P>
          A wake window is a small flexible range around a recommended bedtime or wake-up time. Instead of saying "go to bed at exactly 10:37 PM," NightOwl might suggest a window such as 10:25–10:45 PM.
        </P>
        <P>
          This matters because sleep timing is not exact. Sleep cycles vary, sleep latency changes, and real life does not always follow a calculator. The NHLBI explains that sleep cycles generally restart every 80–100 minutes, not at one exact universal length. A wake window keeps you close to the plan without making the plan brittle.
        </P>
      </Section>

      <Section title="Why exact-minute sleep plans fail">
        <P>Exact sleep plans fail because they assume:</P>
        <BulletList
          items={[
            "You fall asleep at the same speed every night",
            "Every sleep cycle is the same length",
            "Your evening routine is perfectly predictable",
            "Missing one minute means the plan is ruined",
          ]}
        />
        <P>
          None of that is how normal life works. A wake window gives you structure with enough flexibility to follow through.
        </P>
      </Section>

      <Section title="How NightOwl uses wake windows">
        <P>NightOwl calculates a target time, then expands it into a practical range.</P>
        <InfoTable
          headers={["Calculator result", "With 10-minute wake window", "What to do"]}
          rows={[
            ["10:40 PM bedtime", "10:30–10:50 PM", "Start lights-out routine anytime in the range"],
            ["6:30 AM wake-up", "6:20–6:40 AM", "Choose the alarm that best fits your morning"],
            ["2:00 PM nap wake", "1:50–2:10 PM", "Pick a wake time that works with your calendar"],
          ]}
        />
        <Callout>
          The window does not mean every minute inside it is biologically identical. It means the recommendation is close enough to the target to be useful.
        </Callout>
      </Section>

      <Section title="Wake window examples by user type">
        <div className="space-y-4 mb-6">
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h3 className="font-semibold text-white mb-1">The commuter</h3>
            <p className="text-slate-400 text-sm">Maya needs to leave by 7:20 AM. Her ideal alarm is 6:30 AM, but some mornings she needs extra time. A 6:20–6:40 AM wake window lets her choose 6:20 on office days and 6:40 on remote days without rebuilding the whole sleep plan.</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h3 className="font-semibold text-white mb-1">The student</h3>
            <p className="text-slate-400 text-sm">Leo has a 9:00 AM class and studies at night. An exact bedtime feels impossible, so he uses a 10:45–11:05 PM bedtime window. If he misses 10:45 by a few minutes, the night is not "ruined." He still has a plan.</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h3 className="font-semibold text-white mb-1">The napper</h3>
            <p className="text-slate-400 text-sm">Priya wants a power nap between meetings. A wake window helps her choose a nap end time that avoids joining a call groggy.</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h3 className="font-semibold text-white mb-1">The parent</h3>
            <p className="text-slate-400 text-sm">Jordan's toddler bedtime changes the evening. A 15-minute bedtime window is more realistic than an exact minute because the household routine varies.</p>
          </div>
        </div>
      </Section>

      <Section title="How wide should your wake window be?">
        <InfoTable
          headers={["Window size", "Best for"]}
          rows={[
            ["5 minutes", "Strict schedules, alarms, experiments"],
            ["10 minutes", "Most bedtime and wake-time plans"],
            ["15 minutes", "Busy households, variable routines"],
            ["20+ minutes", "Travel, naps, shift work, or flexible weekends"],
          ]}
        />
        <P>
          Start with 10 minutes. If the plan feels stressful, widen it. If you are testing cycle length carefully, narrow it.
        </P>
      </Section>

      <Section title="What a wake window does not fix">
        <P>
          A wake window makes timing more realistic, but it cannot fix too little sleep. If you choose a six-hour plan every night, a flexible wake window may help you wake at a better time, but it will not replace the sleep you are missing. CDC guidance lists seven or more hours as the adult recommendation for ages 18–60.
        </P>
        <P>
          A wake window also cannot solve persistent insomnia, frequent awakenings, loud snoring, or unsafe daytime sleepiness. Use it as a planning aid, not as medical advice.
        </P>
      </Section>

      <FAQ
        items={[
          {
            q: "Is a wake window the same thing as a baby wake window?",
            a: "No. On NightOwl, a wake window means a flexible range around a recommended sleep or wake time. It is not the infant-sleep meaning of 'time awake between naps.'",
          },
          {
            q: "Is a wider wake window always better?",
            a: "No. A wider window is easier to follow but less precise. A narrower window is more precise but can feel stressful. Most users should start around 10–15 minutes.",
          },
          {
            q: "Can I use wake windows on weekends?",
            a: "Yes. A weekend wake window can reduce schedule drift. For example, if your weekday alarm is 6:30 AM, a weekend window of 7:30–8:30 AM may allow recovery without shifting your body clock too far.",
          },
        ]}
      />

      <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 text-sm text-slate-400">
        <p className="font-semibold text-slate-300 mb-2">Sources</p>
        <ul className="space-y-1">
          <li>NHLBI — Sleep cycle duration and variation</li>
          <li>CDC — Adult sleep hour recommendations (ages 18–60)</li>
        </ul>
      </div>
    </ArticleLayout>
  );
}
