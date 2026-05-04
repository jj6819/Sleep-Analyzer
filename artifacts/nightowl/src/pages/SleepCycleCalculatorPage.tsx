import { ArticleLayout, Section, P, InfoTable, BulletList, FAQ, Callout } from "@/components/Layout";

export default function SleepCycleCalculatorPage() {
  return (
    <ArticleLayout
      title="Sleep Cycle Calculator: Plan Around 80–100 Minute Sleep Cycles"
      metaDescription="Use sleep cycles to estimate better bedtimes and wake times. Learn why cycle length varies, how many cycles to plan for, and when cycle timing is less useful."
      lastUpdated="May 2026"
    >
      <Section title="What a sleep cycle calculator does">
        <P>
          A sleep cycle calculator helps you plan bedtimes and wake times around the natural rhythm of sleep stages. Many calculators use a 90-minute cycle, but real sleep is more flexible than that. The NHLBI explains that sleep cycles through REM and non-REM phases and that the cycle starts over about every 80–100 minutes, usually four to six times per night.
        </P>
        <P>
          NightOwl uses cycle planning as a practical estimate. It helps you avoid random bedtimes, but it does not claim to know exactly which sleep stage you will be in at a specific minute.
        </P>
      </Section>

      <Section title="What happens inside a sleep cycle?">
        <P>
          A typical night moves between non-REM sleep and REM sleep. Non-REM sleep includes lighter stages and deeper slow-wave sleep. REM sleep is associated with active brain patterns and dreaming. According to the NHLBI, deep sleep usually takes up more time earlier in the night, while REM sleep usually becomes more common later in the night.
        </P>
        <P>
          That matters because a "cycle" is not identical every time it repeats. Your first cycle and your fifth cycle may feel different. Stress, caffeine, alcohol, room temperature, pain, illness, and interruptions can all affect how cleanly you move through the night.
        </P>
      </Section>

      <Section title="Why 90 minutes is an estimate, not a guarantee">
        <P>
          The 90-minute cycle is a helpful middle value. It is easy to calculate and close to many published descriptions of adult sleep cycles. But it should not be treated like a countdown timer.
        </P>
        <P>
          NightOwl lets you adjust the cycle length because some people feel better using 85 minutes, 95 minutes, or another nearby value. If the default suggestions consistently leave you waking groggy, try changing the cycle length by five minutes for one week and compare how you feel.
        </P>
        <InfoTable
          headers={["Week", "Cycle setting", "What to track"]}
          rows={[
            ["Week 1", "90 minutes", "Wake-up difficulty, snooze use, energy by 10 AM"],
            ["Week 2", "85 minutes", "Same wake time, same caffeine cutoff if possible"],
            ["Week 3", "95 minutes", "Compare average, not one morning"],
          ]}
        />
        <Callout>
          Do not change every variable at once. If you change bedtime, caffeine, naps, and cycle length simultaneously, you will not know what helped.
        </Callout>
      </Section>

      <Section title="Example: planning cycles from a 7:00 AM alarm">
        <P>
          Assume a 7:00 AM wake-up, 20-minute sleep latency, and 10-minute wake window.
        </P>
        <InfoTable
          headers={["Estimated cycles", "Sleep time", "Lights-out target", "Bedtime window", "Notes"]}
          rows={[
            ["4 cycles", "6 hours", "12:40 AM", "12:30–12:50 AM", "Backup only for unusually late nights"],
            ["5 cycles", "7.5 hours", "11:10 PM", "11:00–11:20 PM", "Practical weeknight target"],
            ["6 cycles", "9 hours", "9:40 PM", "9:30–9:50 PM", "Recovery or high-performance day target"],
          ]}
        />
        <Callout>
          If you often choose four cycles, the calculator may help you wake at a better point, but it cannot remove the effects of chronic short sleep.
        </Callout>
      </Section>

      <Section title="When cycle timing matters less">
        <P>
          Cycle timing is least useful when your sleep is fragmented. If you wake repeatedly, have untreated sleep apnea symptoms, work rotating shifts, drink alcohol close to bed, or use caffeine late in the day, your sleep may not follow neat blocks.
        </P>
        <P>In those cases, focus first on:</P>
        <BulletList
          items={[
            "Enough sleep opportunity",
            "Consistent wake time",
            "Caffeine cutoff",
            "Dark, quiet, cool bedroom",
            "Managing naps and alcohol timing",
            "Medical evaluation for persistent symptoms",
          ]}
        />
        <P>Once sleep is more stable, cycle timing may become more useful.</P>
      </Section>

      <FAQ
        items={[
          {
            q: "Is a sleep cycle always 90 minutes?",
            a: "No. NightOwl uses 90 minutes as a default planning estimate, but the NHLBI describes cycles as restarting every 80–100 minutes.",
          },
          {
            q: "How many cycles should I plan for?",
            a: "Most adults should start by protecting enough total sleep. Five cycles can be a realistic weekday target, while six cycles may be better for recovery. Four cycles should be occasional, not a routine.",
          },
          {
            q: "Why do I still wake up tired after six cycles?",
            a: "Possible reasons include poor sleep quality, awakenings you do not remember, alcohol, late caffeine, illness, stress, irregular schedules, or a sleep disorder. Cycle timing is only one piece of sleep planning.",
          },
        ]}
      />

      <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 text-sm text-slate-400">
        <p className="font-semibold text-slate-300 mb-2">Sources</p>
        <ul className="space-y-1">
          <li>NHLBI — Sleep cycle stages, REM and non-REM phases, cycle duration</li>
        </ul>
      </div>
    </ArticleLayout>
  );
}
